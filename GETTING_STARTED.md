# 🚀 CLEAN CODE SETUP - Getting Started

Selamat datang! Proyek ini telah direfactor menjadi **clean code** yang mudah dipelajari, dipelihara, dan dikembangkan.

---

## 📖 Documentation Index

Dokumentasi lengkap tersedia. Mulai dari sini sesuai kebutuhan:

### 🟢 **Baru di Project?**
1. Baca [**ARCHITECTURE.md**](./ARCHITECTURE.md) - Pahami struktur proyek
2. Baca [**SRC_ARCHITECTURE.md**](./SRC_ARCHITECTURE.md) - Struktur folder `/src`
3. Baca [**CLEAN_CODE_QUICK_REFERENCE.md**](./CLEAN_CODE_QUICK_REFERENCE.md) - Quick reference

### 🔵 **Mau Menulis Code?**
1. [**CLEAN_CODE_GUIDE.md**](./CLEAN_CODE_GUIDE.md) - Coding standards & best practices
2. [**COMPONENT_CHECKLIST.md**](./COMPONENT_CHECKLIST.md) - Component development checklist
3. [**src/lib/README.md**](./src/lib/README.md) - Utilities dan helpers

### 🟡 **Mau Optimize Performa?**
- [**PERFORMANCE_GUIDE.md**](./PERFORMANCE_GUIDE.md) - Performance optimization tips

### 🟣 **Perlu Style/CSS?**
- [**src/styles/README.md**](./src/styles/README.md) - Styling guide

