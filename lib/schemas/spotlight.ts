import z from 'zod';
import { BaseSchema } from './util';

export const SpotlightSchema = z
  .object({
    extensionId: z.string().max(256),
    date: z.date(),
  })
  .extend(BaseSchema);

export type Spotlight = z.infer<typeof SpotlightSchema>;
