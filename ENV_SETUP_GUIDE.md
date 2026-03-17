# Environment Variables untuk Deployment

## Local Development (.env.local)

```
NEXT_PUBLIC_ENVIRONMENT=development
NEXT_PUBLIC_API_URL=http://localhost:3000
```

## Production (.env.production)

```
NEXT_PUBLIC_ENVIRONMENT=production
NEXT_PUBLIC_API_URL=https://elc-baru.pages.dev
```

## Cloudflare Pages Environment Variables

Untuk menambahkan environment variables di Cloudflare Pages:

1. Go to Pages Project > Settings > Environment
2. Tambahkan production variables:
   - `NODE_ENV`: `production`
   - `NEXT_PUBLIC_ENVIRONMENT`: `production`

## GitHub Secrets untuk Automated Deployment

Untuk setup CI/CD dengan GitHub Actions, tambahkan secrets berikut di:
https://github.com/YOUR_USERNAME/elc-baru/settings/secrets/actions

```
CLOUDFLARE_API_TOKEN
CLOUDFLARE_ACCOUNT_ID
```

### Cara Mendapatkan Values:

1. **CLOUDFLARE_API_TOKEN**:
   - Login ke https://dash.cloudflare.com
   - Go to Account Settings > API Tokens
   - Create Token dengan permissions: Pages (Edit)
   - Copy token

2. **CLOUDFLARE_ACCOUNT_ID**:
   - Di dashboard Cloudflare, lihat sidebar
   - Account ID terlihat di URL atau Settings

### Contoh Setup di GitHub:

1. Buka repository settings
2. Go to Secrets and variables > Actions
3. Klik "New repository secret"
4. Tambahkan masing-masing secret

## Verifikasi Build Lokal

Sebelum push, test build lokal:

```bash
npm run build
npm run start
```

Jika build berhasil dan site berjalan, siap untuk push.

## Notes

- Jangan commit file `.env.local`
- Selalu gunakan environment variables untuk sensitive data
- Update `.env.production` sesuai dengan production domain Anda
