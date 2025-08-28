'use server';

import {
  ERROR_ADDING_SPOTLIGHT,
  ERROR_LISTING_SPOTLIGHT,
  EXTENSION_ADDED_TO_SPOTLIGHT,
  SPOTLIGHT_ALREADY_EXISTS,
  SPOTLIGHT_FETCHED,
  VALIDATION_ERROR,
} from '@/lib/constants/message';
import * as spotlightRepo from '@/lib/repositories/spotlightRepo';
import { SpotlightSchema } from '@/lib/schemas/spotlight';
import { actionResponse } from '@/lib/utils';

interface spotlightDTO {
  date: Date;
  extensionId: string;
}

export const addSpotlight = async ({ date, extensionId }: spotlightDTO) => {
  const result = SpotlightSchema.safeParse({ date, extensionId });
  if (!result.success) {
    return actionResponse(VALIDATION_ERROR);
  }

  try {
    const existing = await spotlightRepo.getSpotlightForDate(result.data.date);
    if (existing.documents.length > 0) {
      return actionResponse(SPOTLIGHT_ALREADY_EXISTS);
    }
    const created = await spotlightRepo.createSpotlight(result.data);
    if (!created) {
      return actionResponse(ERROR_ADDING_SPOTLIGHT);
    }

    return actionResponse(EXTENSION_ADDED_TO_SPOTLIGHT, !!created, created);
  } catch (err) {
    return actionResponse(ERROR_ADDING_SPOTLIGHT);
  }
};

export const listSpotlightForDate = async ({ date }: { date: Date }) => {
  try {
    const spotlight = await spotlightRepo.getSpotlightForDate(date);
    return actionResponse(SPOTLIGHT_FETCHED, !!spotlight, spotlight);
  } catch (error) {
    return actionResponse(ERROR_LISTING_SPOTLIGHT);
  }
};

export const listAllSpotlights = async () => {
  try {
    const spotlight = await spotlightRepo.listAllSpotlights();
    return actionResponse(SPOTLIGHT_FETCHED, !!spotlight, spotlight);
  } catch (error) {
    return actionResponse(ERROR_LISTING_SPOTLIGHT);
  }
};
