'use server';

import {
  BOOKMARK_ALREADY_EXIST,
  BOOKMARK_CREATED,
  BOOKMARK_NOT_FOUND,
  BOOKMARK_REMOVED,
  BOOKMARKS_LIST_SUCCESS,
  ERROR_CREATING_BOOKMARK,
  ERROR_LISTING_BOOKMARKS,
  ERROR_REMOVING_BOOKMARK,
  VALIDATION_ERROR,
} from '@/lib/constants/message';
import * as bookmarkRepo from '@/lib/repositories/bookmarkRepo';
import { BookmarkSchema } from '@/lib/schemas/bookmarks';
import { actionResponse } from '@/lib/utils';

interface createBookmarkDto {
  userId: string;
  extensionId: string;
}

export const createUserBookmark = async ({
  userId,
  extensionId,
}: createBookmarkDto) => {
  const result = BookmarkSchema.safeParse({ userId, extensionId });
  if (!result.success) {
    return actionResponse(VALIDATION_ERROR);
  }

  try {
    const { userId, extensionId } = result.data;
    const existing = await bookmarkRepo.getBookmark(userId, extensionId);
    if (existing.documents.length > 0) {
      return actionResponse(BOOKMARK_ALREADY_EXIST);
    }

    const created = await bookmarkRepo.createBookmark(result.data);
    if (!created) {
      return actionResponse(ERROR_CREATING_BOOKMARK);
    }

    return actionResponse(BOOKMARK_CREATED, !!created, created);
  } catch (err) {
    return actionResponse(ERROR_CREATING_BOOKMARK);
  }
};

export const removeUserBookmark = async ({
  userId,
  extensionId,
}: createBookmarkDto) => {
  if (!userId || !extensionId) {
    return actionResponse(VALIDATION_ERROR);
  }

  try {
    const existing = await bookmarkRepo.getBookmark(userId, extensionId);
    if (existing.documents.length === 0) {
      return actionResponse(BOOKMARK_NOT_FOUND);
    }

    const removed = await bookmarkRepo.removeBookmark(
      existing.documents[0].$id
    );
    if (!removed) {
      return actionResponse(ERROR_REMOVING_BOOKMARK);
    }

    return actionResponse(BOOKMARK_REMOVED, !!removed, removed);
  } catch (err) {
    return actionResponse(ERROR_REMOVING_BOOKMARK);
  }
};

export const listUserBookmarks = async ({ userId }: { userId: string }) => {
  try {
    const bookmarks = await bookmarkRepo.listBookmarkForUser(userId);
    return actionResponse(BOOKMARKS_LIST_SUCCESS, !!bookmarks, bookmarks);
  } catch (error) {
    return actionResponse(ERROR_LISTING_BOOKMARKS);
  }
};

export const listExtensionBookmarks = async ({
  extensionId,
}: {
  extensionId: string;
}) => {
  try {
    const bookmarks = await bookmarkRepo.listBookmarkForUser(extensionId);
    return actionResponse(BOOKMARKS_LIST_SUCCESS, !!bookmarks, bookmarks);
  } catch (error) {
    return actionResponse(ERROR_LISTING_BOOKMARKS);
  }
};
