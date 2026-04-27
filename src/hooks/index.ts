/**
 * Custom React Hooks
 * 
 * Reusable logic yang dapat digunakan di berbagai components
 */

import { useState, useCallback, useEffect, useRef } from 'react';
import { ApiResponse } from '../types';
import { logError } from '../utils/error-handler';

// ─────────────────────────────────────────────
// useAsync - Manage async operations
// ─────────────────────────────────────────────

interface AsyncState<T> {
  status: 'idle' | 'loading' | 'success' | 'error';
  data: T | null;
  error: Error | null;
}

export function useAsync<T>(
  asyncFunction: () => Promise<T>,
  immediate: boolean = true,
) {
  const [state, setState] = useState<AsyncState<T>>({
    status: 'idle',
    data: null,
    error: null,
  });

  // Use useRef to track if component is mounted
  const mountedRef = useRef(true);

  const execute = useCallback(async () => {
    setState({ status: 'loading', data: null, error: null });

    try {
      const response = await asyncFunction();
      if (mountedRef.current) {
        setState({ status: 'success', data: response, error: null });
      }
    } catch (error) {
      if (mountedRef.current) {
        setState({
          status: 'error',
          data: null,
          error: error instanceof Error ? error : new Error(String(error)),
        });
        logError(error, 'useAsync');
      }
    }
  }, [asyncFunction]);

  useEffect(() => {
    if (immediate) {
      execute();
    }

    return () => {
      mountedRef.current = false;
    };
  }, [execute, immediate]);

  return { ...state, execute };
}

// ─────────────────────────────────────────────
// useFetch - Simplified data fetching
// ─────────────────────────────────────────────

export function useFetch<T>(url: string | null) {
  return useAsync<T>(
    async () => {
      if (!url) throw new Error('URL is required');
      const response = await fetch(url);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      return response.json();
    },
    !!url,
  );
}

// ─────────────────────────────────────────────
// useLocalStorage - Persist state to localStorage
// ─────────────────────────────────────────────

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      if (typeof window === 'undefined') return initialValue;
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      logError(error, `useLocalStorage(${key})`);
      return initialValue;
    }
  });

  const setValue = useCallback(
    (value: T | ((val: T) => T)) => {
      try {
        const valueToStore = value instanceof Function ? value(storedValue) : value;
        setStoredValue(valueToStore);
        if (typeof window !== 'undefined') {
          window.localStorage.setItem(key, JSON.stringify(valueToStore));
        }
      } catch (error) {
        logError(error, `useLocalStorage.setValue(${key})`);
      }
    },
    [key, storedValue],
  );

  return [storedValue, setValue] as const;
}

// ─────────────────────────────────────────────
// useDebounce - Debounce a value
// ─────────────────────────────────────────────

export function useDebounce<T>(value: T, delayMs: number = 500): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delayMs);

    return () => clearTimeout(handler);
  }, [value, delayMs]);

  return debouncedValue;
}

// ─────────────────────────────────────────────
// useToggle - Simple toggle state
// ─────────────────────────────────────────────

export function useToggle(initialValue: boolean = false) {
  const [value, setValue] = useState(initialValue);

  const toggle = useCallback(() => {
    setValue(prev => !prev);
  }, []);

  return [value, toggle] as const;
}

// ─────────────────────────────────────────────
// usePrevious - Get previous value
// ─────────────────────────────────────────────

export function usePrevious<T>(value: T): T | undefined {
  const ref = useRef<T>();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}

// ─────────────────────────────────────────────
// useWindowSize - Track window dimensions
// ─────────────────────────────────────────────

export function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}

// ─────────────────────────────────────────────
// useForm - Manage form state
// ─────────────────────────────────────────────

export interface FormConfig<T> {
  initialValues: T;
  onSubmit: (values: T) => Promise<void>;
  validate?: (values: T) => Record<keyof T, string>;
}

export function useForm<T extends Record<string, any>>({
  initialValues,
  onSubmit,
  validate,
}: FormConfig<T>) {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<Record<keyof T, string>>({} as Record<keyof T, string>);
  const [touched, setTouched] = useState<Record<keyof T, boolean>>({} as Record<keyof T, boolean>);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { name, value, type } = e.target;
      const fieldValue = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
      
      setValues(prev => ({
        ...prev,
        [name]: fieldValue,
      }));
    },
    [],
  );

  const handleBlur = useCallback(
    (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setTouched(prev => ({
        ...prev,
        [e.target.name]: true,
      }));
    },
    [],
  );

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      
      if (validate) {
        const newErrors = validate(values);
        setErrors(newErrors);
        if (Object.keys(newErrors).length > 0) return;
      }

      setIsSubmitting(true);
      try {
        await onSubmit(values);
      } catch (error) {
        logError(error, 'useForm.onSubmit');
      } finally {
        setIsSubmitting(false);
      }
    },
    [values, validate, onSubmit],
  );

  const resetForm = useCallback(() => {
    setValues(initialValues);
    setErrors({} as Record<keyof T, string>);
    setTouched({} as Record<keyof T, boolean>);
  }, [initialValues]);

  return {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm,
    setValues,
  };
}
