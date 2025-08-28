import z from 'zod';
import { AppwriteDocument, BaseSchema } from './_util';

export const BookmarkSchema = z
  .object({
    userId: z.string().max(256),
    extensionId: z.string().max(256),
  })
  .extend(BaseSchema.shape);

export type Bookmark = z.infer<typeof BookmarkSchema>;
export type BookMarkDocument = Bookmark & AppwriteDocument;
