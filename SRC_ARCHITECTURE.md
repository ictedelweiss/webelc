# 📁 Source Code Structure

Panduan lengkap struktur folder `/src` dan bagian-bagian yang ada.

---

## 📂 `/src/app` - Next.js Pages & Layouts

**Tujuan**: Berisi page components dan layouts sesuai App Router pattern dari Next.js.

**Struktur**:
```
app/
├── layout.tsx          # Root layout (applies to all pages)
├── page.tsx            # Home page / index
├── template.tsx        # Page template
├── admin/              # Admin pages
├── artikel/            # Article pages
├── kontak/             # Contact page
├── kurikulum/          # Curriculum pages
├── program/            # Programs pages
├── visi-misi/          # Vision-Mission page
└── foundation/         # Foundation pages
```

**Best Practices**:
- ✅ Gunakan `'use client'` hanya jika perlu client-side interactivity
- ✅ Minimize logic di pages, delegate ke components
- ✅ Use metadata untuk SEO
- ✅ Organize by feature (program, admin, etc)

**Contoh**:
```typescript
// Bad: Too much logic in page
export default function Page() {
  const [state, setState] = useState(...)
  // ... 100 lines of logic
}

// Good: Logic di component, page clean
export default function Page() {
  return <MyFeature />
}
```

---

## 🧩 `/src/components` - UI Components

**Tujuan**: Reusable presentational dan container components.

**Struktur**:
```
components/
├── id/                 # Komponen untuk Bahasa Indonesia
│   ├── HomeID.tsx
│   ├── NavbarID.tsx
│   ├── FooterID.tsx
│   └── ... (halaman lain)
├── en/                 # Komponen untuk Bahasa Inggris
│   ├── HomeEN.tsx
│   ├── NavbarEN.tsx
│   ├── FooterEN.tsx
│   └── ... (halaman lain)
├── common/             # Shared components (NEW - consolidate here)
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── Modal.tsx
│   └── ...
├── Navbar.tsx          # Wrapper untuk language switching
├── Footer.tsx          # Wrapper untuk language switching
├── PageClientSwitcher.tsx
└── ...
```

**Guidelines**:
- ✅ One component per file
- ✅ Use TypeScript interfaces for props
- ✅ Add JSDoc comments
- ✅ Extract to `common/` jika dipakai di ID dan EN
- ✅ Keep components pure, no side effects

**Contoh struktur component yang baik**:
```typescript
'use client';

import { memo } from 'react';
import type { CardProps } from '@/lib/types';

/**
 * Card Component
 * 
 * Reusable card container dengan shadow dan border.
 * 
 * @example
 * <Card title="Hello" description="World" />
 */
const Card = memo(function Card({
  title,
  description,
  image,
  onClick,
}: CardProps) {
  return (
    <div 
      className="rounded-lg shadow-md p-4 cursor-pointer"
      onClick={onClick}
    >
      {image && <img src={image} alt={title} />}
      <h3 className="font-semibold">{title}</h3>
      {description && <p className="text-gray-600">{description}</p>}
    </div>
  );
});

export default Card;
```

---

## 🎣 `/src/hooks` - Custom React Hooks

**Tujuan**: Extract reusable React logic.

**File**:
- `index.ts` - Semua custom hooks
- `useAsync()` - Manage async operations dan loading states
- `useFetch()` - Simplified data fetching
- `useLocalStorage()` - Persist state to localStorage
- `useDebounce()` - Debounce values untuk search, input
- `useToggle()` - Simple boolean toggle
- `useForm()` - Form state management

**Contoh**:
```typescript
// Using useAsync
function UserList() {
  const { data, status, error } = useAsync(() => 
    fetch('/api/users').then(r => r.json())
  );

  if (status === 'loading') return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  
  return <ul>{data?.map(u => <li key={u.id}>{u.name}</li>)}</ul>;
}
```

---

## 🌍 `/src/context` - React Context

**Tujuan**: Global state management (language, auth, themes, etc).

**File**:
- `LanguageContext.tsx` - Language switching (ID/EN)

**Structure Pattern**:
```typescript
'use client';

import { createContext, useContext } from 'react';
import type { LanguageContextValue } from '@/lib/types';

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // ... implementation
  
  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
```

---

