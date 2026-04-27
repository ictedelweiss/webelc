# 📂 Common Components

Reusable UI components yang dapat digunakan di berbagai bagian aplikasi, baik untuk ID maupun EN (multilingual).

## 📋 Struktur

Components di folder ini:
- ✅ Presentational (hanya UI, no business logic)
- ✅ Generic/Reusable (tidak spesifik untuk satu halaman)
- ✅ Multilingual-ready (props untuk text/content)
- ✅ Fully typed dengan TypeScript
- ✅ Well-documented dengan JSDoc

## 📌 Examples

### Button Component
```typescript
// Reusable button dengan berbagai variants
<Button variant="primary" size="lg">
  Click Me
</Button>
```

### Card Component
```typescript
// Generic card with flexible content
<Card title="Title" description="Desc">
  <img src="..." />
</Card>
```

### Modal Component
```typescript
// Modal dialog untuk alerts/confirmations
<Modal isOpen={true} onClose={handleClose}>
  <p>Confirm action?</p>
</Modal>
```

## 🎯 Guidelines

1. **Accept text as props** - Jangan hardcode text:
   ```typescript
   // ❌ Bad
   <Button>Click Me</Button>
   
   // ✅ Good
   <Button>{label}</Button>
   ```

2. **Keep components small** - Single responsibility:
   ```typescript
   // ❌ Bad - Too complex
   <HeroWithNavbarAndFooter />
   
   // ✅ Good - Compose simple components
   <Hero />
   ```

3. **Use consistent naming** - All files use PascalCase:
   ```typescript
   // Component files
   Button.tsx
   Card.tsx
   Modal.tsx
   ```

4. **Use memo() for performance**:
   ```typescript
   export default memo(function Button({ label }) {
     return <button>{label}</button>;
   });
   ```

## 📝 Creating New Component

### Template
```typescript
'use client';

import { memo } from 'react';
import type { MyComponentProps } from '@/lib/types';

/**
 * MyComponent
 * 
 * One-line description of what this component does.
 * 
 * @example
 * <MyComponent label="Hello" onClick={handleClick} />
 */
const MyComponent = memo(function MyComponent({
  label,
  onClick,
}: MyComponentProps) {
  return (
    <div onClick={onClick} className="p-4">
      {label}
    </div>
  );
});

export default MyComponent;
```

## ✅ Checklist Sebelum Commit

- [ ] Component adalah presentational (no API calls, no complex logic)
- [ ] Props di-type dengan interface
- [ ] JSDoc comment ditulis
- [ ] Component di-wrap dengan `memo()`
- [ ] No hardcoded strings/text
- [ ] Works di mobile dan desktop
- [ ] Exported dengan `export default` atau named export

---

**Created**: April 2026
