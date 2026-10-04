# Agent instructions

## Repository status
- This repository currently has no application code, manifests, scripts, CI, or README; no developer commands are verified yet. Once added, follow the repo's executable config and scripts rather than guessing commands from the plan.

## Agreed target (not implemented yet)
- Planned monorepo: Bun workspaces with `apps/web` (Next.js UI) and `apps/api` (Hono on Bun); no shared package initially.
- API is REST with OpenAPI generated from `@hono/zod-openapi` routes. The web client consumes generated types via `openapi-typescript` and `openapi-fetch`; do not introduce tRPC.
- Better Auth owns Postgres schema `auth`; Kysely app tables and `kysely-ctl` migrations belong in schema `chicane`.
- MVP progression is a prerequisite graph: three shared trunk nodes, then two AC Evo nodes and two AC Rally nodes. Both branches unlock after the trunk and can be switched freely; each node has 4–5 lessons and a checkpoint. Include one simple slider-with-visual exercise; defer XP, streaks, hearts, crowns, skill decay, and leagues until the learning loop works.
