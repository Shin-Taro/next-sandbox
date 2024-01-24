import { globalCss } from "@/styles/global"
import { keyframes } from "@/styles/keyframes"
import { tokens } from "@/styles/tokens"
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

  // project design customization
  globalCss,
  theme: {
    extend: {
      keyframes,
    },
    tokens,
  },
})
