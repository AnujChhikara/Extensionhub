import z from 'zod';
import { AppwriteDocument, BaseSchema } from '@/lib/schemas/_util';

export const ViewSchema = z
  .object({
    userId: z.string().max(256),
    extensionId: z.string().max(256),
  })
  .extend(BaseSchema.shape);

export type View = z.infer<typeof ViewSchema>;
export type ViewDocument = View & AppwriteDocument;
