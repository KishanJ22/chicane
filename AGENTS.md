# Agent instructions

## Workspace and commands
- Bun 1.4.2 workspaces are declared at the root: `apps/web` is Next.js; `apps/api` is Hono on Bun. Keep the API and UI as separate apps.
- Run from the repository root: `bun run dev` starts both apps; `bun run dev:web` or `bun run dev:api` starts one app.
- `bun run check` is the verification shortcut and runs Biome lint, TypeScript checks, then both app builds. Use root Biome scripts rather than ESLint.
- Next.js-specific instructions are in `apps/web/AGENTS.md`; read the relevant installed Next docs under `apps/web/node_modules/next/dist/docs/` before using unfamiliar Next APIs.

## Current implementation and target
- The API currently only exposes `GET /healthz`; planned auth, database, and domain routes are not implemented yet.
- Target API is REST with OpenAPI generated from `@hono/zod-openapi` routes. Generate web types with `openapi-typescript` and call through `openapi-fetch`; do not introduce tRPC.
- Better Auth will own Postgres schema `auth`; Kysely app tables and `kysely-ctl` migrations belong in schema `chicane`.
- MVP progression is a prerequisite graph: three shared trunk nodes, then two AC Evo nodes and two AC Rally nodes. Both branches unlock after the trunk and can be switched freely; each node has 4–5 lessons and a checkpoint. Include one simple slider-with-visual exercise; defer XP, streaks, hearts, crowns, skill decay, and leagues until the learning loop works.
