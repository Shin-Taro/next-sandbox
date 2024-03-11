"use client"

import { FC } from "react"
import { User } from "@/domains/User/types"
import { convertUserToFormItems } from "./convertUserToFormItems"
import { putUserAction } from "./putUserAction"
import { SubmitButton } from "../SubmitButton"
import { useFormState } from "react-dom"

const InitialResponse = { isSuccess: false, messages: [] }

export const FormView: FC<User> = (props) => {
  const formItems = convertUserToFormItems(props)

  const [state, formAction] = useFormState(putUserAction, InitialResponse)

  return state.isSuccess ? (
    <p className="text-main">User Profile Edit is Success!!</p>
  ) : (
    <>
      <ul className="pb-20">
        {state.messages.map((message) => (
          <li key={message} className="mt-10 text-accent">
            {message}
          </li>
        ))}
      </ul>
      <form action={formAction}>
        <div className="flex flex-col gap-10">
          {formItems.map((item) => (
            <label key={item.name} className="flex justify-center gap-10">
              <span className="block w-1/4">{item.label}</span>
              <input type="text" name={item.name} defaultValue={item.value} className="rounded-lg border border-sub px-6 py-2" />
            </label>
          ))}
        </div>
        <input type="hidden" name="id" value={props.id} />
        <div className="mx-auto mt-24 grid w-48 items-center">
          <SubmitButton />
        </div>
      </form>
    </>
  )
}
