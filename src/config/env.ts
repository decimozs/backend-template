import { z } from 'zod';
import { config } from 'dotenv';

config();

const envSchema = z.object({
  PORT: z.coerce.number().default(8787),
  DATABASE_URL: z.string(),
});

export const envConfig = envSchema.parse({
  PORT: process.env.PORT,
  DATABASE_URL: process.env.DATABASE_URL,
});

export type EnvConfig = z.infer<typeof envSchema>;
