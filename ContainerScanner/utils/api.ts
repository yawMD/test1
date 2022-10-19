import axios from 'axios';
import config from './config';

const _this: $TSFixMe = {
    getHeaders: () => {
        return {
            'Access-Control-Allow-Origin': '*',
            Accept: 'application/json',
            'Content-Type': 'application/json;charset=UTF-8',
            containerScannerName: config.containerScannerName,
            containerScannerKey: config.containerScannerKey,
            clusterKey: config.clusterKey,
            containerScannerVersion: config.containerScannerVersion,
        };
    },
    post: (url: URL, data: $TSFixMe) => {
        const headers: $TSFixMe = this.getHeaders();

        return new Promise((resolve: Function, reject: Function) => {
            axios({
                method: 'POST',
                url: `${config.serverUrl}/${url}`,
                headers,
                data,
            })
                .then((response: $TSFixMe) => {
                    resolve(response.data);
                })
                .then((error: Error) => {
                    if (error && error.response && error.response.data) {
                        error = error.response.data;
                    }
                    if (error && error.data) {
                        error = error.data;
                    }
                    reject(error);
                });
        });
    },

    get: (url: URL) => {
        const headers: $TSFixMe = this.getHeaders();
        return new Promise((resolve: Function, reject: Function) => {
            axios({
                method: 'GET',
                url: `${config.serverUrl}/${url}`,
                headers,
            })
                .then((response: $TSFixMe) => {
                    resolve(response.data);
                })
                .then((error: Error) => {
                    if (error && error.response && error.response.data) {
                        error = error.response.data;
                    }
                    if (error && error.data) {
                        error = error.data;
                    }
                    reject(error);
                });
        });
    },

    put: (url: URL, data: $TSFixMe) => {
        const headers: $TSFixMe = this.getHeaders();
        return new Promise((resolve: Function, reject: Function) => {
            axios({
                method: 'PUT',
                url: `${config.serverUrl}/${url}`,
                headers,
                data,
            })
                .then((response: $TSFixMe) => {
                    resolve(response.data);
                })
                .then((error: Error) => {
                    if (error && error.response && error.response.data) {
                        error = error.response.data;
                    }
                    if (error && error.data) {
                        error = error.data;
                    }
                    reject(error);
                });
        });
    },

    delete: (url: URL, data: $TSFixMe) => {
        const headers: $TSFixMe = this.getHeaders();
        return new Promise((resolve: Function, reject: Function) => {
            axios({
                method: 'DELETE',
                url: `${config.serverUrl}/${url}`,
                headers,
                data,
            })
                .then((response: $TSFixMe) => {
                    resolve(response.data);
                })
                .then((error: Error) => {
                    if (error && error.response && error.response.data) {
                        error = error.response.data;
                    }
                    if (error && error.data) {
                        error = error.data;
                    }
                    reject(error);
                });
        });
    },
};

export default _this;
