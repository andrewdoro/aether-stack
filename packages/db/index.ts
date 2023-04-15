import { Kysely } from "kysely";
import { PlanetScaleDialect } from "kysely-planetscale";
import { DB } from "./prisma/generated/types";

// Connect using a DATABASE_URL, provide a fetch implementation
const db = new Kysely<DB>({
  dialect: new PlanetScaleDialect({
    host: import.meta.env.DATABASE_HOST,
    username: import.meta.env.DATABASE_USERNAME,
    password: import.meta.env.DATABASE_PASSWORD,
  }),
});
export { db };
