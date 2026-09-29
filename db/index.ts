import { drizzle } from "drizzle-orm/netlify-db";
import * as schema from "./schema.js";

// The connection is configured automatically by Netlify; no DATABASE_URL needed.
export const db = drizzle({ schema });
