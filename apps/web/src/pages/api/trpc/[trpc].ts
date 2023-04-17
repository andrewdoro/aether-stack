import type { APIRoute } from "astro";
import { appRouter, createTRPCContext, fetchRequestHandler } from "@packages/api";

export const all: APIRoute = ({ request }) => {
  return fetchRequestHandler({
    endpoint: "/api/trpc",
    req: request,
    router: appRouter,
    createContext: createTRPCContext,
    responseMeta: ({ ctx, type, errors }) => {
      // checking that no procedures errored
      const allOk = errors.length === 0;
      // checking we're doing a query request
      const isQuery = type === "query";
      if (ctx?.resHeaders && allOk && isQuery) {
        // cache request for 1 day + revalidate once every second
        const ONE_DAY_IN_SECONDS = 60 * 60 * 24;
        return {
          headers: {
            "cache-control": `s-maxage=1, stale-while-revalidate=${ONE_DAY_IN_SECONDS}`,
          },
        };
      }
      return {};
    },
  });
};
