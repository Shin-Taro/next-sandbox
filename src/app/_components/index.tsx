import { FC } from "react"
import { Form } from "./Form"

export const Template: FC = () => (
  <section className="mx-auto w-4/5">
    <h2 className="text-second">Edit User Profile</h2>
    <div className="mt-24">
      <Form />
    </div>
  </section>
)
