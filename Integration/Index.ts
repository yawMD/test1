import { ExpressApplication } from 'CommonServer/Utils/Express';
import App from 'CommonServer/Utils/StartServer';

export const APP_NAME: string = 'integration';

const app: ExpressApplication = App(APP_NAME);

export default app;
