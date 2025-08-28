import { database, ID } from '@/lib/appwrite';
import { Review, ReviewDocument } from '@/lib/schemas/reviews';
import { Query } from 'node-appwrite';

const DATABASE_ID = process.env.APPWRITE_DATABASE_ID!;
const REVIEWS = 'reviews';

export async function createReview(data: Review) {
  return database.createDocument<ReviewDocument>(
    DATABASE_ID,
    REVIEWS,
    ID.unique(),
    data
  );
}

export async function getReview(id: string) {
  return database.getDocument<ReviewDocument>(DATABASE_ID, REVIEWS, id);
}

// skipping pagination in listing
export async function listReviewForExtensions(extensionId: string) {
  return database.listDocuments<ReviewDocument>(DATABASE_ID, REVIEWS, [
    Query.equal('extensionId', extensionId),
    Query.equal('isDeleted', false),
    Query.equal('isSuspended', false),
    Query.orderDesc('$updatedAt'),
  ]);
}

export async function listReviewForUsers(userId: string) {
  return database.listDocuments<ReviewDocument>(DATABASE_ID, REVIEWS, [
    Query.equal('userId', userId),
    Query.equal('isDeleted', false),
    Query.equal('isSuspended', false),
    Query.orderDesc('$updatedAt'),
  ]);
}

export async function updateReview(id: string, data: Partial<Review>) {
  return database.updateDocument<ReviewDocument>(
    DATABASE_ID,
    REVIEWS,
    id,
    data
  );
}

// soft delete instead of deleteDocument
export async function deleteReview(id: string) {
  return database.updateDocument<ReviewDocument>(DATABASE_ID, REVIEWS, id, {
    isDeleted: true,
  });
}

export async function suspendReview(id: string) {
  return database.updateDocument<ReviewDocument>(DATABASE_ID, REVIEWS, id, {
    isSuspended: true,
  });
}
