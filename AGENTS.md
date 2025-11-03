# Repository Guidelines

## Project Structure & Module Organization
The site is built with Astro and deploys through Cloudflare Workers. Author content lives in `src/content`, layouts in `src/layouts`, and routed pages—including Markdown-powered entries—under `src/pages`. Static assets such as images and fonts belong in `public`. Shared configuration is centralized in `astro.config.mjs` and deployment settings in `wrangler.jsonc`; keep both files in sync when introducing new integrations.

## Build, Test, and Development Commands
Install dependencies with `pnpm install` (pnpm is required because of the lockfile). Use `pnpm dev` to start the Astro dev server with hot reload, `pnpm build` for a production bundle inside `dist/`, and `pnpm preview` to smoke-test the build locally. For targeted framework tasks, `pnpm astro check` validates content collections and TypeScript, while `pnpm wrangler deploy` (Cloudflare credentials required) publishes the latest build.

## Coding Style & Naming Conventions
Follow Astro defaults: two-space indentation, ES module syntax, and descriptive component names (`HeroBanner.astro`, `post-title.md`). Keep Markdown frontmatter minimal and typed via collection schemas, and colocate page-specific styles within the same `.astro` file. Prefer named exports for utilities and avoid implicit globals; when adding scripts, opt into TypeScript for static guarantees.

## Testing Guidelines
Automated testing is not yet configured, so rely on `pnpm astro check` and a full `pnpm build && pnpm preview` run before raising a pull request. Validate Cloudflare-specific behaviour with `wrangler dev` if your change touches edge APIs, and capture console output or screenshots for UI regressions. When adding tests in the future, mirror the `src/` tree and use descriptive filenames (`about.test.ts`) beside the code under test.

## Commit & Pull Request Guidelines
Commits follow conventional formatting—short, imperative subject with a type prefix (`feat:`, `fix:`, `chore:`). Group related edits together and avoid mixed concerns. For pull requests, supply a concise summary, note verification steps (commands run, screenshots for visual updates), and reference any tracking issues. Ensure branch names reflect the change intent (`feature/blog-pagination` or `fix/header-spacing`) to keep Git history navigable.

## Deployment & Environment Notes
Cloudflare deployment reads configuration from `wrangler.jsonc`; update route bindings or environment variables there. Secrets must be added via `wrangler secret put` rather than committing `.env` files. After deploying, verify the worker in the Cloudflare dashboard and rerun `pnpm preview` to reproduce any reported issues locally.
