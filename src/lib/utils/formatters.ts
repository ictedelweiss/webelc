/**
 * String & Date Formatter Utilities
 * 
 * Reusable formatters untuk display values dengan konsisten
 */

// ─────────────────────────────────────────────
// Date Formatters
// ─────────────────────────────────────────────

/**
 * Format date to readable string
 * @example
 * formatDate(new Date()) // "27 Apr 2026"
 */
export function formatDate(date: Date, locale: string = 'en-US'): string {
  return date.toLocaleDateString(locale, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

/**
 * Format date with time
 * @example
 * formatDateTime(new Date()) // "27 Apr 2026 14:30"
 */
export function formatDateTime(date: Date, locale: string = 'en-US'): string {
  return date.toLocaleDateString(locale, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

/**
 * Format date to ISO format (YYYY-MM-DD)
 * @example
 * formatDateISO(new Date()) // "2026-04-27"
 */
export function formatDateISO(date: Date): string {
  return date.toISOString().split('T')[0];
}

/**
 * Format date as relative time (e.g., "2 hours ago")
 * @example
 * formatRelativeTime(new Date(Date.now() - 7200000)) // "2 hours ago"
 */
export function formatRelativeTime(date: Date, locale: string = 'en-US'): string {
  const rtf = new Intl.RelativeTimeFormat(locale, { numeric: 'auto' });
  const now = new Date();
  const diffMs = date.getTime() - now.getTime();
  const diffSecs = Math.round(diffMs / 1000);

  if (Math.abs(diffSecs) < 60) {
    return rtf.format(diffSecs, 'second');
  }
  if (Math.abs(diffSecs) < 3600) {
    return rtf.format(Math.round(diffSecs / 60), 'minute');
  }
  if (Math.abs(diffSecs) < 86400) {
    return rtf.format(Math.round(diffSecs / 3600), 'hour');
  }
  return rtf.format(Math.round(diffSecs / 86400), 'day');
}

// ─────────────────────────────────────────────
// Number Formatters
// ─────────────────────────────────────────────

/**
 * Format number as currency
 * @example
 * formatCurrency(1500000, 'id-ID', 'IDR') // "Rp 1.500.000"
 */
export function formatCurrency(
  amount: number,
  locale: string = 'en-US',
  currency: string = 'USD',
): string {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(amount);
}

/**
 * Format number with thousands separator
 * @example
 * formatNumber(1000000, 'en-US') // "1,000,000"
 */
export function formatNumber(number: number, locale: string = 'en-US'): string {
  return new Intl.NumberFormat(locale).format(number);
}

/**
 * Format bytes to human-readable size
 * @example
 * formatBytes(1024) // "1 KB"
 * formatBytes(1048576) // "1 MB"
 */
export function formatBytes(bytes: number): string {
  if (bytes === 0) return '0 Bytes';

  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
}

/**
 * Format percentage
 * @example
 * formatPercent(0.856) // "85.6%"
 */
export function formatPercent(value: number, decimals: number = 1): string {
  return (value * 100).toFixed(decimals) + '%';
}

// ─────────────────────────────────────────────
// String Formatters
// ─────────────────────────────────────────────

/**
 * Capitalize first letter
 * @example
 * capitalize('hello') // "Hello"
 */
export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Truncate string with ellipsis
 * @example
 * truncate('Hello World', 5) // "Hello..."
 */
export function truncate(str: string, length: number): string {
  if (str.length <= length) return str;
  return str.substring(0, length - 3) + '...';
}

/**
 * Slugify string (convert to URL-friendly format)
 * @example
 * slugify('Hello World!') // "hello-world"
 */
export function slugify(str: string): string {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Convert snake_case to camelCase
 * @example
 * toCamelCase('hello_world') // "helloWorld"
 */
export function toCamelCase(str: string): string {
  return str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
}

/**
 * Convert camelCase to snake_case
 * @example
 * toSnakeCase('helloWorld') // "hello_world"
 */
export function toSnakeCase(str: string): string {
  return str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
}

/**
 * Remove all HTML tags
 * @example
 * stripHtml('<p>Hello <strong>World</strong></p>') // "Hello World"
 */
export function stripHtml(html: string): string {
  const tmp = document.createElement('DIV');
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || '';
}

// ─────────────────────────────────────────────
// Phone Formatters
// ─────────────────────────────────────────────

/**
 * Format phone number
 * @example
 * formatPhone('6281234567890') // "+62 812-3456-7890"
 */
export function formatPhone(phone: string): string {
  // Remove non-digits
  const digits = phone.replace(/\D/g, '');

  // Format as +62 xxx-xxxx-xxxx
  if (digits.length >= 10) {
    return `+${digits.slice(0, 2)} ${digits.slice(2, 5)}-${digits.slice(5, 9)}-${digits.slice(9)}`;
  }

  return phone;
}
