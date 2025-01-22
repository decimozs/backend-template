import { defineConfig } from 'drizzle-kit';
import { envConfig } from './src/config/env.js';

export default defineConfig({
  schema: './src/db/schema/index.ts',
  out: './src/db/migrations',
  dialect: 'postgresql',
  dbCredentials: {
    url: envConfig.DATABASE_URL!,
  },
});
