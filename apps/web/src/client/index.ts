import type { AppRouter } from "@packages/api";
import { createTRPCProxyClient, createTRPCSolid, httpBatchLink } from "solid-trpc";

const trpc = createTRPCSolid<AppRouter>();

export function getTrpcUrl() {
  if (typeof window !== "undefined")
    // browser should use relative path
    return "/api/trpc";
  if (import.meta.env.VERCEL_URL)
    // reference for vercel.com
    return `https://${import.meta.env.VERCEL_URL}/api/trpc`;
  // assume localhost
  return `http://localhost:3000/api/trpc`;
}
const trpcAstro = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: getTrpcUrl(),
    }),
  ],
});

const client = trpc.createClient({
  links: [
    httpBatchLink({
      url: getTrpcUrl(),
    }),
  ],
});

export { client, trpc, trpcAstro };
