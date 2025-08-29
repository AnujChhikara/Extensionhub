'use server';

import {
  ERROR_ADDING_EXTENSION,
  ERROR_LISTING_EXTENSIONS,
  ERROR_REMOVING_EXTENSION,
  ERROR_SUSPENDING_EXTENSION,
  ERROR_UPDATING_EXTENSION,
  EXTENSION_ADDED,
  EXTENSION_ALREADY_EXISTS,
  EXTENSION_NOT_FOUND,
  EXTENSION_REMOVED,
  EXTENSION_SUSPENDED,
  EXTENSION_UPDATED,
  EXTENSIONS_FETCHED,
  VALIDATION_ERROR,
} from '@/lib/constants/message';
import * as extensionRepo from '@/lib/repositories/extensionRepo';
import { ExtensionSchema } from '@/lib/schemas/extensions';
import { actionResponse } from '@/lib/utils';

interface addExtensionDTO {
  name: string;
  description: string;
  extensionLink: string;
  websiteLink?: string;
  githubLink?: string;
  tags?: string[];
  labels?: string[];
  media?: string[];
  appPermissions?: string[];
  developer?: string;
  userId?: string;
}

export const addExtension = async (data: addExtensionDTO) => {
  const result = ExtensionSchema.safeParse(data);
  if (!result.success) {
    return actionResponse(VALIDATION_ERROR);
  }

  try {
    const existing = await extensionRepo.getExtensionByLink(data.extensionLink);
    if (existing.documents.length > 0) {
      return actionResponse(EXTENSION_ALREADY_EXISTS);
    }
    const created = await extensionRepo.createExtension(result.data);
    if (!created) {
      return actionResponse(ERROR_ADDING_EXTENSION);
    }

    return actionResponse(EXTENSION_ADDED, !!created, created);
  } catch (err) {
    return actionResponse(ERROR_ADDING_EXTENSION);
  }
};

export const updateExtension = async (
  extensionId: string,
  data: Partial<addExtensionDTO>
) => {
  try {
    const existing = await extensionRepo.getExtensionById(extensionId);
    if (existing.documents.length <= 0) {
      return actionResponse(EXTENSION_NOT_FOUND);
    }

    const updated = await extensionRepo.updateExtension(extensionId, {
      ...existing.documents[0],
      ...data,
    });
    if (!updated) {
      return actionResponse(ERROR_UPDATING_EXTENSION);
    }
    return actionResponse(EXTENSION_UPDATED, !!updated, updated);
  } catch (error) {
    return actionResponse(ERROR_UPDATING_EXTENSION);
  }
};

export const deleteExtension = async (extensionId: string) => {
  try {
    const removed = await extensionRepo.deleteExtension(extensionId);
    if (!removed) {
      return actionResponse(ERROR_REMOVING_EXTENSION);
    }

    return actionResponse(EXTENSION_REMOVED, !!removed, removed);
  } catch (error) {
    return actionResponse(ERROR_REMOVING_EXTENSION);
  }
};

export const suspendExtension = async (extensionId: string) => {
  try {
    const suspended = await extensionRepo.suspendExtension(extensionId);
    if (!suspended) {
      return actionResponse(ERROR_SUSPENDING_EXTENSION);
    }

    return actionResponse(EXTENSION_SUSPENDED, !!suspended, suspended);
  } catch (error) {
    return actionResponse(ERROR_SUSPENDING_EXTENSION);
  }
};

export const unSuspendExtension = async (extensionId: string) => {
  try {
    const unSuspended = await extensionRepo.unSuspendExtension(extensionId);
    if (!unSuspended) {
      return actionResponse(ERROR_SUSPENDING_EXTENSION);
    }

    return actionResponse(EXTENSION_SUSPENDED, !!unSuspended, unSuspended);
  } catch (error) {
    return actionResponse(ERROR_SUSPENDING_EXTENSION);
  }
};

export const listAllExtensions = async () => {
  try {
    const reviews = await extensionRepo.listExtensions();
    return actionResponse(EXTENSIONS_FETCHED, !!reviews, reviews);
  } catch (error) {
    return actionResponse(ERROR_LISTING_EXTENSIONS);
  }
};
