import { useEffect, useState } from "react"

type UseElement = (target?: HTMLElement) => HTMLElement | null

export const useElement: UseElement = (target) => {
  const [element, setElement] = useState<HTMLElement | null>(null)

  useEffect(() => {
    // defaultのレンダリング先をrootにするためquerySelectorを使用
    const temporary = target || document.querySelector<HTMLElement>("#__next")
    setElement(temporary)
  }, [target])

  return element
}
