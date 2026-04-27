/**
 * Error Handler Utilities
 * 
 * Centralized error handling untuk konsistensi
 */

import { MESSAGES } from '../constants';

// ─────────────────────────────────────────────
// Error Types
// ─────────────────────────────────────────────

export class ApiError extends Error {
  constructor(
    public code: string,
    public statusCode: number,
    message: string,
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

export class ValidationError extends Error {
  constructor(
    public field: string,
    message: string,
  ) {
    super(message);
    this.name = 'ValidationError';
  }
}

export class NetworkError extends Error {
  constructor(message: string = MESSAGES.ERROR.NETWORK) {
    super(message);
    this.name = 'NetworkError';
  }
}

// ─────────────────────────────────────────────
// Error Handlers
// ─────────────────────────────────────────────

/**
 * Parse dan standardisasi error dari berbagai sumber
 */
export function parseError(error: unknown): Error {
  if (error instanceof Error) {
    return error;
  }

  if (typeof error === 'string') {
    return new Error(error);
  }

  if (typeof error === 'object' && error !== null) {
    const err = error as Record<string, unknown>;
    if ('message' in err && typeof err.message === 'string') {
      return new Error(err.message);
    }
  }

  return new Error('Unknown error occurred');
}

/**
 * Handle API errors dengan pesan yang user-friendly
 */
export function getErrorMessage(error: unknown): string {
  const parsedError = parseError(error);

  if (parsedError instanceof ApiError) {
    if (parsedError.statusCode === 404) {
      return 'Data tidak ditemukan.';
    }
    if (parsedError.statusCode === 401) {
      return 'Silakan login kembali.';
    }
    if (parsedError.statusCode === 403) {
      return 'Anda tidak memiliki akses.';
    }
    if (parsedError.statusCode >= 500) {
      return 'Server error. Silakan coba lagi nanti.';
    }
  }

  if (parsedError instanceof NetworkError) {
    return MESSAGES.ERROR.NETWORK;
  }

  if (parsedError instanceof ValidationError) {
    return `${parsedError.field}: ${parsedError.message}`;
  }

  return MESSAGES.ERROR.GENERIC;
}

/**
 * Log error untuk debugging (hanya di development)
 */
export function logError(error: unknown, context?: string): void {
  if (process.env.NODE_ENV !== 'production') {
    const prefix = context ? `[${context}]` : '';
    console.error(`${prefix}`, parseError(error));
  }
}

/**
 * Retry function dengan exponential backoff
 */
export async function retryAsync<T>(
  fn: () => Promise<T>,
  maxRetries: number = 3,
  delayMs: number = 1000,
): Promise<T> {
  let lastError: Error | null = null;

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      return await fn();
    } catch (error) {
      lastError = parseError(error);

      if (attempt < maxRetries) {
        // Exponential backoff: 1s, 2s, 4s
        const delay = delayMs * Math.pow(2, attempt - 1);
        await new Promise(resolve => setTimeout(resolve, delay));
      }
    }
  }

  throw lastError || new Error('Max retries exceeded');
}

/**
 * Validate file sebelum upload
 */
export function validateFile(
  file: File,
  maxSize: number,
  acceptedTypes: string[],
): { valid: boolean; error?: string } {
  if (file.size > maxSize) {
    return {
      valid: false,
      error: MESSAGES.ERROR.FILE_TOO_LARGE,
    };
  }

  if (!acceptedTypes.includes(file.type)) {
    return {
      valid: false,
      error: MESSAGES.ERROR.INVALID_FILE,
    };
  }

  return { valid: true };
}
