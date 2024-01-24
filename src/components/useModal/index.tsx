import { useState } from "react"

import { Modal } from "./components/Modal"

import type { FcWithChildren } from "../../types/react"

type ReturnValue = {
  ModalWrapper: FcWithChildren
  handleOpenModal: () => void
  handleCloseModal: () => void
}

type Parameters = {
  portalTarget?: HTMLElement
  backgroundScrollArea?: HTMLElement
}

type UseModal = (parameters?: Parameters) => ReturnValue

/**
 * @param parameters -
 *  portalTarget - createPortalに渡すための構造上の親要素、defaultは#__next
 *
 *  backgroundScrollArea - modal表示中にスクロールを無効にしたい要素、defaultはbody
 * @returns \{ ModalWrapper, handleCloseModal, handleOpenModal \}
 *  ModalWrapper - 受け取ったchildrenの表示非表示を切り替えるcomponent、このcomponent自体は見た目を持たない
 *
 *  handleCloseModal - 実行するとModalWrapperを非表示にする
 *
 *  handleOpenModal - 実行するとModalWrapperを表示する
 */
export const useModal: UseModal = (parameters = {}) => {
  const { portalTarget, backgroundScrollArea } = parameters
  const [isOpen, setIsOpen] = useState(false)

  const handleOpenModal = () => {
    setIsOpen(true)
  }
  const handleCloseModal = () => {
    setIsOpen(false)
  }

  const ModalProps = {
    backgroundScrollArea,
    handleCloseModal,
    isOpen,
    portalTarget,
  }

  const ModalWrapper: FcWithChildren = ({ children }) => (
    <Modal {...ModalProps}>{children}</Modal>
  )

  return { ModalWrapper, handleCloseModal, handleOpenModal }
}
