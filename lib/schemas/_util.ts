import z from 'zod';

export const BaseSchema = z.object({
  id: z.string().max(256).optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export interface AppwriteDocument {
  $id: string;
  $createdAt: string;
  $updatedAt: string;
  $permissions: string[];
  $databaseId: string;
  $collectionId: string;
  $sequence: number;
}
