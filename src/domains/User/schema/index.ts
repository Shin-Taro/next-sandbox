import { z } from "zod"

/**
 * @public
 */
export const UserSchema = z.object({
  id: z.string().regex(/^\d+$/),
  name: z.string().max(30),
  email: z.string().email(),
  phone: z.string().regex(/^\d{3}-\d{4}-\d{4}$/),
  address: z.object({
    postalCode: z.string().regex(/^\d{7}$/),
    prefecture: z.string().min(1),
    city: z.string().min(1),
    street: z.string().min(1),
  }),
})
