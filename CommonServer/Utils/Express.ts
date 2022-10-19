import 'ejs';
import express from 'express';
import logger from './Logger';
import { JSONObjectOrArray } from 'Common/Types/JSON';
import ObjectID from 'Common/Types/ObjectID';
import JSONWebTokenData from 'Common/Types/JsonWebTokenData';
import {
    UserGlobalAccessPermission,
    UserTenantAccessPermission,
} from 'Common/Types/Permission';
import UserType from 'Common/Types/UserType';
import Dictionary from 'Common/Types/Dictionary';

export type RequestHandler = express.RequestHandler;
export type NextFunction = express.NextFunction;

export const ExpressStatic: Function = express.static;
export const ExpressJson: Function = express.json;
export const ExpressUrlEncoded: Function = express.urlencoded;

export type ProbeRequest = {
    id: ObjectID;
};

export type ExpressRequest = express.Request;
export type ExpressResponse = express.Response;
export type ExpressApplication = express.Application;
export type ExpressRouter = express.Router;

export interface OneUptimeRequest extends express.Request {
    probe?: ProbeRequest;
    id: ObjectID;
    requestStartedAt?: Date;
    requestEndedAt?: Date;
    userType?: UserType;
    userAuthorization?: JSONWebTokenData;
    tenantId?: ObjectID;
    userGlobalAccessPermission?: UserGlobalAccessPermission;
    userTenantAccessPermission?: Dictionary<UserTenantAccessPermission>; // tenantId <-> UserTenantAccessPermission
}

export interface OneUptimeResponse extends express.Response {
    logBody: JSONObjectOrArray;
}

class Express {
    private static app: express.Application;

    public static getRouter(): express.Router {
        return express.Router();
    }

    public static setupExpress(): void {
        this.app = express();
    }

    public static getExpressApp(): express.Application {
        if (!this.app) {
            this.setupExpress();
        }

        return this.app;
    }

    public static async launchApplication(
        appName: string
    ): Promise<express.Application> {
        return new Promise<express.Application>((resolve: Function) => {
            if (!this.app) {
                this.setupExpress();
            }

            this.app.listen(this.app.get('port'), () => {
                // eslint-disable-next-line
                logger.info(`${appName} server started on port: ${this.app.get('port')}`);
                return resolve(this.app);
            });
        });
    }
}

export default Express;
