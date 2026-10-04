import { Hono } from "hono";

const app = new Hono();

app.get("/healthz", (context) => context.json({ status: "ok" }));

const port = Number(Bun.env.PORT ?? 3001);

Bun.serve({
  port,
  fetch: app.fetch,
});

console.info(`Chicane API listening on http://localhost:${port}`);
