import { createTRPCRouter, protectedProcedure } from "../trpc";

import { CreateHouseInput } from "../../../types/inputTypes";
import type { House } from "@prisma/client";

export const propertyRouter = createTRPCRouter({
  createHouse: protectedProcedure
    .input(CreateHouseInput)
    .mutation(async ({ ctx, input }) => {
      const result: {
        created: boolean;
        house: House | undefined;
        error: Record<string, unknown>;
      } = {
        created: false,
        house: undefined,
        error: {},
      };
      try {
        const metaData = {
          updatedAt: new Date(),
          createdAt: new Date(),
          createdBy: ctx.session.user.id,
          updatedBy: ctx.session.user.id,
          isInTrash: false,
          isDeleted: false,
        };
        const newHouse = await ctx.prisma.house.create({
          data: {
            ...input,
            propertyData: {
              ...input.propertyData,
              propertyType: "HOUSE",
            },
            metadata: metaData,
          },
        });
        result.created = true;
        result.house = newHouse;
      } catch (error) {
        result.error = {
          message: error,
        };
      }
      return result;
    }),
});
