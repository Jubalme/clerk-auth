import{
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom"
import Home from "./components/Home"
import Dashboard from "./components/Dashboard"

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
  <Route path="/" element={<Home />}  />
  <Route path="/dashboard" element={<Dashboard />}  />
    </>
  )
)

function App() {


  return (
    <>
  <RouterProvider router={router} />
    </>
  )
}

export default App
