import superjson from "superjson";
import type { AppRouter } from "@packages/api";
import { createTRPCProxyClient, createTRPCSolid, httpBatchLink } from "solid-trpc";

const trpc = createTRPCSolid<AppRouter>();

const getBaseUrl = () => {
  return import.meta.env.SERVER_URL;
};

const trpcAstro = createTRPCProxyClient<AppRouter>({
  transformer: superjson,
  links: [
    httpBatchLink({
      url: "/api/trpc",
    }),
  ],
});

const client = trpc.createClient({
  transformer: superjson,
  links: [
    httpBatchLink({
      url: "http://localhost:3000/api/trpc",
    }),
  ],
});

export { client, trpc, trpcAstro };
