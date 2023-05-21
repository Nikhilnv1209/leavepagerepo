import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import Apply from "./pages/Apply"
import './App.css'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/leaveapply',
    element: <Apply/>,
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
