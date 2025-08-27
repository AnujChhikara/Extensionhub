import { z } from 'zod';
import { AppwriteDocument, BaseSchema } from './_util';

export const ExtensionSchema = z
  .object({
    name: z.string().max(128),
    description: z.string().max(2000),
    extensionLink: z.url(),
    websiteLink: z.url().optional(),
    githubLink: z.url().optional(),
    tags: z.array(z.string().max(32)).optional(),
    labels: z.array(z.string().max(32)).optional(),
    media: z.array(z.url()).optional(),
    appPermissions: z.array(z.string().max(64)).optional(),
    developer: z.string().max(256).optional(),
    userId: z.string().max(256).optional(),
    isSuspended: z.boolean().optional().default(false),
    isDeleted: z.boolean().optional().default(false),
  })
  .extend(BaseSchema);

export type Extension = z.infer<typeof ExtensionSchema>;
export type ExtensionDocument = Extension & AppwriteDocument;
