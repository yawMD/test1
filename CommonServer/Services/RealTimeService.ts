import API from 'Common/Utils/API';
import { RealtimeHostname, HttpProtocol, ClusterKey } from '../Config';
import { JSONObjectOrArray } from 'Common/Types/JSON';
import Route from 'Common/Types/API/Route';
import Headers from 'Common/Types/API/Headers';
import ObjectID from 'Common/Types/ObjectID';
import HTTPResponse from 'Common/Types/API/HTTPResponse';
import EmptyResponse from 'Common/Types/API/EmptyResponse';

class Service {
    private api: API;
    private headers: Headers;

    public constructor() {
        this.api = new API(HttpProtocol, RealtimeHostname);
        this.headers = {
            CLUSTER_KEY: ClusterKey.toString(),
        };
    }

    public async send(
        projectId: ObjectID,
        eventType: string,
        data: JSONObjectOrArray
    ): Promise<HTTPResponse<EmptyResponse>> {
        return await this.api.post<EmptyResponse>(
            new Route(`/send-created-incident`),
            {
                projectId,
                eventType,
                data,
            },
            this.headers
        );
    }
}

export default new Service();
