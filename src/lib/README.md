# 🔧 Utilities & Helpers Guide

Dokumentasi untuk utility functions dan helpers di `/src/lib`.

---

## 📂 Folder Structure

```
lib/
├── constants.ts              # Magic numbers, strings, configs
├── types/index.ts            # TypeScript types
├── api/
│   ├── apiClient.ts          # Main API client
│   └── ... (per-endpoint)
└── utils/
    ├── error-handler.ts      # Error handling & validation
    ├── validation.ts         # Input validation
    └── ... (other utilities)
```

---

## 🎯 constants.ts

Centralized configuration dan magic values.

### Usage Pattern

```typescript
import { API_CONFIG, LAYOUT, UPLOAD_CONFIG } from '@/lib/constants';

// Use instead of hardcoding
console.log(API_CONFIG.BASE_URL); // Don't do: 'https://api...'
console.log(LAYOUT.NAVBAR_HEIGHT_DESKTOP); // Don't do: 75
console.log(UPLOAD_CONFIG.MAX_FILE_SIZE); // Don't do: 5000000
```

### Adding New Constants

```typescript
// ✅ Group related constants
export const MY_FEATURE = {
  TIMEOUT: 5000,
  MAX_RETRIES: 3,
  CACHE_KEY: 'my-feature',
} as const;

// ❌ Avoid scattering
export const MY_FEATURE_TIMEOUT = 5000;
export const MY_FEATURE_MAX_RETRIES = 3;
```

---

## 🏷️ types/index.ts

All TypeScript types in one place.

### When to Add Type

```typescript
// ✅ Add type if used in multiple files
export interface User {
  id: number;
  name: string;
  email: string;
}

// ❌ Don't add if only used in one component
// Define inline in component instead
```

### Type Organization

```typescript
// Group by category with comments
// ─────────────────────────────────────────────
// API Types
// ─────────────────────────────────────────────
export interface ApiResponse<T> { }

// ─────────────────────────────────────────────
// Domain Types (User, Article, etc)
// ─────────────────────────────────────────────
export interface User { }

// ─────────────────────────────────────────────
// Component Props
// ─────────────────────────────────────────────
export interface ButtonProps { }
```

---

## 🌐 api/apiClient.ts

Centralized API calls.

### Basic Pattern

```typescript
export async function fetchSomething(): Promise<ApiResponse<Something>> {
  try {
    const response = await fetch(buildUrl('/api/something'), {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      next: { revalidate: API_CONFIG.CACHE_DURATION },
    });

    if (!response.ok) {
      const data = await response.json().catch(() => ({}));
      handleApiError(response, data);
    }

    return response.json();
  } catch (error) {
    if (error instanceof ApiError) throw error;
    if (error instanceof NetworkError) throw error;
    if (error instanceof TypeError) handleNetworkError(error);
    
    logError(error, 'fetchSomething');
    throw error;
  }
}
```

### Error Handling

```typescript
import {
  ApiError,
  NetworkError,
  getErrorMessage,
  logError,
} from '@/lib/utils/error-handler';

try {
  const data = await fetchSomething();
} catch (error) {
  const message = getErrorMessage(error); // User-friendly message
  logError(error, 'MyComponent');        // Debug logging
  showErrorToUser(message);
}
```

---

## ✔️ utils/validation.ts

Input validation utilities.

### Available Functions

```typescript
import {
  isValidEmail,
  isValidPhone,
  isEmpty,
  validateForm,
} from '@/lib/utils/validation';

// Email validation
if (!isValidEmail(email)) {
  showError('Invalid email');
}

// Phone validation
if (!isValidPhone(phone)) {
  showError('Invalid phone');
}

// Form validation
const result = validateForm(formData, {
  email: { required: true, pattern: REGEX.EMAIL },
  name: { required: true, minLength: 3 },
});

if (!result.isValid) {
  console.log(result.errors); // { email: ['Format invalid'] }
}
```

---

## ⚠️ utils/error-handler.ts

Robust error handling.

### Custom Error Classes

```typescript
import {
  ApiError,
  ValidationError,
  NetworkError,
  parseError,
  getErrorMessage,
  logError,
  retryAsync,
  validateFile,
} from '@/lib/utils/error-handler';

// Throw custom errors
throw new ApiError('INVALID_REQUEST', 400, 'Bad request data');
throw new ValidationError('email', 'Email already exists');
throw new NetworkError('Connection timeout');

// Parse errors from any source
const error = parseError(unknownError);

// Get user-friendly message
const message = getErrorMessage(error);

// Log for debugging
logError(error, 'ComponentName');

// Retry with exponential backoff
const data = await retryAsync(() => fetchData(), 3, 1000);

// Validate files
const validation = validateFile(file, 5000000, ['image/jpeg']);
if (!validation.valid) {
  showError(validation.error);
}
```

---

## 🎣 Custom Hooks

Located in `/src/hooks/index.ts`

### Available Hooks

```typescript
import {
  useAsync,
  useFetch,
  useLocalStorage,
  useDebounce,
  useToggle,
  usePrevious,
  useWindowSize,
  useForm,
} from '@/hooks';

// Manage async operations
const { data, status, error, execute } = useAsync(fetchData);

// Simplified fetch
const { data, status, error } = useFetch('/api/data');

// Persist to localStorage
const [count, setCount] = useLocalStorage('count', 0);

// Debounce search input
const debouncedSearch = useDebounce(searchInput, 300);

// Simple boolean toggle
const [isOpen, toggle] = useToggle(false);

// Get previous value
const previousCount = usePrevious(count);

// Track window size
const { width, height } = useWindowSize();

// Form state with validation
const {
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
} = useForm({
  initialValues: { name: '', email: '' },
  onSubmit: async (values) => { /* ... */ },
  validate: (values) => { /* ... */ },
});
```

---

## 💡 Best Practices

### ✅ Do

- ✅ Import types explicitly: `import type { User } from '@/lib/types'`
- ✅ Use constants instead of magic values
- ✅ Validate user input
- ✅ Handle errors gracefully
- ✅ Add JSDoc comments to exported functions
- ✅ Group related utilities together

### ❌ Don't

- ❌ Hardcode URLs, timeouts, sizes
- ❌ Use generic error messages
- ❌ Forget error handling in try/catch
- ❌ Mix concerns (API + validation + formatting)
- ❌ Export everything as default
- ❌ Ignore type errors

---

## 📚 Common Patterns

### Creating a New API Endpoint

```typescript
// Step 1: Add type
export interface Article {
  id: string;
  title: string;
  content: string;
}

// Step 2: Create fetch function
export async function fetchArticles(): Promise<ApiResponse<Article[]>> {
  // Use standard pattern from apiClient.ts
}

// Step 3: Create custom hook
export function useArticles() {
  return useAsync(() => fetchArticles());
}

// Step 4: Use in component
function ArticleList() {
  const { data, status } = useArticles();
  // ...
}
```

### Creating a New Utility

```typescript
// Step 1: Add to utils/my-util.ts
export function myUtility(input: string): string {
  // Implementation
}

// Step 2: Export from lib/utils/index.ts if needed
// export { myUtility } from './my-util';

// Step 3: Use in components
import { myUtility } from '@/lib/utils/my-util';
```

---

**Last Updated**: April 2026
