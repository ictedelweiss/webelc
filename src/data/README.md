# 📱 src/data Folder

Lokasi untuk static data, JSON files, dan mock data.

## 📋 Current Files

- `articles.json` - Static/cached articles data

## 📝 Guidelines

### When to Use

✅ **Use for**:
- Static content yang jarang berubah
- Fallback data ketika API down
- Development/testing data
- Configuration yang tidak sensitif

❌ **Don't use for**:
- User-specific data
- Sensitive information (API keys, passwords)
- Large datasets (> 1MB)
- Real-time data

### JSON Files

```typescript
// ✅ Good - Properly typed
import articlesData from '@/data/articles.json';
const articles: Article[] = articlesData;

// ❌ Avoid - No type safety
const articles = require('./articles.json');
```

### Fallback Pattern

```typescript
export async function getArticles(): Promise<Article[]> {
  try {
    // Try API first
    const response = await fetchArticles();
    if (response.status === 'success') {
      return response.data;
    }
  } catch (error) {
    logError(error, 'getArticles');
  }

  // Fallback to local data
  return articlesData;
}
```

---

**Last Updated**: April 2026
