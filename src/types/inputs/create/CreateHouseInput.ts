import { HouseType, PropertyStatus } from "@prisma/client";
import { z } from "zod";

export const CreateHouseInput = z.object({
  propertyData: z.object({
    title: z.string(),
    description: z.string(),
    price: z.number(),
    location: z.object({
      country: z.string(),
      state: z.string(),
      city: z.string().optional(),
      neighborhood: z.string().optional(),
      street: z.string().optional(),
      zipCode: z.string().optional(),
      latitude: z.number().optional(),
      longitude: z.number().optional(),
    }),
    propertyStatus: z.nativeEnum(PropertyStatus),
    totalRods: z.number(),
    totalConstructionRods: z.number(),
    totalMeters: z.number(),
    totalConstructionMeters: z.number(),
  }),
  housingData: z.object({
    bedrooms: z.number(),
    bathrooms: z.number(),
    floors: z.number(),
    year: z.number().optional(),
    remodeled: z.number().optional(),
    cistern: z.boolean(),
    water: z.boolean(),
    electricity: z.boolean(),
    gas: z.boolean(),
    furnished: z.boolean(),
    terrace: z.boolean(),
  }),
  garage: z.boolean(),
  pool: z.boolean(),
  garden: z.boolean(),
  houseType: z.nativeEnum(HouseType),
});
