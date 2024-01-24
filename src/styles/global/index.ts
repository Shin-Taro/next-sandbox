import { Config } from "@pandacss/dev"

/**
 * @public
 */
export const globalCss: Config["globalCss"] = {
  "*": {
    boxSizing: "border-box",
  },
  html: {
    fontSize: "62.5%",
  },
}
