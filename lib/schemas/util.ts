import z from 'zod';

export const BaseSchema = z.object({
  id: z.string().max(256).optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});
