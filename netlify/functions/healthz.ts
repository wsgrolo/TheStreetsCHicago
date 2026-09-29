import type { Config } from "@netlify/functions";

// Replaces the Replit-hosted Express server's GET /api/healthz route.
export default async () => {
  return Response.json({ status: "ok" });
};

export const config: Config = {
  path: "/api/healthz",
};
