import z from 'zod';
import { BaseSchema } from './util';

export const ViewSchema = z
  .object({
    userId: z.string().max(256),
    extensionId: z.string().max(256),
  })
  .extend(BaseSchema);

export type View = z.infer<typeof ViewSchema>;
