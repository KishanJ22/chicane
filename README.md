# Chicane

Chicane teaches sim racers how setup changes affect car behaviour through a skill tree for Assetto Corsa Evo and Assetto Corsa Rally.

## Requirements

- Bun 1.4.2 (pinned by the root `package.json`)

## Development

```sh
bun install
bun run dev          # web + API workspaces
bun run dev:web      # Next.js UI only
bun run dev:api      # Hono API only
```

## Verification

```sh
bun run lint
bun run typecheck
bun run build
bun run check       # lint → typecheck → build
```

The web app is in `apps/web`; the Bun/Hono API is in `apps/api`.
