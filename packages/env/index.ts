import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

const server: Parameters<typeof createEnv>[0]['server'] = {
  DATABASE_URL: z.string().min(1).url().optional(),
  BETTERSTACK_API_KEY: z.string().min(1).optional(),
  BETTERSTACK_URL: z.string().min(1).url().optional(),
  ANALYZE: z.string().optional(),

  // Added by Node
  NODE_ENV: z.enum(['development', 'production']).optional(),
  CI: z.string().optional(),

  // Added by Sentry Integration, Vercel Marketplace
  SENTRY_ORG: z.string().min(1).optional(),
  SENTRY_PROJECT: z.string().min(1).optional(),

  // Added by Vercel
  VERCEL: z.string().optional(),
  NEXT_RUNTIME: z.enum(['nodejs', 'edge']).optional(),
};

const client: Parameters<typeof createEnv>[0]['client'] = {
  NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: z.string().min(1).startsWith('pk_').optional(),
  NEXT_PUBLIC_CLERK_SIGN_IN_URL: z.string().min(1).startsWith('/').optional(),
  NEXT_PUBLIC_CLERK_SIGN_UP_URL: z.string().min(1).startsWith('/').optional(),
  NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL: z.string().min(1).startsWith('/').optional(),
  NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL: z.string().min(1).startsWith('/').optional(),
  NEXT_PUBLIC_APP_URL: z.string().min(1).url().optional(),
  NEXT_PUBLIC_WEB_URL: z.string().min(1).url().optional(),
  NEXT_PUBLIC_DOCS_URL: z.string().min(1).url().optional(),
  NEXT_PUBLIC_GA_MEASUREMENT_ID: z.string().min(1).startsWith('G-').optional(),
  NEXT_PUBLIC_POSTHOG_KEY: z.string().min(1).startsWith('phc_').optional(),
  NEXT_PUBLIC_POSTHOG_HOST: z.string().min(1).url().optional(),

  // Added by Vercel
  NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL: z.string().min(1).url().optional(),
};

export const env = createEnv({
  client,
  server,
  runtimeEnv: {
    ...Object.fromEntries(
      Object.keys(server).map((key) => [key, process.env[key]])
    ),
    ...Object.fromEntries(
      Object.keys(client).map((key) => [key, process.env[key]])
    ),
  },
});
