import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import { envConfig } from './config/env.ts';

const app = new Hono();

app.get('/', c => {
  return c.text('Hello Hono!');
});

console.log(`Backend is running on http://localhost:${envConfig.PORT}`);

serve({
  fetch: app.fetch,
  port: envConfig.PORT,
});
