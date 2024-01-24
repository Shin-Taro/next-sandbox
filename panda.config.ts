import { keyframes } from "@/shared/styles/keyframes"
import { defineConfig } from "@pandacss/dev"

export default defineConfig({
  preflight: true,

  include: ["./src/**/*.{js,jsx,ts,tsx}"],

  exclude: [],

  emitPackage: true,

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
