# 🏗️ Architecture & Setup Guide

Panduan untuk developer yang baru join project.

---

## 🚀 Quick Start

### 1. Setup Environment
```bash
# Install dependencies
npm install

# Setup env variables
cp .env.example .env.local
# Edit .env.local dengan values yang sesuai
```

### 2. Development
```bash
# Start dev server
npm run dev

# Run linting
npm run lint

# Build untuk production
npm build

# Start production server
npm start
```

### 3. Deploy
```bash
# Deploy to Cloudflare Pages
npm run deploy
```

---

## 📋 Project Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| **Frontend** | Next.js 16 | React framework dengan SSR/SSG |
| **UI** | React 19 | UI library |
| **Styling** | Tailwind CSS 4 | Utility-first CSS |
| **Language** | TypeScript 5 | Type safety |
| **API Client** | Built-in `fetch` | HTTP requests |
| **Backend** | PHP | Server-side logic |
| **Hosting** | Cloudflare Pages | Static hosting dengan edge functions |

---

## 🌐 API Architecture

### Frontend-Backend Communication
```
┌─────────────────────────────────────────────┐
│  Next.js Frontend (www.edelweisslearning..) │
└──────────────────┬──────────────────────────┘
                   │ HTTP Requests
                   ▼
      ┌────────────────────────────────┐
      │  Cloudflare CDN / Pages        │
      └──────────────┬───────────────┬─┘
                     │               │
        API calls    │              All requests
        to backend   ▼              have CORS headers
   ┌────────────────────────────────┐
   │  PHP Backend                   │
   │  (DomaiNesia cPanel)           │
   │  api.edelweisslearning..       │
   │                                │
   │ - Authentication               │
   │ - Database operations          │
   │ - File uploads                 │
   └────────────────────────────────┘
```

### API Endpoints

**Base URL**: `https://api.edelweisslearningcenter.com`

| Endpoint | Method | Purpose |
|----------|--------|---------|
| `/api/get_services.php` | GET | Fetch available services |
| `/api/upload_image.php` | POST | Upload image files |

---

## 🔄 Data Flow Example

### Fetching Services
```
User opens page
    ↓
components/Navbar loads
    ↓
calls fetchServices() from lib/api/apiClient.ts
    ↓
Sends GET to /api/get_services.php
    ↓
Receives data
    ↓
Updates component state & render
```

### Uploading Image
```
User selects file
    ↓
FormComponent validates with validateFile()
    ↓
Calls uploadImage(file)
    ↓
Sends multipart POST to /api/upload_image.php
    ↓
Receives URL
    ↓
Update form with image URL
```

---

## 🌍 Multilingual Architecture

### Current Setup
- **Indonesian (ID)**: Default language
- **English (EN)**: Secondary language

### How It Works
```
LanguageContext (global state)
    ↓
    └─ language: 'id' | 'en'
        ↓
PageClientSwitcher (route to correct component)
    ├─ 'id' → Component_ID
    └─ 'en' → Component_EN
```

### Creating Bilingual Component
```typescript
// Step 1: Create shared component
// src/components/common/Feature.tsx
export function Feature({ title, description }) {
  return <section><h2>{title}</h2>{description}</section>;
}

// Step 2: Wrap di ID
// src/components/id/FeatureID.tsx
import { Feature } from '../common/Feature';
export default function FeatureID() {
  return <Feature title="Judul ID" description="..." />;
}

// Step 3: Wrap di EN
// src/components/en/FeatureEN.tsx
import { Feature } from '../common/Feature';
export default function FeatureEN() {
  return <Feature title="Title EN" description="..." />;
}

// Step 4: Use PageClientSwitcher
// Use di layout atau page dengan <PageClientSwitcher id={<FeatureID />} en={<FeatureEN />} />
```

---

## 🏥 State Management

### Global State (Use Context)
- Language preference
- User authentication (future)
- User preferences / settings

### Local State (Use useState/hooks)
- Form inputs
- UI toggles (modal open/close)
- Loading states
- Filter values

### Server State (Use useAsync/useFetch)
- Data from API
- User data
- Articles, services, etc

---

## 🔒 Error Handling

### Pattern
```typescript
try {
  const data = await fetchSomething();
  // use data
} catch (error) {
  const message = getErrorMessage(error);
  // show to user
  logError(error, 'context'); // log for debugging
}
```

### Custom Errors
```typescript
import { 
  ApiError, 
  ValidationError, 
  NetworkError,
  parseError,
  getErrorMessage 
} from '@/lib/utils/error-handler';

try {
  // something
} catch (error) {
  const friendlyMessage = getErrorMessage(error);
}
```

---

## 📱 Responsive Design

### Breakpoints (Tailwind)
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

### Usage
```typescript
// Mobile first, then add larger screens
<div className="w-full md:w-1/2 lg:w-1/3">
  Responsive content
</div>
```

---

## 🎨 Styling

### Use Tailwind Classes
```typescript
// ✅ Good
<div className="bg-blue-500 text-white px-4 py-2 rounded">
  Button
</div>

// ❌ Avoid custom CSS unless absolutely necessary
<div style={{ backgroundColor: 'blue', color: 'white' }}>
  Button
</div>
```

### Custom CSS (only when necessary)
```typescript
// Form validation styles
import '@/styles/form-validation.css';

export function MyForm() {
  return <form className="form-with-validation">...</form>;
}
```

---

## 🧪 Code Quality

### Before Commit
```bash
# Check TypeScript errors
npm run lint

# Fix linting issues
npm run lint -- --fix

# Build locally
npm run build
```

### Code Review Checklist
- [ ] No TypeScript errors
- [ ] Follows naming conventions
- [ ] Components are reusable
- [ ] No hardcoded values
- [ ] Error handling implemented
- [ ] Responsive design works
- [ ] Performance optimized (lazy load, memo, etc)

---

## 🐛 Debugging

### React DevTools
- Install React DevTools browser extension
- Inspect component tree
- Check props and state

### Network Inspector
- Open DevTools → Network tab
- Check API requests
- Verify response data

### Logging
```typescript
// Development only
if (process.env.NODE_ENV !== 'production') {
  console.log('Debug info:', data);
}
```

---

## 📚 Documentation Files

- **CLEAN_CODE_GUIDE.md** - Coding standards dan best practices
- **SRC_ARCHITECTURE.md** - Struktur folder dan files (this file)
- **README.md** - Project overview
- Each folder has its own README.md for specific guidance

---

## 🔗 Useful Links

- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Cloudflare Pages](https://pages.cloudflare.com)

---

**Questions?** Check the main README.md or ask team!

**Last Updated**: April 2026
