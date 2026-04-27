# 🛠️ COMPONENT DEVELOPMENT CHECKLIST

Gunakan checklist ini sebelum membuat atau mengubah component.

---

## 📋 Planning Phase

- [ ] Define component purpose clearly
- [ ] Identify props needed
- [ ] Plan TypeScript interface for props
- [ ] Decide if component needs state/effects
- [ ] Consider reusability across pages/languages

---

## 🏗️ Implementation Phase

### TypeScript & Types
- [ ] Define props interface explicitly
- [ ] Import type if from `@/lib/types`
- [ ] No `any` types used
- [ ] Return type specified for functions
- [ ] All variables properly typed

### Code Quality
- [ ] Single responsibility (one thing per component)
- [ ] Pure component (no side effects)
- [ ] Extract functions for complex logic
- [ ] Use constants instead of magic values
- [ ] No hardcoded strings or numbers
- [ ] Variable names are descriptive

### Documentation
- [ ] Add JSDoc comment for component
- [ ] Include `@example` usage
- [ ] Document complex logic with comments
- [ ] Export clearly (default or named)

### Performance
- [ ] Wrap with `memo()` if re-renders frequently
- [ ] Use `useCallback()` for callbacks/handlers
- [ ] Use `useMemo()` for expensive operations
- [ ] Lazy load if component is heavy
- [ ] No unnecessary renders

### Styling
- [ ] Use Tailwind classes (no inline styles)
- [ ] Responsive classes (mobile-first)
- [ ] Consistent spacing and sizing
- [ ] Accessible colors and contrast
- [ ] Test on mobile and desktop

---

## 🌍 For Multilingual Components

### If Used in ID & EN
- [ ] Create shared component in `components/common/`
- [ ] Create ID wrapper in `components/id/`
- [ ] Create EN wrapper in `components/en/`
- [ ] Pass text as props (don't hardcode)
- [ ] Test both languages

### If Only One Language
- [ ] Place in `components/id/` or `components/en/`
- [ ] Or use in specific page that only has one language

---

## ✅ Testing Phase

### Manual Testing
- [ ] Component renders without errors
- [ ] Props work as expected
- [ ] Click handlers work
- [ ] Form inputs work (if applicable)
- [ ] Mobile layout works
- [ ] No console errors/warnings

### Accessibility
- [ ] Keyboard navigation works
- [ ] Color contrast sufficient
- [ ] Alt text for images
- [ ] ARIA labels where needed
- [ ] Works with screen readers

### Edge Cases
- [ ] Empty state handled
- [ ] Loading state shown
- [ ] Error state handled
- [ ] Long text truncated properly
- [ ] Special characters handled

---

## 🔄 Integration Phase

### With Parent Component
- [ ] Props are passed correctly
- [ ] State updates work
- [ ] Callbacks are triggered
- [ ] Data flows correctly

### With API/Hooks
- [ ] API calls are made correctly
- [ ] Loading/error states show
- [ ] Data displays correctly
- [ ] Re-fetching works

---

## 🧹 Before Commit

### Code
- [ ] No console.log() in production code
- [ ] No `console.error()` for errors (use error handling)
- [ ] No unused imports
- [ ] No unused variables
- [ ] Linting passes: `npm run lint`

### Files
- [ ] Component file is in correct folder
- [ ] Component name matches file name (PascalCase)
- [ ] JSDoc comment is complete
- [ ] TypeScript errors resolved

### Documentation
- [ ] README.md updated if needed
- [ ] Comments added for complex logic
- [ ] Example usage provided

### Performance
- [ ] No unnecessary re-renders
- [ ] No performance issues
- [ ] Lazy loading implemented if needed
- [ ] Bundle size reasonable

---

## 🧪 Component Types

### Presentational Component
```typescript
// ✅ Checklist:
- [ ] Only receives and displays props
- [ ] No API calls
- [ ] No complex state
- [ ] Wrapped with memo()
- [ ] Fully reusable
```

### Container Component
```typescript
// ✅ Checklist:
- [ ] Fetches data via hooks
- [ ] Manages component state
- [ ] Handles business logic
- [ ] Passes props to presentational components
- [ ] Usually appears only once in app
```

### Page Component
```typescript
// ✅ Checklist:
- [ ] Located in app/ folder
- [ ] Metadata defined (SEO)
- [ ] Composition of other components
- [ ] No hardcoded numbers/strings
- [ ] Responsive layout
```

---

## 📚 Example: Complete Component

```typescript
'use client';

import { memo, useCallback } from 'react';
import type { ButtonProps } from '@/lib/types';

/**
 * Button Component
 * 
 * Reusable button with multiple variants and sizes.
 * Extends native HTML button attributes.
 * 
 * @example
 * <Button variant="primary" size="lg">
 *   Click Me
 * </Button>
 */
const Button = memo(function Button({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  onClick,
  children,
  ...props
}: ButtonProps) {
  
  // Handle click with loading state
  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!isLoading && onClick) {
        onClick(e);
      }
    },
    [onClick, isLoading],
  );

  // Define variants
  const variantClasses = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600',
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300',
    danger: 'bg-red-500 text-white hover:bg-red-600',
  };

  const sizeClasses = {
    sm: 'px-2 py-1 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  return (
    <button
      className={`
        rounded-lg transition-colors disabled:opacity-50
        ${variantClasses[variant]}
        ${sizeClasses[size]}
      `}
      onClick={handleClick}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? 'Loading...' : children}
    </button>
  );
});

export default Button;
```

✅ **Has:**
- JSDoc comment
- TypeScript interface
- Memoized
- useCallback for handler
- Descriptive variable names
- Responsive and accessible
- No hardcoded values
- Proper error handling

---

**Last Updated**: April 2026
