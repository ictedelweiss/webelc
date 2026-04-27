# 🌍 Context Folder

Context untuk global state management.

## 📋 Current Files

- **LanguageContext.tsx** - Language switching (ID/EN)

## 📝 Guidelines

### 1. Use Context Only For Truly Global State

✅ **Use Context**:
- Language preference
- User authentication
- Theme (light/dark)
- User settings

❌ **Don't Use Context**:
- Form inputs (use useState)
- Page loading state (use useAsync hook)
- Temporary UI toggles (use useState)

### 2. Provide TypeScript Types

```typescript
interface MyContextValue {
  value: string;
  setValue: (v: string) => void;
}

const MyContext = createContext<MyContextValue | undefined>(undefined);
```

### 3. Create Consumer Hook With Error Handling

```typescript
export function useMyContext(): MyContextValue {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error('useMyContext must be used within MyProvider');
  }
  return context;
}
```

### 4. Document Usage

```typescript
/**
 * MyProvider
 * 
 * Provides MyContext untuk aplikasi.
 * 
 * @example
 * <MyProvider>
 *   <App />
 * </MyProvider>
 */
export function MyProvider({ children }: { children: ReactNode }) {
  // ...
}
```

## 🎯 Example: Adding A New Context

### Step 1: Define Type
```typescript
// lib/types/index.ts
export interface MyContextValue {
  value: string;
  setValue: (v: string) => void;
}
```

### Step 2: Create Context File
```typescript
// context/MyContext.tsx
'use client';

import { createContext, useContext, ReactNode, useCallback } from 'react';
import type { MyContextValue } from '@/lib/types';

const MyContext = createContext<MyContextValue | undefined>(undefined);

export function MyProvider({ children }: { children: ReactNode }) {
  const [value, setValue] = useCallback((v: string) => {
    // validation and logic
  }, []);

  return (
    <MyContext.Provider value={{ value, setValue }}>
      {children}
    </MyContext.Provider>
  );
}

export function useMyContext(): MyContextValue {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error('useMyContext must be used within MyProvider');
  }
  return context;
}
```

### Step 3: Add To Layout
```typescript
// app/layout.tsx
import { MyProvider } from '@/context/MyContext';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <LanguageProvider>
          <MyProvider>
            {children}
          </MyProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
```

### Step 4: Use In Components
```typescript
'use client';

import { useMyContext } from '@/context/MyContext';

export default function MyComponent() {
  const { value, setValue } = useMyContext();
  
  return (
    <div>
      <p>{value}</p>
      <button onClick={() => setValue('new value')}>
        Update
      </button>
    </div>
  );
}
```

---

**Last Updated**: April 2026
