// packages/config/src/env.ts
import { z } from 'zod';

export const envSchema = z.object({
  // Server
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  PORT: z.string().transform(Number).default('3000'),
  HOST: z.string().default('0.0.0.0'),
  
  // Basic Auth (we'll add more later)
  JWT_SECRET: z.string().min(32).default('dev-jwt-secret-min-32-characters-for-now'),
  
  // Features
  SANDBOX_MODE: z.string().transform((val) => val === 'true').default('true'),
});

export type Env = z.infer<typeof envSchema>;