import { Pool } from 'pg';
declare global {
    // allow global `var` declarations
    // eslint-disable-next-line no-var
    var _db: Pool | undefined;
}
    
const connectionString = process.env.DATA_BASE_URL;
if (!connectionString) {
    throw new Error('Missing required environment variable: DATA_BASE_URL');
}

export const pool = global._db || new Pool({
    connectionString,
    ssl: { rejectUnauthorized: false },
    max: 10,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 10000,
});

if (process.env.NODE_ENV !== 'production') {
    global._db = pool;
}
