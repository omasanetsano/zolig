import {env} from 'cloudflare:workers';
export function database(){const db=(env as {DB?:D1Database}).DB;if(!db)throw new Error('Content database is unavailable');return db}
