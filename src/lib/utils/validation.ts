/**
 * Validation Utilities
 * 
 * Helper functions untuk validasi data
 */

import { REGEX } from '../constants';

// ─────────────────────────────────────────────
// Email Validation
// ─────────────────────────────────────────────

export function isValidEmail(email: string): boolean {
  return REGEX.EMAIL.test(email);
}

// ─────────────────────────────────────────────
// Phone Validation
// ─────────────────────────────────────────────

export function isValidPhone(phone: string): boolean {
  return REGEX.PHONE.test(phone);
}

// ─────────────────────────────────────────────
// String Validation
// ─────────────────────────────────────────────

export function isEmpty(value: string | undefined | null): boolean {
  return !value || value.trim().length === 0;
}

export function isValidSlug(slug: string): boolean {
  return REGEX.SLUG.test(slug);
}

export function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

// ─────────────────────────────────────────────
// Number Validation
// ─────────────────────────────────────────────

export function isValidNumber(value: unknown): value is number {
  return typeof value === 'number' && !isNaN(value);
}

export function isInRange(value: number, min: number, max: number): boolean {
  return value >= min && value <= max;
}

// ─────────────────────────────────────────────
// Array Validation
// ─────────────────────────────────────────────

export function isNonEmptyArray<T>(value: unknown): value is T[] {
  return Array.isArray(value) && value.length > 0;
}

export function hasDuplicates<T>(array: T[]): boolean {
  return new Set(array).size !== array.length;
}

// ─────────────────────────────────────────────
// Date Validation
// ─────────────────────────────────────────────

export function isValidDate(date: unknown): date is Date {
  return date instanceof Date && !isNaN(date.getTime());
}

export function isFutureDate(date: Date): boolean {
  return date > new Date();
}

export function isPastDate(date: Date): boolean {
  return date < new Date();
}

// ─────────────────────────────────────────────
// Form Validation
// ─────────────────────────────────────────────

export interface ValidationRule {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  custom?: (value: unknown) => boolean;
}

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string[]>;
}

export function validateForm(
  data: Record<string, unknown>,
  rules: Record<string, ValidationRule>,
): ValidationResult {
  const errors: Record<string, string[]> = {};

  for (const [field, value] of Object.entries(data)) {
    const rule = rules[field];
    if (!rule) continue;

    const fieldErrors: string[] = [];

    // Check required
    if (rule.required && isEmpty(String(value))) {
      fieldErrors.push(`${field} is required`);
    }

    if (!isEmpty(String(value))) {
      const stringValue = String(value);

      // Check minLength
      if (rule.minLength && stringValue.length < rule.minLength) {
        fieldErrors.push(
          `${field} must be at least ${rule.minLength} characters`,
        );
      }

      // Check maxLength
      if (rule.maxLength && stringValue.length > rule.maxLength) {
        fieldErrors.push(
          `${field} must be at most ${rule.maxLength} characters`,
        );
      }

      // Check pattern
      if (rule.pattern && !rule.pattern.test(stringValue)) {
        fieldErrors.push(`${field} format is invalid`);
      }

      // Check custom
      if (rule.custom && !rule.custom(value)) {
        fieldErrors.push(`${field} is invalid`);
      }
    }

    if (fieldErrors.length > 0) {
      errors[field] = fieldErrors;
    }
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
