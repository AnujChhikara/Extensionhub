import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function actionResponse(
  message: string,
  success: boolean = false,
  data: unknown = null
) {
  return { message, success, data };
}
