import z from 'zod'

const envSchema = z.object({
  API_URL: z.string().optional(),
  NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID: z.string(),
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
})

const vars = {
  API_URL: process.env.API_URL,
  NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID,
  NODE_ENV: process.env.NODE_ENV,
}

export const env = envSchema.parse(vars)