## 🛠️ `/src/lib` - Utilities & Helpers

**Tujuan**: Business logic, API calls, dan helper functions.

**Struktur**:
```
lib/
├── constants.ts        # Semua magic numbers, strings, configs
├── types/
│   └── index.ts        # Centralized TypeScript types
├── api/
│   ├── apiClient.ts    # API call functions
│   └── ... (other endpoints)
└── utils/
    ├── error-handler.ts    # Error handling utilities
    ├── validation.ts       # Input validation
    ├── formatters.ts       # String/date/number formatters
    └── ... (other utilities)
```

### `constants.ts`
Jangan hardcode values - define di constants:
```typescript
// ❌ Bad
const size = 5000000; // What is this?

// ✅ Good - di constants.ts
export const UPLOAD_CONFIG = {
  MAX_FILE_SIZE: 5000000,
  ACCEPTED_TYPES: ['image/jpeg', 'image/png'],
}
```

### `types/index.ts`
Centralized type definitions:
- API response types
- Component prop types
- Entity types (User, Article, etc)
- Enums untuk status/languages

### `api/`
API integration:
- `apiClient.ts` - Centralized HTTP client
- Use constants dari `../constants.ts`
- Use types dari `../types/index.ts`
- Error handling dengan `../utils/error-handler.ts`

### `utils/`
Helper functions:
- `error-handler.ts` - Parse errors, logging, retry logic
- `validation.ts` - Input validation, form validation
- `formatters.ts` - Format dates, numbers, strings (create this)

---

## 📊 `/src/data` - Static Data

**Tujuan**: JSON files, mock data, atau data constants.

**File**:
- `articles.json` - Sample/cached articles data

**Usage Pattern**:
```typescript
import articlesData from '@/data/articles.json';

export async function getArticles() {
  try {
    // Try API first
    const response = await fetchArticles();
    return response;
  } catch {
    // Fallback to local data
    return articlesData;
  }
}
```

---

## 🎨 `/src/styles` - CSS & Styling

**Tujuan**: Global styles dan CSS modules.

**Usage**:
- `globals.css` - Global styles (via layout.tsx)
- Component-specific: use Tailwind classes inline
- Heavy styling: create `.module.css` files next to component

**Best Practices**:
- ✅ Prefer Tailwind utility classes
- ✅ Use CSS modules untuk complex styles
- ✅ Keep globals minimal
- ✅ Organize by feature/page untuk large stylesheets

---

## 📝 Example: Adding a New Feature

### 1. Create Type (if needed)
```typescript
// src/lib/types/index.ts
export interface BlogPost {
  id: string;
  title: string;
  content: string;
}
```

### 2. Create API Integration
```typescript
// src/lib/api/blog.ts
export async function fetchBlogPosts(): Promise<BlogPost[]> {
  const response = await fetch(`${API_CONFIG.BASE_URL}/blogs`);
  if (!response.ok) throw new Error('Failed to fetch blogs');
  return response.json();
}
```

### 3. Create Custom Hook (if complex)
```typescript
// src/hooks/useBlog.ts
export function useBlogPosts() {
  return useAsync(() => fetchBlogPosts());
}
```

### 4. Create Component
```typescript
// src/components/common/BlogList.tsx
import { useBlogPosts } from '@/hooks/useBlog';

export function BlogList() {
  const { data, status } = useBlogPosts();
  
  if (status === 'loading') return <div>Loading...</div>;
  
  return (
    <div>
      {data?.map(post => (
        <article key={post.id}>{post.title}</article>
      ))}
    </div>
  );
}
```

### 5. Use in Page
```typescript
// src/app/blog/page.tsx
import { BlogList } from '@/components/common/BlogList';

export default function BlogPage() {
  return <BlogList />;
}
```

---

## ✅ Quick Checklist

- [ ] Components dalam `/components` atau `/components/common`
- [ ] Types dalam `/lib/types/index.ts`
- [ ] Constants dalam `/lib/constants.ts`
- [ ] API calls dalam `/lib/api/`
- [ ] Utilities dalam `/lib/utils/`
- [ ] Hooks dalam `/hooks/`
- [ ] No hardcoded strings atau numbers
- [ ] All components have TypeScript types
- [ ] All functions have JSDoc comments

---

**Last Updated**: April 2026
