import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { envConfig } from '../config/env.js';

const client = postgres(envConfig.DATABASE_URL!);
export const db = drizzle({ client });
