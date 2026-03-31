// =============================================
// PHP API Base URL (DomaiNesia Hosting)
// =============================================
// Override via environment variable NEXT_PUBLIC_PHP_API_BASE
export const PHP_API_BASE =
  process.env.NEXT_PUBLIC_PHP_API_BASE ||
  'https://api.edelweisslearningcenter.com';

export const AUTH_STORAGE_KEY = 'elc_admin_token';
