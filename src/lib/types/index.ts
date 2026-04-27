/**
 * Centralized Type Definitions
 * 
 * Semua types TypeScript didefinisikan di sini untuk
 * memudahkan re-use dan maintenance
 */

// ─────────────────────────────────────────────
// API Response Types
// ─────────────────────────────────────────────

export interface ApiResponse<T> {
  status: 'success' | 'error' | 'fallback';
  data?: T;
  message?: string;
  code?: number;
}

export interface ApiErrorResponse {
  status: 'error';
  message: string;
  code: number;
}

// ─────────────────────────────────────────────
// Service/Program Types
// ─────────────────────────────────────────────

export interface Service {
  id: number;
  name: string;
  description: string;
  icon?: string;
  details?: unknown;
}

export interface Program {
  id: string;
  name: string;
  description: string;
  image?: string;
  highlights?: string[];
}

// ─────────────────────────────────────────────
// User Types
// ─────────────────────────────────────────────

export interface User {
  id: number;
  name: string;
  email: string;
  phone?: string;
  role?: 'admin' | 'user' | 'guest';
  createdAt?: string;
}

export interface AuthToken {
  token: string;
  expiresAt: string;
}

// ─────────────────────────────────────────────
// Article/Content Types
// ─────────────────────────────────────────────

export interface Article {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt?: string;
  author?: string;
  category?: string;
  tags?: string[];
  image?: string;
  publishedAt?: string;
  updatedAt?: string;
}

// ─────────────────────────────────────────────
// Upload Types
// ─────────────────────────────────────────────

export interface UploadResponse {
  status: 'success';
  url: string;
  filename: string;
  size: number;
}

export interface UploadError {
  status: 'error';
  message: string;
  code: 'FILE_TOO_LARGE' | 'INVALID_TYPE' | 'UPLOAD_FAILED';
}

// ─────────────────────────────────────────────
// Form Types
// ─────────────────────────────────────────────

export interface FormField<T> {
  value: T;
  error?: string;
  touched: boolean;
  isDirty: boolean;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

// ─────────────────────────────────────────────
// Component Props Types
// ─────────────────────────────────────────────

export interface CardProps {
  title: string;
  description?: string;
  image?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}

export interface ModalProps {
  isOpen: boolean;
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}

// ─────────────────────────────────────────────
// Language Context Types
// ─────────────────────────────────────────────

export type Language = 'id' | 'en';

export interface LanguageContextValue {
  language: Language;
  setLanguage: (lang: Language) => void;
  t?: (key: string) => string; // Optional translation function
}

// ─────────────────────────────────────────────
// Admin Types
// ─────────────────────────────────────────────

export interface AdminDashboard {
  totalUsers: number;
  totalArticles: number;
  totalServices: number;
  recentActivity: Activity[];
}

export interface Activity {
  id: string;
  description: string;
  timestamp: string;
  type: 'create' | 'update' | 'delete';
}

// ─────────────────────────────────────────────
// Pagination Types
// ─────────────────────────────────────────────

export interface PaginationParams {
  page: number;
  limit: number;
  sort?: 'asc' | 'desc';
  sortBy?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    currentPage: number;
    totalPages: number;
    totalItems: number;
    itemsPerPage: number;
  };
}

// ─────────────────────────────────────────────
// Filter Types
// ─────────────────────────────────────────────

export interface FilterOptions {
  search?: string;
  category?: string;
  status?: string;
  dateFrom?: string;
  dateTo?: string;
}
