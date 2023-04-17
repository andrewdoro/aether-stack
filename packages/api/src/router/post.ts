import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";

export const postRouter = createTRPCRouter({
  all: publicProcedure.query(({ ctx }) => {
    return ctx.db.selectFrom("Post").selectAll().execute();
  }),
  byId: publicProcedure.input(z.object({ id: z.string() })).query(({ ctx, input }) => {
    return ctx.db.selectFrom("Post").where("Post.id", "=", input.id).executeTakeFirst();
  }),
  create: publicProcedure
    .input(
      z.object({
        title: z.string().min(1),
        content: z.string().min(1),
      })
    )
    .mutation(({ ctx, input }) => {
      return ctx.db
        .insertInto("Post")
        .values({ ...input, id: "something" })
        .execute();
    }),
  delete: publicProcedure.input(z.string()).mutation(({ ctx, input }) => {
    return ctx.db.deleteFrom("Post").where("Post.id", "=", input).executeTakeFirst();
  }),
});
