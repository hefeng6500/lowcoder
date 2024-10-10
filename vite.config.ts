import react from "@vitejs/plugin-react"
import path from "path"
import { defineConfig } from "vite"

const resolve = (val: string) => path.resolve(__dirname, val)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      "@": resolve("./src"),
    },
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/variable.scss";`,
      },
    },
  },
})
