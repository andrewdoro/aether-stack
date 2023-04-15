import type { APIRoute } from "astro";
import { appRouter, createTRPCContext, fetchRequestHandler } from "@packages/api";

export const all: APIRoute = ({ request }) => {
  return fetchRequestHandler({
    endpoint: "/api/trpc",
    req: request,
    router: appRouter,
    createContext: createTRPCContext,
  });
};
