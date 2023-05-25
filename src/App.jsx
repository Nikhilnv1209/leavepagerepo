import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
// import Apply from "./pages/Apply"
import './App.css'
import { lazy, Suspense } from "react"

const Apply = lazy(() => import("./pages/Apply"))

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/leaveapply',
    element: <Suspense fallback={<div>Loading...</div>}>
      <Apply />
    </Suspense>
  },
  {
    path: "*",
    element: <div>Not Found</div>,
  }
])

function App() {
  return (
    <RouterProvider router={routes}></RouterProvider>
  )
}

export default App
