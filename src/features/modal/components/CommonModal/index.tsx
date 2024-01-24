import { FC } from "react"
import { useModal } from "../../modules/useModal"
import { css } from "styled-system/css"

/**
 * @public
 */
export const CommonModal: FC = () => {
  const { ModalWrapper, handleCloseModal, handleOpenModal } = useModal()
  const { ModalWrapper: ModalWrapper2, handleCloseModal: handleCloseModal2, handleOpenModal: handleOpenModal2 } = useModal()

  return (
    <>
      <ModalWrapper>
        <div className={overlay}>
          <div className={dialog}>
            <h1>CommonModal</h1>
            <button className={button} onClick={handleCloseModal}>
              close
            </button>
            <button className={button} onClick={handleOpenModal2}>
              open
            </button>
            <ModalWrapper2>
              <div className={overlay}>
                <div className={dialog}>
                  <h1>CommonModal2</h1>
                  <button className={button} onClick={handleCloseModal2}>
                    close
                  </button>
                </div>
              </div>
            </ModalWrapper2>
          </div>
        </div>
      </ModalWrapper>
      <button className={button} onClick={handleOpenModal}>
        open
      </button>
    </>
  )
}

const overlay = css({
  position: "fixed",
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  backgroundColor: "overlay",
  display: "grid",
  placeItems: "center",
})

const dialog = css({
  width: "50vw",
  height: "50vh",
  minWidth: "300px",
  backgroundColor: "white",
  animation: "scaleUp 200ms",
})

const button = css({
  fontSize: "1.5rem",
  padding: "5px 10px",
  backgroundColor: "white",
  border: "1px solid #ccc",
  borderRadius: "5px",
  cursor: "pointer",
})
