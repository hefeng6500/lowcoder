import react from "@vitejs/plugin-react"
import path from "path"
import { defineConfig } from "vite"
import svgrPlugin from "vite-plugin-svgr"

const resolve = (val: string) => path.resolve(__dirname, val)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgrPlugin({
      svgrOptions: {
        prettier: false,
        svgo: false,
        titleProp: true,
        ref: true,
      },
    }),
  ],

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
