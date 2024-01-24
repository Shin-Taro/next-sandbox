import { keyframes } from "@/shared/styles/keyframes"
import { defineConfig } from "@pandacss/dev"

export default defineConfig({
  preflight: true,
  include: ["./src/**/*.{js,jsx,ts,tsx}"],
  exclude: [],
  outdir: "styled-system",
  emitPackage: true,
  importMap: {
    css: "styled-system/css",
    recipes: "styled-system/recipes",
    patterns: "styled-system/patterns",
    jsx: "styled-system/jsx",
  },

  globalCss: {
    "*": {
      boxSizing: "border-box",
    },
  },

  theme: {
    extend: {
      keyframes: {
        ...keyframes,
      },
    },

    tokens: {
      colors: {
        white: { value: "#FFFFFF" },
        overlay: { value: "rgba(0, 0, 0, 0.5)" },
      },
    },
  },
})
