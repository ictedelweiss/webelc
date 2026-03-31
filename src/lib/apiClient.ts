/**
 * API Client – Edelweiss Learning Center
 *
 * Centralized utility for all frontend-to-backend API calls.
 * Backend is hosted on DomaiNesia cPanel at:
 *   https://api.edelweisslearningcenter.com
 *
 * Framework: Next.js 16 (App Router)
 * Env var:   NEXT_PUBLIC_PHP_API_BASE
 */

const API_BASE =
  process.env.NEXT_PUBLIC_PHP_API_BASE ||
  'https://api.edelweisslearningcenter.com';

// ─────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────

export interface Service {
  id: number;
  name: string;
  description: string;
  [key: string]: unknown;
}

export interface ServicesResponse {
  status: 'success' | 'sample' | 'fallback';
  data: Service[];
}

export interface UploadResponse {
  status: 'success';
  url: string;
  filename: string;
}

// ─────────────────────────────────────────────
// Helper
// ─────────────────────────────────────────────

function buildUrl(path: string): string {
  return `${API_BASE}${path}`;
}

// ─────────────────────────────────────────────
// fetchServices()
// ─────────────────────────────────────────────

/**
 * Fetches available services from the backend.
 * GET /api/get_services.php
 */
export async function fetchServices(): Promise<ServicesResponse> {
  try {
    const response = await fetch(buildUrl('/api/get_services.php'), {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      // Next.js caching: revalidate every 60 seconds
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      throw new Error(
        `Server error: ${response.status} ${response.statusText}`
      );
    }

    const data: ServicesResponse = await response.json();
    return data;
  } catch (error) {
    if (error instanceof TypeError && error.message.includes('fetch')) {
      throw new Error(
        'CORS or network error - ensure backend allows this origin.'
      );
    }
    throw error;
  }
}

// ─────────────────────────────────────────────
// uploadImage(file)
// ─────────────────────────────────────────────

/**
 * Uploads an image file to the backend storage.
 * POST /api/upload_image.php
 *
 * @param file - The File object to upload (from an <input type="file">)
 * @returns    - Absolute URL of the uploaded image on the server
 */
export async function uploadImage(file: File): Promise<string> {
  const formData = new FormData();
  formData.append('file', file);

  try {
    const response = await fetch(buildUrl('/api/upload_image.php'), {
      method: 'POST',
      // Do NOT set Content-Type header - browser sets multipart/form-data boundary automatically
      body: formData,
    });

    if (!response.ok) {
      throw new Error(
        `Upload failed: ${response.status} ${response.statusText}`
      );
    }

    const data: UploadResponse = await response.json();

    if (!data.url) {
      throw new Error('Upload succeeded but server returned no URL.');
    }

    return data.url;
  } catch (error) {
    if (error instanceof TypeError && error.message.includes('fetch')) {
      throw new Error(
        'CORS or network error during upload - check backend CORS config.'
      );
    }
    throw error;
  }
}
