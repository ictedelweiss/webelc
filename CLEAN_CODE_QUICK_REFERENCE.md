# 📚 CLEAN CODE QUICK REFERENCE

Ringkasan cepat prinsip-prinsip clean code untuk seluruh project.

---

## 🎯 Core Principles

### 1. **Clarity** - Kode mudah dipahami
```typescript
// ✅ Clear
const isUserAuthenticated = user && user.token !== null;

// ❌ Unclear
const a = u && u.t !== n;
```

### 2. **Simplicity** - Sederhana dan fokus
```typescript
// ✅ Simple function
const getUserAge = (dateOfBirth: Date): number => {
  return new Date().getFullYear() - dateOfBirth.getFullYear();
};

// ❌ Overcomplicated
const getUserAge = (birthDate, currentDate = new Date()) => {
  return currentDate.getFullYear() - birthDate.getFullYear() - (
    currentDate.getMonth() < birthDate.getMonth() ||
    (currentDate.getMonth() === birthDate.getMonth() && 
     currentDate.getDate() < birthDate.getDate()) ? 1 : 0
  );
};
```

### 3. **DRY** (Don't Repeat Yourself)
```typescript
// ✅ Extract to utility
export const formatPrice = (price: number) => 
  price.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });

// Use everywhere
<span>{formatPrice(1500000)}</span>

// ❌ Repeated
<span>{(1500000).toLocaleString()}</span>
<span>{(2500000).toLocaleString()}</span>
```

### 4. **Single Responsibility** - Satu hal per fungsi
```typescript
// ✅ Each function does one thing
const validateEmail = (email: string) => REGEX.EMAIL.test(email);
const getUserFromAPI = (id: number) => fetch(`/api/users/${id}`);
const displayUserProfile = (user: User) => <Profile user={user} />;

// ❌ Mixing concerns
const processUserData = (id: number) => {
  const user = fetch(`/api/users/${id}`);
  if (!validateEmail(user.email)) return false;
  return <Profile user={user} />;
};
```

### 5. **KISS** (Keep It Simple Stupid)
```typescript
// ✅ Simple and readable
if (isLoading) return <Spinner />;
if (error) return <Error message={error} />;
return <Content data={data} />;

// ❌ Overly complex
return isLoading ? <Spinner /> : error ? <Error message={error} /> : <Content data={data} />;
```

---

## 🏷️ Naming Conventions

| Type | Pattern | Example |
|------|---------|---------|
| **Files** | `PascalCase.tsx` | `UserProfile.tsx` |
| **Folders** | `lowercase` | `src/components` |
| **Functions** | `camelCase()` | `getUserData()` |
| **Constants** | `UPPER_SNAKE_CASE` | `MAX_FILE_SIZE` |
| **Interfaces** | `PascalCase` | `UserData` |
| **Booleans** | `is/has/can` prefix | `isLoading`, `hasError` |
| **Private** | `_leadingUnderscore` | `_privateMethod()` |

---

## 📝 Comments

### ✅ Good Comments
```typescript
/**
 * Calculate user's age in years.
 * Uses current date as reference point.
 * @param birthDate - User's date of birth
 * @returns Age in years (number)
 */
const calculateAge = (birthDate: Date): number => {
  // Account for leap years
  return new Date().getFullYear() - birthDate.getFullYear();
};

// Important: Cache expires after 5 minutes, or data becomes stale
const CACHE_DURATION = 5 * 60 * 1000;
```

### ❌ Bad Comments
```typescript
let x = 5; // Set x to 5  (obvious!)
const getName = () => name; // Get name (obvious!)
const arr = []; // Empty array  (obvious!)
```

---

## 🔄 Functions

### Length
```typescript
// ✅ Short & focused (< 30 lines)
const fetchAndDisplayUsers = async () => {
  const users = await fetchUsers();
  return users.map(user => <UserCard key={user.id} user={user} />);
};

// ❌ Too long (> 100 lines in one function)
```

### Parameters
```typescript
// ✅ Max 3-4 parameters
const createUser = (name: string, email: string, role: string) => {};

// ✅ Use object for more parameters
const createUser = ({ name, email, role, phone, address }: UserData) => {};

// ❌ Too many params
const createUser = (n, e, r, p, a, c, s, x, y) => {};
```

### Return Values
```typescript
// ✅ Always specify return type
const getTotal = (items: number[]): number => {
  return items.reduce((sum, item) => sum + item, 0);
};

// ❌ No return type
const getTotal = (items) => {
  return items.reduce((sum, item) => sum + item, 0);
};
```

---

## 🧩 Components

### Props
```typescript
// ✅ Type props explicitly
interface UserCardProps {
  user: User;
  onEdit?: (user: User) => void;
  isLoading?: boolean;
}

function UserCard({ user, onEdit, isLoading }: UserCardProps) {
  return <div />;
}

// ❌ No types
function UserCard(props) {
  return <div />;
}
```

### Size
```typescript
// ✅ Small focused components < 100 lines
export default function UserCard({ user }: { user: User }) {
  return (
    <div className="p-4 border rounded">
      <h3>{user.name}</h3>
      <p>{user.email}</p>
    </div>
  );
}

// ❌ Component too big (mix of multiple features)
```

### Exports
```typescript
// ✅ Use default export for main component
export default MyComponent;

// ✅ Named exports for utilities
export const logger = () => {};
export const validator = () => {};

// ❌ Confusing default + named
export default MyComponent;
export { OtherComponent };
```

---

## 🛡️ Error Handling

```typescript
// ✅ Good error handling
try {
  const data = await fetchData();
  return data;
} catch (error) {
  const message = getErrorMessage(error);
  logError(error, 'fetchData');
  throw new Error(message);
}

// ❌ Ignored errors
try {
  const data = await fetchData();
} catch (error) {
  // Doing nothing!
}

// ❌ Generic catch-all
try {
  await something();
} catch (e: any) {
  console.error('Error:', e);
}
```

---

## 🌍 Constants & Magic Numbers

```typescript
// ❌ Magic numbers scattered everywhere
const handleClick = () => {
  if (fileSize > 5000000) setError('File too large');
};

// ✅ Constants in one place
import { UPLOAD_CONFIG } from '@/lib/constants';

const handleClick = () => {
  if (fileSize > UPLOAD_CONFIG.MAX_FILE_SIZE) {
    setError(MESSAGES.ERROR.FILE_TOO_LARGE);
  }
};
```

---

## 🏗️ Folder Structure

```
src/
├── app/              # Pages (one page per folder)
├── components/       # Reusable UI components
│   ├── common/      # Shared components
│   ├── id/          # Indonesian components
│   └── en/          # English components
├── context/         # Global state
├── hooks/           # Custom hooks
├── lib/             # Utilities & helpers
│   ├── api/         # API client
│   ├── types/       # TypeScript types
│   ├── utils/       # Helper functions
│   └── constants.ts # Configuration
├── data/            # Static data
└── styles/          # Global stylesheets
```

---

## ✅ Code Review Checklist

- [ ] Code is readable and self-documenting
- [ ] No magic numbers or strings (use constants)
- [ ] Proper error handling
- [ ] TypeScript types are complete
- [ ] Components are reusable
- [ ] No code duplication (DRY)
- [ ] Performance optimized
- [ ] Responsive design works
- [ ] Accessible
- [ ] Tests written (if applicable)
- [ ] Documentation updated
- [ ] No console.log in production

---

## 📚 Resources

- [Clean Code Book](https://www.oreilly.com/library/view/clean-code-a/9780136083238/)
- [JavaScript Best Practices](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [React Best Practices](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

**Version**: 1.0 | **Last Updated**: April 2026
