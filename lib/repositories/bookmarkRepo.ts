import { database, ID } from '@/lib/appwrite';
import { Query } from 'node-appwrite';
import { Bookmark, BookMarkDocument } from '../schemas/bookmarks';

const DATABASE_ID = process.env.APPWRITE_DATABASE_ID!;
const BOOKMARKS = 'bookmarks';

export async function createBookmark(data: Bookmark) {
  return database.createDocument<BookMarkDocument>(
    DATABASE_ID,
    BOOKMARKS,
    ID.unique(),
    data
  );
}

export async function listBookmarkForExtension(extensionId: string) {
  return database.listDocuments<BookMarkDocument>(DATABASE_ID, BOOKMARKS, [
    Query.equal('extensionId', extensionId),
    Query.orderDesc('updatedAt'),
  ]);
}

export async function listBookmarkForUser(userId: string) {
  return database.listDocuments<BookMarkDocument>(DATABASE_ID, BOOKMARKS, [
    Query.equal('userId', userId),
    Query.orderDesc('updatedAt'),
  ]);
}

export async function removeBookmark(id: string) {
  return database.deleteDocument(DATABASE_ID, BOOKMARKS, id);
}
