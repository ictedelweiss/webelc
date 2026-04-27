# 🎯 Clean Code Guide - Edelweiss Learning Center

Panduan mengikuti best practices di project ini agar mudah dipelajari dan dipelihara.

---

## 📁 Struktur Folder

```
src/
├── app/                  # Next.js pages & layouts
├── components/           # Reusable UI components
│   ├── id/              # Komponen versi Bahasa Indonesia
│   ├── en/              # Komponen versi Bahasa Inggris
│   └── common/          # Shared components untuk ID & EN
├── context/             # React Context (state management)
├── hooks/               # Custom React hooks
├── lib/                 # Utilities & helpers
│   ├── api/             # API client functions
│   ├── types/           # TypeScript type definitions
│   └── utils/           # Helper functions
├── data/                # Static data & constants
├── styles/              # Global & component styles
└── config/              # Configuration (env, constants)
```

---

## 🎨 Naming Conventions

### Components
- **File**: PascalCase, satu file per komponen
  ```typescript
  // ✅ Good
  src/components/HeroSlider.tsx
  src/components/id/NavbarID.tsx
  
  // ❌ Avoid
  src/components/hero-slider.tsx
  src/components/navbar_id.tsx
  ```

### Functions & Variables
- **camelCase** untuk functions dan variables
  ```typescript
  // ✅ Good
  const handleClick = () => {}
  const getUserName = () => {}
  let isLoading = false
  
  // ❌ Avoid
  const HandleClick = () => {}
  const get_user_name = () => {}
  let is_loading = false
  ```

### Constants
- **UPPER_SNAKE_CASE** untuk constants
  ```typescript
  // ✅ Good
  const MAX_FILE_SIZE = 5000000
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE
  
  // ❌ Avoid
  const max_file_size = 5000000
  const ApiBaseUrl = process.env.NEXT_PUBLIC_API_BASE
  ```

### Types & Interfaces
- **PascalCase** dengan prefix jika perlu
  ```typescript
  // ✅ Good
  interface UserData {}
  type ApiResponse = {}
  
  // ❌ Avoid
  interface IUserData {}
  type api_response = {}
  ```

---

## 📝 Component Template

### Minimal Component
```typescript
'use client';

interface MyComponentProps {
  title: string;
  onClick?: () => void;
}

/**
 * MyComponent
 * 
 * Deskripsi singkat tentang component ini.
 * 
 * @example
 * <MyComponent title="Hello" />
 */
export default function MyComponent({
  title,
  onClick,
}: MyComponentProps) {
  return (
    <div onClick={onClick}>
      {title}
    </div>
  );
}
```

### Component dengan Logic
```typescript
'use client';

import { useState, useCallback } from 'react';

interface FormData {
  name: string;
  email: string;
}

/**
 * FormComponent
 * 
 * Mengelola form input untuk user registration.
 */
export default function FormComponent() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
  });

  const handleChange = useCallback((field: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
  }, []);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    // Logic here
  }, [formData]);

  return (
    <form onSubmit={handleSubmit}>
      {/* JSX here */}
    </form>
  );
}
```

---

## 🔒 TypeScript Best Practices

### 1. Always Specify Types
```typescript
// ✅ Good
const fetchData = async (): Promise<UserData[]> => {
  return [];
}

// ❌ Avoid
const fetchData = async () => {
  return [];
}
```

### 2. Avoid `any`
```typescript
// ✅ Good
interface ApiError {
  message: string;
  code: number;
}

try {
  // ...
} catch (error) {
  if (error instanceof Error) {
    console.error(error.message);
  }
}

// ❌ Avoid
catch (error: any) {
  console.error(error.message); // error could be anything!
}
```

### 3. Use Union Types
```typescript
// ✅ Good
type Status = 'idle' | 'loading' | 'success' | 'error';

// ❌ Avoid
type Status = string; // Too vague
```

---

## 🎯 Function Guidelines

### 1. Single Responsibility
```typescript
// ✅ Good - Each function does one thing
const formatDate = (date: Date): string => format(date);
const getUserById = (id: number): User => users[id];

// ❌ Avoid - Too many responsibilities
const processUserAndFormatDate = (user, date) => {
  // Multiple things happening
}
```

### 2. Pure Functions
```typescript
// ✅ Good - No side effects
const calculateTotal = (items: number[]): number => {
  return items.reduce((sum, item) => sum + item, 0);
}

// ❌ Avoid - Uses external state
let total = 0;
const calculateTotal = (items: number[]) => {
  items.forEach(item => total += item); // Modifying external state
}
```

### 3. Descriptive Names
```typescript
// ✅ Good
const isUserAuthenticated = (): boolean => {};
const getUserNameFromEmail = (email: string): string => {};

// ❌ Avoid
const check = (): boolean => {};
const getInfo = (data: string): string => {};
```

---

## 🌐 Multilingual Components

### Pattern untuk ID & EN
```typescript
// src/components/shared/MyFeature.tsx
interface MyFeatureProps {
  title: string;
  description: string;
  // ... other props
}

export function MyFeature({ title, description }: MyFeatureProps) {
  return (
    <section>
      <h2>{title}</h2>
      <p>{description}</p>
    </section>
  );
}

// src/components/id/MyFeatureID.tsx
import { MyFeature } from '../shared/MyFeature';

export default function MyFeatureID() {
  return (
    <MyFeature
      title="Fitur Saya"
      description="Deskripsi dalam Bahasa Indonesia"
    />
  );
}

// src/components/en/MyFeatureEN.tsx
import { MyFeature } from '../shared/MyFeature';

export default function MyFeatureEN() {
  return (
    <MyFeature
      title="My Feature"
      description="Description in English"
    />
  );
}
```

---

## 📋 Comment Guidelines

### ✅ Good Comments
```typescript
/**
 * Mengambil data user dari API
 * @param userId - ID user yang dicari
 * @returns User data atau null jika tidak ditemukan
 */
const fetchUser = async (userId: number): Promise<User | null> => {
  // ...
}

// Penting: Cache invalidate after 5 minutes
const CACHE_DURATION = 5 * 60 * 1000;
```

### ❌ Avoid Useless Comments
```typescript
// ❌ Don't do this
let x = 5; // Set x to 5
const getName = () => name; // Get name
```

---

## 🚀 Performance Tips

### 1. Memoization
```typescript
// Use memo untuk komponen yang sering re-render
export default memo(function MyComponent({ data }: Props) {
  return <div>{data}</div>;
});

// Use useCallback untuk functions
const handleClick = useCallback(() => {
  // ...
}, [dependencies]);
```

### 2. Lazy Loading
```typescript
'use client';

import { lazy, Suspense } from 'react';

const HeavyComponent = lazy(() => import('./HeavyComponent'));

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HeavyComponent />
    </Suspense>
  );
}
```

---

## ✅ Checklist Sebelum Commit

- [ ] Semua TypeScript errors resolved
- [ ] Tidak ada `console.log` di production code
- [ ] Naming conventions diikuti
- [ ] JSDoc comments ditulis untuk public functions
- [ ] No unused imports atau variables
- [ ] Tests written (if applicable)
- [ ] Lint passes: `npm run lint`

---

## 📚 Resources

- [Next.js Documentation](https://nextjs.org)
- [React Best Practices](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Clean Code Principles](https://cleancode.com)

---

**Versi**: 1.0 | **Update**: April 2026
