// apps/api/src/core/app.ts
import { Hono } from 'hono';
import { logger } from 'hono/logger';
import { prettyJSON } from 'hono/pretty-json';
import { cors } from 'hono/cors';
import { config } from '@sendexa/config';

const app = new Hono();

// Global middleware
app.use('*', logger());
app.use('*', cors());
app.use('*', prettyJSON());

// Health check
app.get('/health', (c) => {
  return c.json({ 
    status: 'ok', 
    timestamp: new Date().toISOString(),
    environment: config.env.NODE_ENV 
  });
});

// API routes
app.get('/', (c) => {
  return c.json({ 
    message: 'Sendexa API', 
    version: '1.0.0',
    sandbox: config.env.SANDBOX_MODE 
  });
});

// 404 handler
app.notFound((c) => {
  return c.json({ error: 'Route not found' }, 404);
});

// Error handler
app.onError((err, c) => {
  console.error('Server error:', err);
  return c.json({ error: 'Internal server error' }, 500);
});

export { app };