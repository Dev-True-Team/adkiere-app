import { createTRPCRouter } from "../trpc";

import { createHouseMutation, getHousesQuery } from "../procedures/House";

export const HouseRouter = createTRPCRouter({
  createHouse: createHouseMutation,
  getHouses: getHousesQuery,
});
