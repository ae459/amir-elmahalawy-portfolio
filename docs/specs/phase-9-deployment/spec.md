# Phase 9 — GitHub Pages Deployment & README

## Goal

Deploy the portfolio to GitHub Pages so it is publicly accessible via a live
URL. Write a README that makes the repository easy to evaluate — the live site
link must be immediately visible.

---

## Problem Statement

A portfolio that exists only on a local machine is not a portfolio. The final
deliverable for this assignment is a **live, publicly accessible site** with
a GitHub repo that shows the work clearly.

The README is the first thing a reviewer sees when they open the repo. It must
communicate intent and provide the live link immediately.

---

## Deliverables

- [x] `next.config.ts` — static export configured, `basePath` set for GitHub Pages
- [x] `.github/workflows/deploy.yml` — CI/CD pipeline for GitHub Pages
- [x] `README.md` — project README with live site link prominent at top
- [x] GitHub Pages enabled in repository settings
- [x] Live site accessible at `https://ae459.github.io/amir-elmahalawy-portfolio/`
- [x] All pages load correctly on the live site (no 404s, no broken assets)

---

## GitHub Pages Configuration

### `next.config.ts`

```ts
import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? "/amir-elmahalawy-portfolio" : "",
  assetPrefix: isProd ? "/amir-elmahalawy-portfolio/" : "",
  images: {
    unoptimized: true, // Required for static export
  },
  trailingSlash: true,
};

export default nextConfig;
```

**Why `basePath`:** GitHub Pages serves the site at
`/amir-elmahalawy-portfolio/` (the repo name), not at the root. Without
`basePath`, all internal links will 404.

**Why `images.unoptimized`:** Next.js image optimization requires a server.
Static export cannot use it — all images must be served as-is.

---

## GitHub Actions Workflow

### `.github/workflows/deploy.yml`

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: "20"
          cache: "npm"

      - name: Install dependencies
        run: npm ci

      - name: Type check
        run: npm run typecheck

      - name: Lint
        run: npm run lint

      - name: Build
        run: npm run build

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./out

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

---

## README Structure

````markdown
# Amir E. — AI Forward Engineer Portfolio

> **Live Site:** [https://ae459.github.io/amir-elmahalawy-portfolio/](https://ae459.github.io/amir-elmahalawy-portfolio/)

---

## About This Project

An aspirational professional portfolio built for IS117 (Spring 2026) at NJIT.
This site represents the professional direction I'm building toward as an
AI Forward Engineer.

Built with: Next.js 16 · TypeScript · Tailwind CSS v4 · GitHub Pages

---

## Professional Direction

AI Forward Engineer — designing and building systems where AI is an intentional
architectural component, not an afterthought.

---

## Pages

- **Home** — Identity statement and direction
- **About** — My story, research, and why this direction
- **Projects** — Portfolio work (completed + in progress + concepts)
- **Skills** — Tools, technologies, and workflow
- **Contact** — How to reach me

---

## How I Built This

This portfolio was built using a spec-driven workflow inspired by the professor's
reference repository. Before writing any code, I:

1. Researched the AI Forward Engineer professional path
2. Wrote 9 phase specification documents (in `docs/specs/`)
3. Built each phase against its spec
4. Used AI intentionally — for drafting, image generation, and code assistance —
   while making all architectural and judgment decisions myself

---

## Development

```bash
npm install
npm run dev          # Development server
npm run build        # Static export to ./out
npm run typecheck    # TypeScript check
npm run lint         # ESLint
```
````

---

## Course

IS117 · Professor [Professor Name] · NJIT · Spring 2026

**Reference Repo:**
[kaw393939/nextjs_ai_orchestration_spec_sprint_process](https://github.com/kaw393939/nextjs_ai_orchestration_spec_sprint_process)

```

---

## Deployment Checklist

- [x] `next.config.ts` has `output: 'export'`, `basePath`, `assetPrefix`
- [x] `.github/workflows/deploy.yml` exists and is correctly formatted
- [x] GitHub repository has Pages enabled (Settings → Pages → GitHub Actions)
- [x] First deployment succeeded in GitHub Actions
- [x] Live URL is accessible
- [x] All 5 pages load on live site
- [x] No console errors on live site
- [x] All images load on live site
- [x] Internal navigation works (no 404s)

---

## Quality Gates

- [x] `npm run build` produces `./out` directory
- [x] GitHub Actions workflow runs green
- [x] Live site URL returns the homepage (not a 404)
- [x] README displays the live site link prominently
- [x] All pages accessible via live URL

---

## Notes for AI Workflow

AI was used to:
- Generate the GitHub Actions workflow YAML (reviewed and validated)
- Draft the README structure
- Identify the `basePath` / `assetPrefix` requirement for GitHub Pages

Human judgment was applied to:
- Verifying the workflow runs correctly (not just trusting AI output)
- Writing the README copy in an authentic voice
- Testing the live site manually before submission
```
