"use client"

import { FC } from "react"
import { useFormStatus } from "react-dom"

export const SubmitButton: FC = () => {
  const { pending } = useFormStatus()
  return pending ? (
    <span>Submitting...</span>
  ) : (
    <button type="submit" className="w-full rounded-3xl border border-sub p-4 shadow-dropMain hover:scale-105 hover:opacity-75">
      Submit
    </button>
  )
}
