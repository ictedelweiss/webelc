/**
 * API Client – Edelweiss Learning Center
 *
 * Centralized utility for all frontend-to-backend API calls.
 * Backend is hosted on DomaiNesia cPanel at:
 *   https://api.edelweisslearningcenter.com
 *
 * Framework: Next.js 16 (App Router)
 * Configuration: src/lib/constants.ts
 */

import { API_CONFIG } from './constants';
import { ApiResponse, Service, UploadResponse, UploadError } from './types';
import {
  ApiError,
  NetworkError,
  validateFile,
  logError,
} from './utils/error-handler';
import { UPLOAD_CONFIG } from './constants';

// ─────────────────────────────────────────────
// Helper Functions
// ─────────────────────────────────────────────

/**
 * Build full URL dari API endpoint path
 */
function buildUrl(path: string): string {
  return `${API_CONFIG.BASE_URL}${path}`;
}

/**
 * Handle standard API response errors
 */
function handleApiError(response: Response, data: unknown): never {
  const errorData = data as Record<string, unknown>;
  const message = typeof errorData?.message === 'string'
    ? errorData.message
    : `HTTP ${response.status}`;

  throw new ApiError(
    `API_${response.status}`,
    response.status,
    message,
  );
}

/**
 * Handle network errors
 */
function handleNetworkError(error: TypeError): never {
  if (error.message.includes('fetch')) {
    throw new NetworkError('Network error - check your connection');
  }
  throw new NetworkError(error.message);
}

// ─────────────────────────────────────────────
// fetchServices()
// ─────────────────────────────────────────────

/**
 * Fetch available services dari backend.
 * 
 * @returns Response dengan service list
 * @throws {ApiError} Jika server error
 * @throws {NetworkError} Jika network error
 * 
 * @example
 * const response = await fetchServices();
 * if (response.status === 'success') {
 *   console.log(response.data);
 * }
 */
export async function fetchServices(): Promise<ApiResponse<Service[]>> {
  try {
    const response = await fetch(buildUrl('/api/get_services.php'), {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      // Next.js caching: revalidate setiap 60 detik
      next: { revalidate: API_CONFIG.CACHE_DURATION },
    });

    if (!response.ok) {
      const data = await response.json().catch(() => ({}));
      handleApiError(response, data);
    }

    const data: ApiResponse<Service[]> = await response.json();
    return data;
  } catch (error) {
    if (error instanceof ApiError || error instanceof NetworkError) {
      throw error;
    }

    if (error instanceof TypeError) {
      handleNetworkError(error);
    }

    logError(error, 'fetchServices');
    throw error;
  }
}

// ─────────────────────────────────────────────
// uploadImage(file)
// ─────────────────────────────────────────────

/**
 * Upload image file ke backend.
 * 
 * @param file - File object dari <input type="file">
 * @returns URL image yang sudah terupload
 * @throws {ValidationError} Jika file tidak valid
 * @throws {ApiError} Jika server error
 * @throws {NetworkError} Jika network error
 * 
 * @example
 * try {
 *   const url = await uploadImage(fileFromInput);
 *   console.log('Uploaded to:', url);
 * } catch (error) {
 *   console.error('Upload failed:', getErrorMessage(error));
 * }
 */
export async function uploadImage(file: File): Promise<string> {
  // Validate file first
  const validation = validateFile(
    file,
    UPLOAD_CONFIG.MAX_FILE_SIZE,
    UPLOAD_CONFIG.ACCEPTED_TYPES,
  );

  if (!validation.valid) {
    throw new Error(validation.error || 'File validation failed');
  }

  const formData = new FormData();
  formData.append('file', file);

  try {
    const response = await fetch(buildUrl('/api/upload_image.php'), {
      method: 'POST',
      // Jangan set Content-Type - browser otomatis set multipart boundary
      body: formData,
    });

    if (!response.ok) {
      const data = await response.json().catch(() => ({}));
      handleApiError(response, data);
    }

    const data: UploadResponse = await response.json();

    if (!data.url) {
      throw new Error('Upload succeeded but no URL returned from server');
    }

    return data.url;
  } catch (error) {
    if (error instanceof ApiError || error instanceof NetworkError) {
      throw error;
    }

    if (error instanceof TypeError) {
      handleNetworkError(error);
    }

    logError(error, 'uploadImage');
    throw error;
  }
}

// ─────────────────────────────────────────────
// Future API endpoints - add di sini
// ─────────────────────────────────────────────

/**
 * Contoh template untuk API calls baru:
 * 
 * @example
 * export async function fetchUsers(): Promise<ApiResponse<User[]>> {
 *   try {
 *     const response = await fetch(buildUrl('/api/users.php'), {
 *       method: 'GET',
 *       headers: { 'Content-Type': 'application/json' },
 *       next: { revalidate: API_CONFIG.CACHE_DURATION },
 *     });
 * 
 *     if (!response.ok) {
 *       const data = await response.json().catch(() => ({}));
 *       handleApiError(response, data);
 *     }
 * 
 *     return response.json();
 *   } catch (error) {
 *     if (error instanceof ApiError || error instanceof NetworkError) throw error;
 *     if (error instanceof TypeError) handleNetworkError(error);
 *     logError(error, 'fetchUsers');
 *     throw error;
 *   }
 * }
 */
