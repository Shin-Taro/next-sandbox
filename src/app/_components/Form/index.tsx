import { fetchUser } from "@/domains/User/modules/fetchUser"
import { FC } from "react"
import { FormView } from "./View"

const DummyUserId = "11111"

export const Form: FC = async () => {
  const user = await fetchUser(DummyUserId)
  return <FormView {...user} />
}
