'use server';

import {
  ERROR_ADDING_SUBMISSION,
  ERROR_LISTING_SUBMISSION,
  ERROR_UPDATING_SUBMISSION,
  EXTENSION_SUBMITTED,
  SUBMISSION_ALREADY_UPDATED,
  SUBMISSION_UPDATED,
  SUBMISSIONS_FETCHED,
  VALIDATION_ERROR,
} from '@/lib/constants/message';
import * as submissionRepo from '@/lib/repositories/submissionRepo';
import { SubmissionSchema } from '@/lib/schemas/submissions';
import { actionResponse } from '@/lib/utils';

interface submissionDTO {
  email: string;
  extensionLink: string;
  userId: string;
  message?: string;
  githubLink?: string;
  websiteLink?: string;
  feedback?: string;
}

export const addNewSubmission = async (data: submissionDTO) => {
  const result = SubmissionSchema.safeParse(data);
  if (!result.success) {
    return actionResponse(VALIDATION_ERROR);
  }

  try {
    const created = await submissionRepo.createSubmission(result.data);
    if (!created) {
      return actionResponse(ERROR_ADDING_SUBMISSION);
    }

    return actionResponse(EXTENSION_SUBMITTED, !!created, created);
  } catch (err) {
    return actionResponse(ERROR_ADDING_SUBMISSION);
  }
};

export const listAllSubmissions = async () => {
  try {
    const submission = await submissionRepo.listAllSubmissions();
    return actionResponse(SUBMISSIONS_FETCHED, !!submission, submission);
  } catch (error) {
    return actionResponse(ERROR_LISTING_SUBMISSION);
  }
};

export const updateSubmissionStatus = async ({
  id,
  status,
  feedback,
}: {
  id: string;
  status: 'ACCEPTED' | 'REJECTED';
  feedback: string;
}) => {
  try {
    const existingSubmission = await submissionRepo.getSubmissionById(id);
    if (existingSubmission.documents[0].status !== 'PENDING') {
      return actionResponse(SUBMISSION_ALREADY_UPDATED);
    }
    const submission = await submissionRepo.updateStatus(id, {
      status,
      feedback,
    });
    return actionResponse(SUBMISSION_UPDATED, !!submission, submission);
  } catch (error) {
    return actionResponse(ERROR_UPDATING_SUBMISSION);
  }
};
