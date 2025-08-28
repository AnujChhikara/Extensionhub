import { database, ID } from '@/lib/appwrite';
import { Extension, ExtensionDocument } from '@/lib/schemas/extensions';
import { Query } from 'node-appwrite';

const DATABASE_ID = process.env.APPWRITE_DATABASE_ID!;
const EXTENSIONS = 'extensions';

export async function createExtension(data: Extension) {
  return database.createDocument<ExtensionDocument>(
    DATABASE_ID,
    EXTENSIONS,
    ID.unique(),
    data
  );
}

export async function getExtension(id: string) {
  return database.getDocument<ExtensionDocument>(DATABASE_ID, EXTENSIONS, id);
}

// skipping pagination in listing
export async function listExtensions() {
  return database.listDocuments<ExtensionDocument>(DATABASE_ID, EXTENSIONS, [
    Query.equal('isDeleted', false),
    Query.equal('isSuspended', false),
    Query.orderDesc('$updatedAt'),
  ]);
}

export async function updateExtension(id: string, data: Partial<Extension>) {
  return database.updateDocument<ExtensionDocument>(
    DATABASE_ID,
    EXTENSIONS,
    id,
    data
  );
}

// soft delete instead of deleteDocument
export async function deleteExtension(id: string) {
  return database.updateDocument<ExtensionDocument>(
    DATABASE_ID,
    EXTENSIONS,
    id,
    { isDeleted: true }
  );
}

export async function suspendExtension(id: string) {
  return database.updateDocument<ExtensionDocument>(
    DATABASE_ID,
    EXTENSIONS,
    id,
    { isSuspended: true }
  );
}
