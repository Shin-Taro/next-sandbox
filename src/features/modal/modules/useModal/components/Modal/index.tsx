import { createPortal } from "react-dom"

import { useElement, useHandleEscapeKey, useToggleScrollable } from "./modules"
import { FcWithChildren } from "@/types/FcWithChildren"

type Props = {
  isOpen: boolean
  handleCloseModal: () => void
  portalTarget?: HTMLElement
  backgroundScrollArea?: HTMLElement
}

export const Modal: FcWithChildren<Props> = (props) => {
  const { isOpen, handleCloseModal, portalTarget, backgroundScrollArea, children } = props

  useHandleEscapeKey(handleCloseModal)

  useToggleScrollable(!isOpen, backgroundScrollArea)

  const element = useElement(portalTarget)

  if (!isOpen || !element) return null
  return createPortal(children, element)
}
