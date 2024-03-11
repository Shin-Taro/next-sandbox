"use server"

import { UserSchema } from "@/domains/User/schema"
import { ActionsResponse } from "@/shared/types/ActionsResponse"

export const putUserAction = async (_: ActionsResponse, formData: FormData): Promise<ActionsResponse> => {
  const rawUserData = {
    id: formData.get("id"),
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    address: {
      postalCode: formData.get("postalCode"),
      prefecture: formData.get("prefecture"),
      city: formData.get("city"),
      street: formData.get("street"),
    },
  }

  const parsedUserData = UserSchema.safeParse(rawUserData)

  if (!parsedUserData.success) {
    return {
      isSuccess: false,
      messages: [...parsedUserData.error.errors.map((error) => `${error.path.at(-1)}: ${error.message}`)],
    }
  }
  return { isSuccess: true, messages: [] }
}
