import { sleep } from "@/shared/modules/sleep"
import { User } from "../../types"

/**
 * @public
 * @param id - User ID
 * @returns User
 */
export const fetchUser = async (id: User["id"]): Promise<User> => {
  const DummyUser: User = {
    id,
    name: "Shin-Taro",
    email: "shin-taro@example.com",
    phone: "000-0000-0000",
    address: {
      postalCode: "9999999",
      prefecture: "Tokyo",
      city: "",
      street: "",
    },
  }

  await sleep(1000)

  return DummyUser
}
