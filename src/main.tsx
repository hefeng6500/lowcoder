import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"
import store from "@/store"
import App from "./App.tsx"
import "normalize.css"
import "@/styles/index.scss"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <DndProvider backend={HTML5Backend}>
        <App />
      </DndProvider>
    </Provider>
  </StrictMode>
)
