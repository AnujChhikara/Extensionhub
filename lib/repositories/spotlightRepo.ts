import { database, ID } from '@/lib/appwrite';
import { Spotlight, SpotlightDocument } from '@/lib/schemas/spotlight';
import { Query } from 'node-appwrite';

const DATABASE_ID = process.env.APPWRITE_DATABASE_ID!;
const SPOTLIGHTS = 'spotlight';

export async function createSpotlight(data: Spotlight) {
  return database.createDocument<SpotlightDocument>(
    DATABASE_ID,
    SPOTLIGHTS,
    ID.unique(),
    data
  );
}

export async function getSpotlightForDate(date: Date) {
  return database.listDocuments<SpotlightDocument>(DATABASE_ID, SPOTLIGHTS, [
    Query.equal('date', date.toISOString()),
    Query.limit(1),
  ]);
}

// skipping pagination for listing submissions
export async function listAllSpotlights() {
  return database.listDocuments<SpotlightDocument>(DATABASE_ID, SPOTLIGHTS, [
    Query.orderDesc('updatedAt'),
  ]);
}

export async function updateSpotlight(
  id: string,
  data: Partial<SpotlightDocument>
) {
  return database.updateDocument<SpotlightDocument>(
    DATABASE_ID,
    SPOTLIGHTS,
    id,
    data
  );
}
