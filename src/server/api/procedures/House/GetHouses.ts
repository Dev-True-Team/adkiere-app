import type { House } from "@prisma/client";
import { getPaginated } from "types/inputs/general";
import { publicProcedure } from "../../trpc";

type result = {
  houses: House[];
  total: number;
  nextCursor?: string;
  errors?: Record<string, unknown>;
};

export const getHousesQuery = publicProcedure
  .input(getPaginated)
  .query(async ({ ctx, input }) => {
    const result: result = {
      houses: [],
      total: 0,
      nextCursor: undefined,
    };
    try {
      const limit = input.limit ?? 50;
      const houses = await ctx.prisma.house.findMany({

        take: limit + 1,
        cursor: input.cursor ? { id: input.cursor } : undefined,
        orderBy: {
          metadata: {
            createdAt: "desc",
          },
        },
      });
      const total = await ctx.prisma.house.count();
      const nextCursor = houses.length > limit ? houses.pop()?.id : undefined;
      result.houses = houses;
      result.total = total;
      result.nextCursor = nextCursor;
    } catch (error) {
      result.errors = {
        message: error,
      };
    }
    return result;
  });
