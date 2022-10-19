import ApiService from '../Utils/apiService';

import ping from 'ping';
/*
 * It collects all monitors then ping them one by one to store their response
 * Checks if the IP Address of the IP monitor is up or down
 * Creates incident if a IP Address is down and resolves it when they come back up
 */
export default {
    ping: async ({ monitor }: $TSFixMe) => {
        if (monitor && monitor.type) {
            if (monitor.data.IPAddress) {
                let retry: $TSFixMe = true;
                let retryCount: $TSFixMe = 0;
                while (retry || retryCount > 2) {
                    const { res, resp, rawResp }: $TSFixMe = await pingfetch(
                        monitor.data.IPAddress
                    );

                    const response: $TSFixMe = await ApiService.ping(
                        monitor._id,
                        {
                            monitor,
                            res,
                            resp,
                            rawResp,
                            type: monitor.type,
                            retryCount,
                        }
                    );

                    if (response && !response.retry) {
                        retry = false;
                    } else {
                        retryCount++;
                    }
                }
            }
        }
    },
};

const pingfetch: Function = async (IPAddress: $TSFixMe): void => {
    const now: $TSFixMe = new Date().getTime();
    let resp: $TSFixMe = null;
    let rawResp: $TSFixMe = null;
    let res: $TSFixMe = null;

    try {
        const response: $TSFixMe = await ping.promise.probe(IPAddress, {
            timeout: 120,
            extra: ['-i', '2'],
        });

        const isAlive: $TSFixMe = response ? response.alive : false;

        res = new Date().getTime() - now;

        resp = {
            status: isAlive ? 200 : 408,
            body: null,
        };
        rawResp = {
            body: null,
            status: isAlive ? 200 : 408,
        };
    } catch (error) {
        res = new Date().getTime() - now;
        resp = { status: 408, body: error };
    }

    return { res, resp, rawResp };
};
