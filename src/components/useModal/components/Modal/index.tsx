import { createPortal } from "react-dom"

import { useElement } from "./modules/useElement"
import { useHandleEscapeKey } from "./modules/useHandleEscapeKey"
import { useToggleScrollable } from "./modules/useToggleScrollable"

import type { FcWithChildren } from "../../../../types/react"

type Props = {
  isOpen: boolean
  handleCloseModal: () => void
  portalTarget?: HTMLElement
  backgroundScrollArea?: HTMLElement
}

export const Modal: FcWithChildren<Props> = (props) => {
  const {
    isOpen,
    handleCloseModal,
    portalTarget,
    backgroundScrollArea,
    children,
  } = props

  useHandleEscapeKey(handleCloseModal)

  useToggleScrollable(!isOpen, backgroundScrollArea)

  const element = useElement(portalTarget)

  if (!isOpen || !element) return null
  return createPortal(children, element)
}
