import z from 'zod';
import { BaseSchema } from './util';

export const BookmarkSchema = z
  .object({
    userId: z.string().max(256),
    extensionId: z.string().max(256),
  })
  .extend(BaseSchema);

export type Bookmark = z.infer<typeof BookmarkSchema>;