### 🟠 **API Integration?**
- [**src/lib/README.md**](./src/lib/README.md#-apiapiClientts) - API client pattern

---

## 🎯 Core Utilities Created

### 📦 Constants (`src/lib/constants.ts`)
```typescript
// Magic numbers & strings defined ONCE
API_CONFIG.BASE_URL
UPLOAD_CONFIG.MAX_FILE_SIZE
LANGUAGES.INDONESIAN
PROGRAMS.ELITE_ACADEMIA
// ... and many more
```

### 🏷️ Types (`src/lib/types/index.ts`)
```typescript
// All TypeScript types centralized
ApiResponse<T>
Service
User
Article
// ... organized by category
```

### 🛠️ Utilities (`src/lib/utils/`)
```typescript
// Error handling
ApiError, NetworkError, getErrorMessage()

// Validation
validateForm(), isValidEmail(), isValidPhone()

// Formatting
formatDate(), formatCurrency(), truncate()
```

### 🎣 Hooks (`src/hooks/index.ts`)
```typescript
// Custom React hooks for common patterns
useAsync()          // Manage async operations
useFetch()          // Simplified data fetching
useLocalStorage()   // Persist state
useDebounce()       // Debounce values
useForm()           // Form state management
// ... and more
```

### 🌐 API Client (`src/lib/apiClient.ts`)
```typescript
// Simplified, properly typed API calls
fetchServices()
uploadImage()
// Template for adding more endpoints
```

---

## 📁 New Folder Structure

```
src/
├── app/                    # Next.js pages & layouts
├── components/
│   ├── common/             # ✨ NEW: Shared reusable components
│   ├── id/                 # Indonesian components
│   ├── en/                 # English components
│   └── README.md           # Component guidelines
├── context/                
│   ├── LanguageContext.tsx # Refactored with best practices!
│   └── README.md           # Context guidelines
├── hooks/
│   ├── index.ts            # ✨ NEW: All custom hooks
│   └── (well organized)
├── lib/
│   ├── constants.ts        # ✨ NEW: All magic values here
│   ├── types/index.ts      # ✨ NEW: All types here
│   ├── apiClient.ts        # Refactored & improved
│   ├── api/                # Future API endpoints
│   ├── utils/
│   │   ├── error-handler.ts # ✨ NEW: Error handling
│   │   ├── validation.ts    # ✨ NEW: Input validation
│   │   ├── formatters.ts    # ✨ NEW: String/date formatters
│   │   └── README.md        # Utilities guide
│   └── README.md            # Lib folder guide
├── data/
│   ├── articles.json
│   └── README.md            # Data folder guide
└── styles/
    ├── globals.css
    ├── ...
    └── README.md            # Styling guide
```

---

## ✨ Key Improvements

### 1. **Type Safety**
- ✅ All types centralized in `src/lib/types/`
- ✅ No more `any` types
- ✅ Strict TypeScript configuration

### 2. **Reusable Utilities**
- ✅ Custom hooks for common patterns
- ✅ Error handling standardized
- ✅ Validation functions centralized
- ✅ Formatters for dates, strings, currency

### 3. **Better Error Handling**
- ✅ Custom error types (ApiError, NetworkError, etc)
- ✅ Consistent error messages
- ✅ Proper logging for debugging
- ✅ User-friendly error display

### 4. **Constants Organization**
- ✅ No more magic numbers
- ✅ No more hardcoded strings
- ✅ All configs in one place
- ✅ Easy to maintain

### 5. **Clean Architecture**
- ✅ Separation of concerns
- ✅ Single responsibility principle
- ✅ DRY (Don't Repeat Yourself)
- ✅ Easy to test and extend

### 6. **Better Documentation**
- ✅ JSDoc comments on functions
- ✅ README in each folder
- ✅ Code examples provided
- ✅ Guidelines for developers

---

## 🚀 Quick Start

### Setup
```bash
# Install dependencies
npm install

# Setup environment
cp .env.example .env.local
# Edit with your values
```

### Development
```bash
# Start dev server
npm run dev

# Check linting
npm run lint

# Build for production
npm run build
```

### Deployment
```bash
# Deploy to Cloudflare
npm run deploy
```

---

## 📋 Before You Code

✅ **Always:**

1. Check if constant/type already exists
2. Use proper naming conventions
3. Add TypeScript types
4. Write JSDoc comments
5. Use existing utilities
6. Check if hook can be reused

❌ **Never:**

1. Hardcode values or strings
2. Skip error handling
3. Use `any` types
4. Ignore TypeScript errors
5. Mix concerns in one function
6. Forget to test on mobile

---

## 🎓 Learning Path

**Day 1**: Read these files
- [ ] ARCHITECTURE.md
- [ ] SRC_ARCHITECTURE.md
- [ ] CLEAN_CODE_QUICK_REFERENCE.md

**Day 2**: Explore the code
- [ ] Look at `src/lib/constants.ts`
- [ ] Check `src/lib/types/index.ts`
- [ ] Read `src/hooks/index.ts`
- [ ] Review `src/lib/api/apiClient.ts`

**Day 3**: Create your first component
- [ ] Read CLEAN_CODE_GUIDE.md
- [ ] Use COMPONENT_CHECKLIST.md
- [ ] Follow patterns in existing components

**Day 4+**: Keep learning
- [ ] PERFORMANCE_GUIDE.md
- [ ] Explore src/lib/utils/
- [ ] Check context/README.md
- [ ] Review specific folder READMEs

---

## 💡 Tips

### 1. Use Constants
```typescript
// ❌ Don't
if (fileSize > 5000000) { }

// ✅ Do
import { UPLOAD_CONFIG } from '@/lib/constants';
if (fileSize > UPLOAD_CONFIG.MAX_FILE_SIZE) { }
```

### 2. Use Types
```typescript
// ❌ Don't
function fetchData(url) { }

// ✅ Do
import type { ApiResponse } from '@/lib/types';
async function fetchData(url: string): Promise<ApiResponse> { }
```

### 3. Use Utilities
```typescript
// ❌ Don't
try {
  // API call
} catch (e: any) {
  console.error(e);
}

// ✅ Do
import { getErrorMessage, logError } from '@/lib/utils/error-handler';
try {
  // API call
} catch (error) {
  logError(error, 'MyComponent');
  showError(getErrorMessage(error));
}
```

### 4. Use Hooks
```typescript
// ❌ Don't
const [data, setData] = useState(null);
const [loading, setLoading] = useState(false);
// ... complex fetch logic

// ✅ Do
import { useAsync } from '@/hooks';
const { data, status } = useAsync(fetchData);
```

---

## 🤝 When Something Is Missing

**Need a function?**
1. Check `src/lib/utils/`
2. Check `src/hooks/`
3. Ask team or create new one
4. Document it with JSDoc

**Need a type?**
1. Check `src/lib/types/index.ts`
2. Add to that file
3. Export it
4. Use in components

**Need a constant?**
1. Check `src/lib/constants.ts`
2. Add to appropriate section
3. Mark with `as const`
4. Use everywhere

---

## ❓ FAQ

**Q: Where should I put my new component?**
A: 
- If ID + EN version: `components/common/` (shared) + `components/id/` + `components/en/`
- If only ID: `components/id/`
- If only EN: `components/en/`

**Q: Should I create a new hook?**
A: If logic is reusable across 2+ components, create a hook in `src/hooks/`.

**Q: How do I handle errors?**
A: Use utilities from `src/lib/utils/error-handler.ts`. Never use bare `try/catch` or `console.error()`.

**Q: Can I use inline styles?**
A: No, use Tailwind classes in `className` attribute.

**Q: How do I add a new API endpoint?**
A: Follow the pattern in `src/lib/apiClient.ts`. Create separate file if needed.

---

## 📞 Need Help?

**Check these first:**
1. The specific folder's README.md
2. ARCHITECTURE.md
3. CLEAN_CODE_GUIDE.md
4. Existing code examples

**Then ask:**
- Your tech lead
- Check documentation files
- Search similar code in project

---

## ✨ You're Ready!

Mulai dengan membaca dokumentasi, kemudian praktik dengan membuat atau mengubah component mengikuti checklist.

**Happy coding! 🚀**

---

## 📚 All Documentation Files

- ✅ [**ARCHITECTURE.md**](./ARCHITECTURE.md) - Project setup & overview
- ✅ [**SRC_ARCHITECTURE.md**](./SRC_ARCHITECTURE.md) - Folder structure guide
- ✅ [**CLEAN_CODE_GUIDE.md**](./CLEAN_CODE_GUIDE.md) - Coding standards
- ✅ [**CLEAN_CODE_QUICK_REFERENCE.md**](./CLEAN_CODE_QUICK_REFERENCE.md) - Quick reference
- ✅ [**COMPONENT_CHECKLIST.md**](./COMPONENT_CHECKLIST.md) - Component development
- ✅ [**PERFORMANCE_GUIDE.md**](./PERFORMANCE_GUIDE.md) - Performance optimization
- ✅ [**src/lib/README.md**](./src/lib/README.md) - Utilities guide
- ✅ [**src/lib/utils/error-handler.ts**](./src/lib/utils/error-handler.ts) - Error handling examples
- ✅ [**src/lib/utils/validation.ts**](./src/lib/utils/validation.ts) - Validation examples
- ✅ [**src/lib/utils/formatters.ts**](./src/lib/utils/formatters.ts) - String/date formatting
- ✅ [**src/hooks/index.ts**](./src/hooks/index.ts) - Custom hooks library
- ✅ [**src/context/README.md**](./src/context/README.md) - Context guide
- ✅ [**src/styles/README.md**](./src/styles/README.md) - Styling guide
- ✅ [**src/data/README.md**](./src/data/README.md) - Static data guide

---

**Created**: April 2026 | **Version**: 1.0
