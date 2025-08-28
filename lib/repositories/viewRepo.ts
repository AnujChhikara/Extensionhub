import { database, ID } from '@/lib/appwrite';
import { View, ViewDocument } from '@/lib/schemas/views';
import { Query } from 'node-appwrite';

const DATABASE_ID = process.env.APPWRITE_DATABASE_ID!;
const VIEWS = 'views';

export async function createView(data: View) {
  return database.createDocument<ViewDocument>(
    DATABASE_ID,
    VIEWS,
    ID.unique(),
    data
  );
}

export async function listViewForExtensionId(extensionId: string) {
  return database.listDocuments<ViewDocument>(DATABASE_ID, VIEWS, [
    Query.equal('extensionId', extensionId),
    Query.orderDesc('$updatedAt'),
  ]);
}

export async function listViewForUserId(userId: string) {
  return database.listDocuments<ViewDocument>(DATABASE_ID, VIEWS, [
    Query.equal('userId', userId),
    Query.orderDesc('$updatedAt'),
  ]);
}

export async function getView({
  extensionId,
  userId,
}: {
  extensionId: string;
  userId: string;
}) {
  return database.listDocuments<ViewDocument>(DATABASE_ID, VIEWS, [
    Query.equal('userId', userId),
    Query.equal('extensionId', extensionId),
    Query.limit(1),
  ]);
}
