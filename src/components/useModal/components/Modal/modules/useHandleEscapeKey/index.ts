import { useEffect } from "react"

type UseHandleEscapeKey = (callback: () => void) => void

export const useHandleEscapeKey: UseHandleEscapeKey = (callback) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        callback()
      }
    }

    document.body.addEventListener("keydown", handleKeyDown)

    return () => {
      document.body.removeEventListener("keydown", handleKeyDown)
    }
  }, [callback])
}
