# The Streets Chicago

Marketing site for The Streets Chicago roleplay community, hosted on Netlify.

## Run & Operate

- `pnpm install` — install dependencies (pnpm is required)
- `pnpm --filter @workspace/windy-city run dev` — run the site locally (Vite, defaults to port 5173; override with `PORT`)
- `netlify dev` — run the site plus Netlify Functions locally
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm run db:generate --name <change>` — generate a Netlify Database migration after editing `db/schema.ts`

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React + Vite + Tailwind (`artifacts/windy-city`), deployed as a static SPA
- API: Netlify Functions (`netlify/functions`)
- DB: Netlify Database (managed Postgres) + Drizzle ORM
- API codegen: Orval (from OpenAPI spec)

## Where things live

- `artifacts/windy-city` — the public website (build output: `dist/public`)
- `artifacts/mockup-sandbox` — standalone component preview sandbox (not deployed)
- `netlify/functions` — serverless API routes (e.g. `GET /api/healthz`)
- `db/schema.ts` — database schema; migrations go to `netlify/database/migrations` and are applied automatically on deploy
- `lib/api-spec` — OpenAPI contract; `lib/api-zod` and `lib/api-client-react` are generated from it
- `netlify.toml` — build command, publish directory, SPA fallback
