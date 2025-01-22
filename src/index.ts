import { serve } from '@hono/node-server';
import { Hono } from 'hono';

const app = new Hono();

app.get('/', c => {
  return c.text('Hello Hono! atsdasfasfasfasfasfasfa');
});

const port = 3000;
console.log(`Backend is running on http://localhost:${port}`);

serve({
  fetch: app.fetch,
  port,
});
