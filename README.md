# Portfolio — Nguyễn Việt Anh · Frontend Developer

A personal portfolio website built with **Next.js**, **TypeScript**, and **Tailwind CSS**, statically exported and deployed to **GitHub Pages**.

🔗 **Live site:** https://VietAnh31323.github.io/Portfolio_Nguyen_Viet_Anh_Frontend_Developer/

## ✨ Highlights

- ⚡ Next.js 15 (App Router) with full static export (`output: 'export'`)
- 🌐 Bilingual — English / Tiếng Việt toggle, persisted to `localStorage` (client-side i18n that works with static export)
- 🌗 Dark / Light theme toggle — CSS-variable design tokens, respects OS preference, no flash on load (persisted)
- 🎨 Modern dark UI, gradient accents, responsive across all devices
- 🧩 Reusable, typed React components — content driven from a single data file
- 🌀 Scroll-reveal animations via the IntersectionObserver API (respects `prefers-reduced-motion`)
- 📄 Downloadable CV and direct contact links
- 🚀 Automated CI/CD to GitHub Pages via GitHub Actions

## 🛠 Tech stack

| Area        | Tools |
| ----------- | ----- |
| Framework   | Next.js 15, React 19 |
| Language    | TypeScript |
| Styling     | Tailwind CSS |
| Deployment  | GitHub Actions → GitHub Pages |

## 🚀 Getting started

```bash
npm install      # install dependencies
npm run dev      # start dev server at http://localhost:3000
npm run build    # produce static site in ./out
```

## 📁 Structure

```
app/          App Router entry, layout, global styles, favicon
components/    UI sections (Hero, About, Experience, Projects, Skills, …)
lib/          Portfolio content (data.ts) and helpers
public/       Static assets (CV PDF)
.github/      GitHub Actions deploy workflow
```

## ✏️ Editing content

All text — profile, experience, projects, skills, education — lives in
[`lib/data.ts`](lib/data.ts) as a bilingual dictionary (`dict.en` / `dict.vi`),
with language-neutral atoms (contact links, résumé path) in `shared`. Update that
one file and both languages stay in sync. The active language is provided through
[`components/LanguageProvider.tsx`](components/LanguageProvider.tsx) and consumed
via the `useLanguage()` hook.

## 📦 Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the static
export and publishes it to GitHub Pages. The `NEXT_PUBLIC_BASE_PATH` env var is set
automatically from the repository name so asset paths resolve under the project sub-path.

---

© Nguyễn Việt Anh
