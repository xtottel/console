// apps/api/src/index.ts
import { serve } from 'bun';
import { app } from './core/app';
import { config } from '@sendexa/config';

const server = serve({
  port: config.env.PORT,
  hostname: config.env.HOST,
  fetch: app.fetch,
});

console.log(`🚀 Sendexa API running on http://${server.hostname}:${server.port}`);
console.log(`🌍 Environment: ${config.env.NODE_ENV}`);
console.log(`🎮 Sandbox mode: ${config.env.SANDBOX_MODE}`);