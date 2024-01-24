import { useEffect } from "react"

import { toggleScrollable } from "./modules"

type UseToggleScrollable = (
  isScrollable: boolean,
  targetElement?: HTMLElement,
) => void

export const useToggleScrollable: UseToggleScrollable = (
  isScrollable,
  targetElement,
) => {
  useEffect(() => {
    // defaultのscroll制御対象をbodyにするためquerySelectorを使用
    const backGroundArea = targetElement || document.querySelector("body")

    if (backGroundArea) {
      toggleScrollable(backGroundArea, isScrollable)
    }
  }, [isScrollable, targetElement])
}
