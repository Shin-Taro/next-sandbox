import { FC } from "react"
import { css } from "styled-system/css"

/**
 * @public
 */
export const Header: FC = () => (
  <header className={headerCss}>
    <h1>Header</h1>
  </header>
)

const headerCss = css({
  fontSize: "3.8rem",
  textAlign: "center",
  paddingBlock: "20px",
  borderBottom: "2px solid #ccc",
})
