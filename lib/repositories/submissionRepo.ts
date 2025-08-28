import { database, ID } from '@/lib/appwrite';
import { Submission, SubmissionDocument } from '@/lib/schemas/submissions';
import { Query } from 'node-appwrite';

const DATABASE_ID = process.env.APPWRITE_DATABASE_ID!;
const SUBMISSIONS = 'submissions';

export async function createSubmission(data: Submission) {
  return database.createDocument<SubmissionDocument>(
    DATABASE_ID,
    SUBMISSIONS,
    ID.unique(),
    data
  );
}

// skipping pagination for listing submissions
export async function listAllSubmissions() {
  return database.listDocuments<SubmissionDocument>(DATABASE_ID, SUBMISSIONS, [
    Query.orderDesc('$updatedAt'),
  ]);
}

export async function updateStatus(id: string, data: Partial<Submission>) {
  return database.updateDocument<SubmissionDocument>(
    DATABASE_ID,
    SUBMISSIONS,
    id,
    data
  );
}
