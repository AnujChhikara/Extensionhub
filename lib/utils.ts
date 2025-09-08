import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type ActionResponse<T> = {
  message: string;
  success: boolean;
  data: T | null;
};

export function actionResponse<T>(
  message: string,
  success: boolean = false,
  data: T | null = null
): ActionResponse<T> {
  return { message, success, data };
}
