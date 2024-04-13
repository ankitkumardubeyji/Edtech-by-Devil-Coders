
import { createBrowserRouter,createRoutesFromElements,RouterProvider } from "react-router-dom"
import Login from "./components/Login"
import Register  from "./components/Register"
import {Route} from "react-router-dom"
import Layout from "./Layout"

function App() {

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element= {<Layout/>}>
        <Route path = 'login' element = {<Login/>}/>
        <Route path = 'register' element = {<Register/>}/>

    </Route>
  )
)


  return (
    <>
      
        <RouterProvider router={router}></RouterProvider>
      
     
    </>
  )
}

export default App
