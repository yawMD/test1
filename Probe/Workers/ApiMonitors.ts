import ApiService from '../Utils/apiService';

import pingfetch from '../Utils/pingFetch';
import logger from 'CommonServer/Utils/Logger';

/*
 * It collects all monitors then ping them one by one to store their response
 * Checks if the website of the url in the monitors is up or down
 * Creates incident if a website is down and resolves it when they come back up
 */
export default {
    ping: async ({ monitor }: $TSFixMe) => {
        if (monitor && monitor.type) {
            if (monitor.data.url) {
                const headers: $TSFixMe = await ApiService.headers(
                    monitor.headers,
                    monitor.bodyType
                );
                const body: $TSFixMe = await ApiService.body(
                    monitor && monitor.text && monitor.text.length
                        ? monitor.text
                        : monitor.formData,
                    monitor && monitor.text && monitor.text.length
                        ? 'text'
                        : 'formData'
                );

                let retry: $TSFixMe = true;
                let retryCount: $TSFixMe = 0;
                while (retry || retryCount > 2) {
                    const { res, resp, rawResp }: $TSFixMe = await pingfetch(
                        monitor.data.url,
                        monitor.method,
                        body,
                        headers
                    );

                    logger.info(
                        `Monitor ID ${monitor._id}: Start saving data to ingestor.`
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

                    logger.info(
                        `Monitor ID ${monitor._id}: End saving data to ingestor.`
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
