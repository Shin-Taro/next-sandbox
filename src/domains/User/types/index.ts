import { z } from "zod"
import { UserSchema } from "../schema"

/**
 * @public
 */
export type User = z.infer<typeof UserSchema>
