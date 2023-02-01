import { z } from "zod";

export const getPaginated = z.object({
  limit: z.number().min(1).max(100).optional(),
  cursor: z.string().optional(),
});
