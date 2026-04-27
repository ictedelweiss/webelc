# 🚀 PERFORMANCE & OPTIMIZATION Guide

Best practices untuk optimize web performance dan user experience.

---

## ⚡ Code Splitting & Lazy Loading

### Lazy Load Heavy Components

```typescript
'use client';

import { lazy, Suspense } from 'react';

// Load only when needed
const MyChatComponent = lazy(() => import('./MyChatComponent'));

export default function Page() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <MyChatComponent />
    </Suspense>
  );
}
```

### Lazy Load Routes

```typescript
// Next.js automatically code-splits at route level
// Each page is a separate bundle
// src/app/admin/page.tsx → separate admin bundle
// src/app/programs/[id]/page.tsx → separate program bundle
```

---

## 📦 Memoization

### Memoize Components

```typescript
import { memo } from 'react';

// Prevent re-renders when props haven't changed
const MyComponent = memo(function MyComponent({ title }) {
  return <div>{title}</div>;
});

export default MyComponent;
```

### Memoize Callbacks

```typescript
import { useCallback } from 'react';

function MyComponent({ onSubmit }) {
  // Only recreate if dependencies change
  const handleClick = useCallback(() => {
    onSubmit();
  }, [onSubmit]);

  return <button onClick={handleClick}>Submit</button>;
}
```

### Memoize Computed Values

```typescript
import { useMemo } from 'react';

function MyComponent({ items }) {
  // Only recompute if items changes
  const total = useMemo(() => {
    return items.reduce((sum, item) => sum + item.price, 0);
  }, [items]);

  return <div>Total: {total}</div>;
}
```

---

## 🖼️ Image Optimization

### Use Next.js Image Component

```typescript
import Image from 'next/image';

// ✅ Good - Automatic optimization
<Image
  src="/product.jpg"
  alt="Product"
  width={400}
  height={300}
  priority // Load first image immediately
/>

// ❌ Avoid - No optimization
<img src="/product.jpg" alt="Product" />
```

### Responsive Images

```typescript
<Image
  src="/product.jpg"
  alt="Product"
  width={1200}
  height={800}
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  responsive
/>
```

---

## 🔄 Static Generation & Caching

### Next.js Caching Strategies

```typescript
// Option 1: Cache with revalidation (default in latest Next.js)
export const revalidate = 60; // Revalidate every 60 seconds

export default function Page() {
  return <div>This page is cached for 60 seconds</div>;
}

// Option 2: API Cache
const response = await fetch(url, {
  next: { revalidate: 60 },
});

// Option 3: On-demand revalidation
// In an API route:
export async function POST() {
  await revalidatePath('/');
  return Response.json({ revalidated: true });
}
```

---

## 🎯 Loading States

### Show Loading State

```typescript
'use client';

import { useAsync } from '@/hooks';

export function DataList() {
  const { data, status, error } = useAsync(fetchData);

  // Show loading
  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  // Show error
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // Show data
  return <ul>{data.map(item => <li key={item.id}>{item.name}</li>)}</ul>;
}
```

### Skeleton Loaders

```typescript
export function SkeletonCard() {
  return (
    <div className="animate-pulse">
      <div className="h-48 bg-gray-300 rounded"></div>
      <div className="h-4 bg-gray-300 rounded mt-2"></div>
      <div className="h-4 bg-gray-300 rounded mt-2 w-5/6"></div>
    </div>
  );
}
```

---

## 🎨 Rendering Performance

### Virtual Scrolling (for Long Lists)

```typescript
// Use a library like react-window for large lists
import { FixedSizeList as List } from 'react-window';

const Row = ({ index, style }) => (
  <div style={style}>Row {index}</div>
);

export function LongList({ items }) {
  return (
    <List
      height={600}
      itemCount={items.length}
      itemSize={35}
      width="100%"
    >
      {Row}
    </List>
  );
}
```

### Debouncing Search

```typescript
import { useDebounce } from '@/hooks';

export function SearchUsers() {
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search, 300);

  const { data } = useAsync(() => 
    searchUsers(debouncedSearch),
    !!debouncedSearch
  );

  return (
    <>
      <input
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="Search..."
      />
      <Results items={data} />
    </>
  );
}
```

---

## 🌐 Network Performance

### API Call Optimization

```typescript
// ✅ Batch requests
const [users, posts] = await Promise.all([
  fetchUsers(),
  fetchPosts(),
]);

// ✅ Use pagination
export async function fetchArticles(page = 1, limit = 10) {
  const response = await fetch(
    `/api/articles?page=${page}&limit=${limit}`
  );
  return response.json();
}

// ✅ Cancel previous requests
const controller = new AbortController();

fetch('/api/search?q=hello', {
  signal: controller.signal
});

// Cancel if user types again
controller.abort();
```

---

## 📊 Performance Monitoring

### Next.js Analytics

```typescript
// In your layout or root component
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

### Web Vitals

```typescript
// Create pages/vitals.ts
export function reportWebVitals(metric) {
  console.log(metric); // Log to your analytics
}
```

---

## ✅ Optimization Checklist

- [ ] Use `<Image />` for images
- [ ] Implement lazy loading for heavy components
- [ ] Use `memo()` for expensive components
- [ ] Use `useCallback()` for event handlers
- [ ] Use `useMemo()` for expensive computations
- [ ] Implement proper loading states
- [ ] Cache API responses appropriately
- [ ] Use pagination for large lists
- [ ] Debounce search and filter inputs
- [ ] Monitor performance with DevTools

---

## 🔗 Tools & Resources

- [Next.js Performance](https://nextjs.org/docs/app/building-your-application/optimizing)
- [Google PageSpeed Insights](https://pagespeed.web.dev)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [React Profiler](https://react.dev/reference/react/Profiler)

---

**Last Updated**: April 2026
