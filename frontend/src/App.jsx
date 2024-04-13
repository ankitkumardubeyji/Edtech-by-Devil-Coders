import React from 'react'
import Navbar from './components/Navbar'
import {BrowserRouter , Route,Routes} from "react-router-dom"
import Home from './pages/Home'
import ContactUs from './pages/ContactUs'
import FeedbackCard from './pages/FeedbackCard'
import About from './pages/About'

function App() {
  

  return (
    <>
    <Navbar/>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/contact' element={<ContactUs/>}></Route>

    {/* <Route path='feedback/' element={<FeedbackCard/>}></Route> */}

    <Route path='/about' element={<About/>}></Route>

    

   </Routes>
   </BrowserRouter>
     </>
    
  )
}

export default App
