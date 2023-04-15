import { QueryClient } from "@tanstack/solid-query";
import type { JSXElement } from "solid-js";
import { client, trpc } from "../client";

export const queryClient = new QueryClient();

const TrpcProvider = (props: { children: JSXElement }) => {
  return (
    <trpc.Provider client={client} queryClient={queryClient}>
      {props.children}
    </trpc.Provider>
  );
};

export default TrpcProvider;
