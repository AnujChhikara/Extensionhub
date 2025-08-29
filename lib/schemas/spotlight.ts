import z from 'zod';
import { AppwriteDocument, BaseSchema } from './_util';

export const SpotlightSchema = z
  .object({
    extensionId: z.string().max(256),
    date: z.date(),
  })
  .extend(BaseSchema.shape);

export type Spotlight = z.infer<typeof SpotlightSchema>;
export type SpotlightDocument = Spotlight & AppwriteDocument;
