import ProbeService from '../Services/ProbeService';
import BadDataException from 'Common/Types/Exception/BadDataException';
import Version from 'Common/Types/Version';

import {
    ExpressRequest,
    ExpressResponse,
    NextFunction,
    OneUptimeRequest,
} from '../Utils/Express';

import { ClusterKey as CLUSTER_KEY } from '../Config';
import ObjectID from 'Common/Types/ObjectID';
import LocalCache from '../Infrastructure/LocalCache';
import Probe from 'Model/Models/Probe';

export default class ProbeMiddleware {
    public static async isAuthorizedProbeMiddleware(
        req: ExpressRequest,
        _res: ExpressResponse,
        next: NextFunction
    ): Promise<void> {
        let probeKey: ObjectID | null = null,
            probeName: string | null = null,
            clusterKey: ObjectID | null = null,
            probeVersion: Version | null = null,
            probeId: ObjectID | null = null;

        if (req.params && req.params['probeKey']) {
            probeKey = new ObjectID(req.params['probeKey'] || '');
        } else if (req.query && req.query['probeKey']) {
            probeKey = new ObjectID((req.query['probeKey'] as string) || '');
        } else if (req.headers && req.headers['probekey']) {
            // Header keys are automatically transformed to lowercase
            probeKey = new ObjectID(req.headers['probekey'] as string);
        } else if (req.body && req.body.probeKey) {
            probeKey = req.body.probeKey;
        }

        if (!probeKey) {
            throw new BadDataException('Probe key not found.');
        }

        if (req.params && req.params['probeName']) {
            probeName = req.params['probeName'];
        } else if (req.query && req.query['probeName']) {
            probeName = req.query['probeName'] as string;
        } else if (req.headers && req.headers['probename']) {
            // Header keys are automatically transformed to lowercase
            probeName = req.headers['probename'] as string;
        } else if (req.body && req.body.probeName) {
            probeName = req.body.probeName;
        }

        if (!probeName) {
            throw new BadDataException('Probe Name not found.');
        }

        if (req.params && req.params['clusterKey']) {
            clusterKey = new ObjectID(req.params['clusterKey'] as string);
        } else if (req.query && req.query['clusterKey']) {
            clusterKey = new ObjectID(req.query['clusterKey'] as string);
        } else if (req.headers && req.headers['clusterkey']) {
            // Header keys are automatically transformed to lowercase
            clusterKey = new ObjectID(req.headers['clusterkey'] as string);
        } else if (req.body && req.body.clusterKey) {
            clusterKey = req.body.clusterKey;
        }

        if (req.params && req.params['probeVersion']) {
            probeVersion = new Version(req.params['probeVersion']);
        } else if (req.query && req.query['probeVersion']) {
            probeVersion = new Version(req.query['probeVersion'] as string);
        } else if (req.headers && req.headers['probeversion']) {
            // Header keys are automatically transformed to lowercase
            probeVersion = new Version(req.headers['probeversion'] as string);
        } else if (req.body && req.body.probeVersion) {
            probeVersion = req.body.probeVersion;
        }

        if (!probeVersion) {
            throw new BadDataException('Probe version not found.');
        }

        if (clusterKey && clusterKey === CLUSTER_KEY) {
            /*
             * If cluster key matches then just query by probe name,
             * Because if the probe key does not match, we can update probe key later
             * Without updating mognodb database manually.
             */

            if (LocalCache.hasValue('probe', probeName)) {
                probeId = (LocalCache.getModel('probe', probeName) as Probe).id;
            } else {
                const probe: Probe | null = await ProbeService.findOneBy({
                    query: {
                        name: probeName,
                    },
                    props: { isRoot: true },
                });

                if (probe && probe.id) {
                    probeId = probe.id;

                    LocalCache.setModel('probe', probeName, probe);
                }
            }
        } else if (LocalCache.hasValue('probe', probeName)) {
            probeId = LocalCache.getModel<Probe>('probe', probeName).id;
        } else {
            const probe: Probe | null = await ProbeService.findOneBy({
                query: {
                    name: probeName,
                    key: probeKey,
                },
                select: {
                    _id: true,
                    name: true,
                    key: true,
                    probeVersion: true,
                },
                props: { isRoot: true },
            });

            if (probe && probe.id) {
                probeId = probe.id;

                LocalCache.setModel('probe', probeName, probe);
            }
        }

        if (!probeId && (!clusterKey || clusterKey !== CLUSTER_KEY)) {
            throw new BadDataException(
                'Probe key and probe name do not match.'
            );
        }

        if (!probeId) {
            //Create a new probe.
            let probe: Probe = new Probe();
            probe.name = probeName;
            probe.probeVersion = probeVersion;
            probe.key = probeKey;

            probe = await ProbeService.create({
                data: probe,
                props: { isRoot: true },
            });

            probeId = probe.id;

            LocalCache.setModel('probe', probeName, probe);
        }

        if (LocalCache.getModel<Probe>('probe', probeName).key !== probeKey) {
            //Update probe key becasue it does not match.

            await ProbeService.updateProbeKeyByName(probeName, probeKey);

            const probe: Probe | null = await ProbeService.findOneBy({
                query: { name: probeName, key: probeKey },
                select: {
                    _id: true,
                    name: true,
                    key: true,
                    probeVersion: true,
                },
                props: { isRoot: true },
            });

            if (probe) {
                probeId = probe.id;

                LocalCache.setModel('probe', probeName, probe);
            }
        }

        const oneuptimeRequest: OneUptimeRequest = req as OneUptimeRequest;

        if (!probeId) {
            throw new BadDataException('Probe ID not found');
        }

        oneuptimeRequest.probe = {
            id: probeId,
        };

        // Run in background.
        await ProbeService.updateLastAlive(probeName);

        if (
            probeVersion &&
            (!LocalCache.getModel<Probe>('probe', probeName).version ||
                LocalCache.getModel<Probe>(
                    'probe',
                    probeName
                ).version?.toString() !== probeVersion.toString())
        ) {
            await ProbeService.updateProbeVersionByName(
                probeName,
                probeVersion
            );
        }

        return next();
    }
}
