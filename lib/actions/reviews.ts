'use server';

import {
  ERROR_ADDING_REVIEW,
  ERROR_LISTING_REVIEWS,
  ERROR_REMOVING_REVIEW,
  ERROR_SUSPENDING_REVIEW,
  ERROR_UPDATING_REVIEW,
  EXTENSION_REVIEW_ADDED,
  EXTENSION_REVIEW_REMOVED,
  EXTENSION_REVIEW_UPDATED,
  REVIEW_ALREADY_EXISTS,
  REVIEW_NOT_FOUND,
  REVIEW_SUSPENDED,
  REVIEWS_FETCHED,
  VALIDATION_ERROR,
} from '@/lib/constants/message';
import * as reviewRepo from '@/lib/repositories/reviewRepo';
import { ReviewSchema } from '@/lib/schemas/reviews';
import { actionResponse } from '@/lib/utils';

interface addReviewDTO {
  extensionId: string;
  userId: string;
  vote: 'UP' | 'DOWN';
  stars: number;
  message: string;
  isSuspended: boolean;
  isDeleted: boolean;
}

export const addReviewForExtension = async (data: addReviewDTO) => {
  const result = ReviewSchema.safeParse(data);
  if (!result.success) {
    return actionResponse(VALIDATION_ERROR);
  }

  try {
    const existing = await reviewRepo.getReviewForUserAndExtension(
      data.extensionId,
      data.userId
    );
    if (existing.documents.length > 0) {
      return actionResponse(REVIEW_ALREADY_EXISTS);
    }
    const created = await reviewRepo.createReview(result.data);
    if (!created) {
      return actionResponse(ERROR_ADDING_REVIEW);
    }

    return actionResponse(EXTENSION_REVIEW_ADDED, !!created, created);
  } catch (err) {
    return actionResponse(ERROR_ADDING_REVIEW);
  }
};

export const updateReviewForExtension = async (
  reviewId: string,
  data: Partial<addReviewDTO>
) => {
  try {
    const existing = await reviewRepo.getReview(reviewId);
    if (existing.documents.length <= 0) {
      return actionResponse(REVIEW_NOT_FOUND);
    }

    const updated = await reviewRepo.updateReview(reviewId, {
      ...existing.documents[0],
      ...data,
    });
    if (!updated) {
      return actionResponse(ERROR_UPDATING_REVIEW);
    }
    return actionResponse(EXTENSION_REVIEW_UPDATED, !!updated, updated);
  } catch (error) {
    return actionResponse(ERROR_UPDATING_REVIEW);
  }
};

export const deleteReviewForExtension = async (reviewId: string) => {
  try {
    const removed = await reviewRepo.deleteReview(reviewId);
    if (!removed) {
      return actionResponse(ERROR_REMOVING_REVIEW);
    }

    return actionResponse(EXTENSION_REVIEW_REMOVED, !!removed, removed);
  } catch (error) {
    return actionResponse(ERROR_REMOVING_REVIEW);
  }
};

export const suspendReview = async (reviewId: string) => {
  try {
    const suspended = await reviewRepo.suspendReview(reviewId);
    if (!suspended) {
      return actionResponse(ERROR_SUSPENDING_REVIEW);
    }

    return actionResponse(REVIEW_SUSPENDED, !!suspended, suspended);
  } catch (error) {
    return actionResponse(ERROR_SUSPENDING_REVIEW);
  }
};

export const unSuspendReview = async (reviewId: string) => {
  try {
    const unSuspended = await reviewRepo.unSuspendReview(reviewId);
    if (!unSuspended) {
      return actionResponse(ERROR_SUSPENDING_REVIEW);
    }

    return actionResponse(REVIEW_SUSPENDED, !!unSuspended, unSuspended);
  } catch (error) {
    return actionResponse(ERROR_SUSPENDING_REVIEW);
  }
};

export const listAllExtensionReviews = async (extensionId: string) => {
  try {
    const reviews = await reviewRepo.listReviewForExtensions(extensionId);
    return actionResponse(REVIEWS_FETCHED, !!reviews, reviews);
  } catch (error) {
    return actionResponse(ERROR_LISTING_REVIEWS);
  }
};

export const listAllUserReviews = async (userId: string) => {
  try {
    const reviews = await reviewRepo.listReviewForUsers(userId);
    return actionResponse(REVIEWS_FETCHED, !!reviews, reviews);
  } catch (error) {
    return actionResponse(ERROR_LISTING_REVIEWS);
  }
};
