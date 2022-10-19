import Protocol from 'Common/Types/API/Protocol';
import ObjectID from 'Common/Types/ObjectID';
import Port from 'Common/Types/Port';
import Hostname from 'Common/Types/API/Hostname';

export const DisableSignup: boolean = process.env['DISABLE_SIGNUP'] === 'true';

export const IsSaaSService: boolean = process.env['IS_SAAS_SERVICE'] === 'true';

export const DatabaseHost: Hostname = Hostname.fromString(
    process.env['DATABASE_HOST'] || ''
);

export const DatabasePort: Port = new Port(process.env['DATABASE_PORT'] || '');

export const DatabaseUsername: string =
    process.env['DATABASE_USERNAME'] || 'oneuptimedbuser';

export const DatabasePassword: string = process.env['DATABASE_PASSWORD'] || '';

export const DatabaseName: string =
    process.env['DATABASE_NAME'] || 'oneuptimedb';

export const EncryptionSecret: ObjectID = new ObjectID(
    process.env['ENCRYPTIOJN_SECRET'] || ''
);

export const AirtableApiKey: string = process.env['AIRTABLE_API_KEY'] || '';

export const AirtableBaseId: string = process.env['AIRTABLE_BASE_ID'] || '';

export const ClusterKey: ObjectID = new ObjectID(
    process.env['CLUSTER_KEY'] || ''
);

export const RealtimeHostname: Hostname = Hostname.fromString(
    process.env['REALTIME_HOSTNAME'] || ''
);

export const MailHostname: Hostname = Hostname.fromString(
    process.env['MAIL_HOSTNAME'] || ''
);

export const DashboardApiHostname: Hostname = Hostname.fromString(
    process.env['DASHBOARD_API_HOSTNAME'] || ''
);

export const ProbeApiHostname: Hostname = Hostname.fromString(
    process.env['PROBE_API_HOSTNAME'] || ''
);

export const DataIngestorHostname: Hostname = Hostname.fromString(
    process.env['DATA_INGESTOR_HOSTNAME'] || ''
);

export const AccountsHostname: Hostname = Hostname.fromString(
    process.env['ACCOUNTS_HOSTNAME'] || ''
);

export const HomeHostname: Hostname = Hostname.fromString(
    process.env['HOME_HOSTNAME'] || ''
);

export const DashboardHostname: Hostname = Hostname.fromString(
    process.env['DASHBOARD_HOSTNAME'] || ''
);

export const Env: string = process.env['NODE_ENV'] || '';

export const Version: string = process.env['npm_package_version'] || '';

export const HttpProtocol: Protocol = (
    process.env['HTTP_PROTOCOL'] || ''
).includes('https')
    ? Protocol.HTTPS
    : Protocol.HTTP;

// Redis does not require password.
export const RedisHostname: string = process.env['REDIS_HOST'] || '';
export const RedisPassword: string = process.env['REDIS_PASSWORD'] || '';
export const RedisPort: Port = new Port(process.env['REDIS_PORT'] || '');
