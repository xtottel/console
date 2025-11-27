// packages/config/src/index.ts
import { envSchema, type Env } from './env';
import { constants } from './constants';

export const env = envSchema.parse(process.env);
export type { Env };
export { constants };

export const isProduction = env.NODE_ENV === 'production';
export const isDevelopment = env.NODE_ENV === 'development';

export const config = {
  env,
  constants,
  isProduction,
  isDevelopment,
};