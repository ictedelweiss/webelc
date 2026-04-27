/**
 * Project-wide Constants
 * 
 * Semua magic numbers dan strings harus didefinisikan di sini
 * untuk memudahkan maintenance dan menghindari duplikasi
 */

// ─────────────────────────────────────────────
// API Configuration
// ─────────────────────────────────────────────

export const API_CONFIG = {
  BASE_URL: process.env.NEXT_PUBLIC_PHP_API_BASE || 'https://api.edelweisslearningcenter.com',
  TIMEOUT: 30000, // 30 seconds
  CACHE_DURATION: 60, // 60 seconds
} as const;

// ─────────────────────────────────────────────
// File Upload
// ─────────────────────────────────────────────

export const UPLOAD_CONFIG = {
  MAX_FILE_SIZE: 5000000, // 5MB
  ACCEPTED_TYPES: ['image/jpeg', 'image/png', 'image/webp'],
  ACCEPTED_EXTENSIONS: ['.jpg', '.jpeg', '.png', '.webp'],
} as const;

// ─────────────────────────────────────────────
// Layout Dimensions
// ─────────────────────────────────────────────

export const LAYOUT = {
  NAVBAR_HEIGHT_MOBILE: 70, // px
  NAVBAR_HEIGHT_DESKTOP: 75, // px
  SIDEBAR_WIDTH: 280, // px
} as const;

// ─────────────────────────────────────────────
// Language Settings
// ─────────────────────────────────────────────

export const LANGUAGES = {
  INDONESIAN: 'id',
  ENGLISH: 'en',
} as const;

export const DEFAULT_LANGUAGE = LANGUAGES.INDONESIAN;

// ─────────────────────────────────────────────
// Program Types
// ─────────────────────────────────────────────

export const PROGRAMS = {
  ELITE_ACADEMIA: 'elite-academia',
  ENGLISH_COURSE: 'english-course',
  PLAYTERACY: 'playteracy',
  IPDC: 'ipdc',
} as const;

// ─────────────────────────────────────────────
// Animation & Transitions
// ─────────────────────────────────────────────

export const ANIMATION_DURATION = {
  SHORT: 150, // ms
  NORMAL: 300, // ms
  LONG: 500, // ms
} as const;

// ─────────────────────────────────────────────
// Breakpoints (Tailwind)
// ─────────────────────────────────────────────

export const BREAKPOINTS = {
  SM: 640,    // px
  MD: 768,    // px
  LG: 1024,   // px
  XL: 1280,   // px
  XXL: 1536,  // px
} as const;

// ─────────────────────────────────────────────
// Messages
// ─────────────────────────────────────────────

export const MESSAGES = {
  ERROR: {
    GENERIC: 'Terjadi kesalahan. Silakan coba lagi.',
    NETWORK: 'Kesalahan jaringan. Silakan periksa koneksi Anda.',
    FILE_TOO_LARGE: 'File terlalu besar. Maksimal 5MB.',
    INVALID_FILE: 'File tidak valid. Gunakan JPG, PNG, atau WebP.',
  },
  SUCCESS: {
    UPLOAD_COMPLETE: 'File berhasil diunggah.',
    SAVE_COMPLETE: 'Data berhasil disimpan.',
  },
} as const;

// ─────────────────────────────────────────────
// Routes
// ─────────────────────────────────────────────

export const ROUTES = {
  HOME: '/',
  About: '/visi-misi',
  PROGRAMS: '/program',
  KURIKULUM: '/kurikulum',
  ARTIKEL: '/artikel',
  KONTAK: '/kontak',
  ADMIN: '/admin',
  FOUNDATION: '/foundation',
} as const;

// ─────────────────────────────────────────────
// Cache Keys
// ─────────────────────────────────────────────

export const CACHE_KEYS = {
  SERVICES: 'SERVICES',
  ARTICLES: 'ARTICLES',
  USER_PROFILE: 'USER_PROFILE',
} as const;

// ─────────────────────────────────────────────
// Regex Patterns
// ─────────────────────────────────────────────

export const REGEX = {
  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PHONE: /^(\+\d{1,3}[- ]?)?\d{9,}$/,
  SLUG: /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
} as const;
