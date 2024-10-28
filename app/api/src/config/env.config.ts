import DotenvFlow from 'dotenv-flow';
import z from 'zod';
DotenvFlow.config();

const envSchema = z.object({
  PORT: z.number().default(3000),
});

export const env = envSchema.parse(process.env);
