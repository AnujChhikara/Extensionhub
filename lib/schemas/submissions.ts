import { z } from 'zod';
import { BaseSchema } from './util';

export const SubmissionSchema = z
  .object({
    email: z.email(),
    message: z.string().max(1000).optional(),
    status: z.enum(['PENDING', 'ACCEPTED', 'REJECTED']),
    extensionLink: z.url(),
    githubLink: z.url().optional(),
    websiteLink: z.url().optional(),
    feedback: z.string().max(500).optional(),
    userId: z.string().max(256).optional(),
  })
  .extend(BaseSchema);

export type Submission = z.infer<typeof SubmissionSchema>;
