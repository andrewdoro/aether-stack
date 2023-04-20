import type { APIRoute } from "astro";
import { appRouter, createTRPCContext, fetchRequestHandler } from "@packages/api";
import { auth } from "@packages/auth";

export const all: APIRoute = (context) => {
  return fetchRequestHandler({
    endpoint: "/api/trpc",
    req: context.request,
    router: appRouter,
    createContext: (opts) =>
      createTRPCContext({ ...opts, authRequest: auth.handleRequest(context) }),
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
