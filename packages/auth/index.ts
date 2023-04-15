import lucia from "lucia-auth";
import { default as kysely, type KyselyLuciaDatabase } from "@lucia-auth/adapter-kysely";
import { Kysely } from "kysely";
import { PlanetScaleDialect } from "kysely-planetscale";
import { astro } from "lucia-auth/middleware";

// Connect using a DATABASE_URL, provide a fetch implementation
const db = new Kysely<KyselyLuciaDatabase>({
  dialect: new PlanetScaleDialect({
    host: import.meta.env.DATABASE_HOST,
    username: import.meta.env.DATABASE_USERNAME,
    password: import.meta.env.DATABASE_PASSWORD,
  }),
});
const auth = lucia({
  adapter: kysely(db, "mysql2"),
  env: "DEV",
  middleware: astro(),
  transformDatabaseUser: (userData) => {
    return {
      userId: userData.id,
      username: userData.username,
    };
  },
});
export type Auth = typeof auth;
export { auth, PlanetScaleDialect };
