import z from 'zod';
import { AppwriteDocument, BaseSchema } from './_util';

export const ReviewSchema = z
  .object({
    userId: z.string().max(256),
    extensionId: z.string().max(256),
    vote: z.enum(['UP', 'DOWN']).optional().nullable(),
    stars: z.number().int().min(1).max(5).optional().nullable(),
    message: z.string().max(500).optional(),
    isSuspended: z.boolean().optional().default(false),
    isDeleted: z.boolean().optional().default(false),
  })
  .extend(BaseSchema);

export type Review = z.infer<typeof ReviewSchema>;
export type ReviewDocument = Review & AppwriteDocument;
