'use server';

import {
  ERROR_LISTING_VIEWS,
  ERROR_MARKING_VIEW,
  EXTENSION_ALREADY_VIEWED,
  EXTENSION_MARKED_VIEWED,
  EXTENSION_VIEWS_FETCHED,
  VALIDATION_ERROR,
} from '@/lib/constants/message';
import * as viewRepo from '@/lib/repositories/viewRepo';
import { ViewSchema } from '@/lib/schemas/views';
import { actionResponse } from '@/lib/utils';

interface viewExtensionDTO {
  userId: string;
  extensionId: string;
}

export const markExtensionAsViewed = async ({
  userId,
  extensionId,
}: viewExtensionDTO) => {
  const result = ViewSchema.safeParse({ userId, extensionId });
  if (!result.success) {
    return actionResponse(VALIDATION_ERROR);
  }

  try {
    const existing = await viewRepo.getView(result.data);
    if (existing.documents.length > 0) {
      return actionResponse(EXTENSION_ALREADY_VIEWED);
    }
    const created = await viewRepo.createView(result.data);
    if (!created) {
      return actionResponse(ERROR_MARKING_VIEW);
    }

    return actionResponse(EXTENSION_MARKED_VIEWED, !!created, created);
  } catch (err) {
    return actionResponse(ERROR_MARKING_VIEW);
  }
};

export const listExtensionViews = async ({
  extensionId,
}: {
  extensionId: string;
}) => {
  try {
    const views = await viewRepo.listViewForExtensionId(extensionId);
    return actionResponse(EXTENSION_VIEWS_FETCHED, !!views, views);
  } catch (error) {
    return actionResponse(ERROR_LISTING_VIEWS);
  }
};
