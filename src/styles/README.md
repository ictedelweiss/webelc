# 🎨 Styling Guide

How to handle CSS dan styling dalam project.

---

## 📂 File Organization

```
src/
├── app/
│   └── globals.css          # Global styles
├── styles/
│   ├── article-responsive.css
│   └── ... (component-specific)
└── components/
    └── MyComponent.tsx      # Inline Tailwind classes
```

---

## 🎯 Styling Approach

### 1. Prefer Tailwind CSS Classes

```typescript
// ✅ Good - Use Tailwind utilities
<div className="flex items-center justify-between px-4 py-2 bg-blue-500 text-white rounded-lg">
  Button
</div>

// ❌ Avoid - Custom CSS when not needed
const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    // ...
  }
};
```

### 2. Use CSS Modules for Complex Styles

```typescript
// Button.module.css
.button {
  @apply px-4 py-2 rounded-lg transition-colors;
  
  &:hover {
    @apply bg-blue-600;
  }
}

// Button.tsx
import styles from './Button.module.css';

export function Button() {
  return <button className={styles.button}>Click</button>;
}
```

### 3. Global Styles in globals.css

```css
/* Only for truly global styles */
:root {
  --font-poppins: "Poppins", system-ui;
}

html {
  scroll-behavior: smooth;
}

body {
  @apply bg-white text-gray-900;
}
```

---

## 🎨 Tailwind Configuration

Using Tailwind CSS 4 with PostCSS.

### Key Files

- `tailwind.config.js` - Tailwind setup
- `postcss.config.mjs` - PostCSS plugins
- `globals.css` - Global Tailwind imports

### Common Customizations

```javascript
// tailwind.config.js
export default {
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6',
      },
      spacing: {
        '128': '32rem',
      },
    },
  },
};
```

---

## 📱 Responsive Design

### Tailwind Breakpoints

```typescript
// Mobile first approach
<div className="w-full md:w-1/2 lg:w-1/3">
  Content
</div>

// Breakpoints:
// sm: 640px
// md: 768px
// lg: 1024px
// xl: 1280px
// 2xl: 1536px
```

### Example: Responsive Components

```typescript
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {/* 1 column on mobile, 2 on tablet, 3 on desktop */}
</div>

<nav className="flex flex-col md:flex-row items-center">
  {/* Vertical on mobile, horizontal on desktop */}
</nav>
```

---

## 🎯 Best Practices

### ✅ Do

- ✅ Use utility classes directly in JSX
- ✅ Group related utilities
- ✅ Use CSS modules for complex styling
- ✅ Keep globals.css minimal
- ✅ Use `@apply` for reusable class groups
- ✅ Mobile-first approach

### ❌ Don't

- ❌ Use inline styles for styling (only data-driven values)
- ❌ Create unnecessary CSS files
- ❌ Mix approaches (Tailwind + custom CSS)
- ❌ Create `className` strings dynamically (hard to optimize)
- ❌ Override Tailwind defaults without reason

---

## 🔧 Common Patterns

### Button Variants

```typescript
// Use conditional classes
const variants = {
  primary: 'bg-blue-500 text-white hover:bg-blue-600',
  secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300',
  danger: 'bg-red-500 text-white hover:bg-red-600',
};

<button className={`px-4 py-2 rounded ${variants.primary}`}>
  Click me
</button>
```

### Card Component

```typescript
<div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
  <h3 className="text-lg font-semibold mb-2">Title</h3>
  <p className="text-gray-600">Description</p>
</div>
```

### Flex Layout

```typescript
// Center content
<div className="flex items-center justify-center h-screen">
  Content
</div>

// Sidebar layout
<div className="flex gap-4">
  <aside className="w-64">Sidebar</aside>
  <main className="flex-1">Content</main>
</div>
```

### Grid Layout

```typescript
// Responsive grid
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {items.map(item => <Item key={item.id} {...item} />)}
</div>
```

---

## 🎭 Dark Mode (Future)

When implementing dark mode:

```typescript
// tailwind.config.js
export default {
  darkMode: 'class',
  // ...
};

// Use dark: prefix
<div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
  Content
</div>
```

---

**Last Updated**: April 2026
