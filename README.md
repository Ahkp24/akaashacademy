# Akaash Academy

> Strategy over guesswork. — Premium student-led SAT & ACT prep platform.

## Stack

- React + Vite + TypeScript
- Tailwind CSS v3
- React Router v6
- GSAP (animations)
- Vanilla Tilt (hover 3D)
- Three.js / R3F (3D scenes)
- shadcn/ui (component primitives)

## Fonts

| Role     | Font       |
|----------|------------|
| Headings | Bebas Neue |
| Body     | DM Sans    |

## Colors

| Token      | Hex       |
|------------|-----------|
| Background | `#000000` |
| Text       | `#FFFFFF` |
| Accent     | `#FF0000` |

---

## Dev

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Preview production build locally:

```bash
npm run preview
```

---

## GitHub Pages Deploy

1. Push to `main` — GitHub Actions auto-deploys via `.github/workflows/deploy.yml`
2. Go to repo **Settings → Pages → Source → GitHub Actions**

### Custom domain (Cloudflare)

1. Set `base: "/"` in `vite.config.ts` (already set)
2. Add `CNAME` file in `/public/` with your domain:
   ```
   yourdomain.com
   ```
3. Point Cloudflare DNS to GitHub Pages IPs:
   ```
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```
4. Enable **Full (strict)** SSL in Cloudflare

---

## Project Structure

```
src/
├── pages/
│   ├── Home.tsx
│   ├── SAT.tsx
│   ├── ACT.tsx
│   ├── Arena.tsx
│   └── About.tsx
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── SectionTitle.tsx
│   └── Card.tsx
├── hooks/
│   ├── useInView.ts
│   ├── useParallax.ts
│   └── useTilt.ts
└── lib/
    └── utils.ts
```

## Routes

| Path     | Page          |
|----------|---------------|
| `/`      | Home          |
| `/sat`   | SAT           |
| `/act`   | ACT           |
| `/arena` | Akaash Arena  |
| `/about` | About         |
