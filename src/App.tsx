import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Edit from "./routes/edit"
import ErrorPage from "./routes/error-page"
import Index from "./routes/index"

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Index />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/edit",
      element: <Edit />,
    },
  ],
  {
    basename: "/lowcoder", // 设置基础路径为 /lowcoder
  }
)

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
