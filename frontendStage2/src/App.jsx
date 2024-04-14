import React, { useState } from 'react'
import Navbar from './components/Navbar'
import {BrowserRouter , Route,Routes} from "react-router-dom"
// import Home from './pages/Home'
import ContactUs from './pages/ContactUs'
import FeedbackCard from './components/FeedbackCard'
import Saving from "../src/pages/courses/Saving"
import Budget from "../src/pages/courses/Budget"
import Trade from "../src/pages/courses/Trade"
import About from './pages/About'
import Login from './pages/login'
import Sign from './pages/sign'
import Courses from './pages/Courses'
import HomePage from './pages/HomePage'
import ProfilePage from './pages/ProfilePage'
import Footer from './components/Footer'


function App() {
  const [isLoggedIn,setIsLoggedIn]=useState(false);

  return (
    <>
    <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<HomePage />}></Route>
    <Route path='/login' element={<Login  setIsLoggedIn={setIsLoggedIn}/>}></Route>
    <Route path='/sign' element={<Sign/>}></Route>
   
    <Route path='/contact' element={<ContactUs/>}></Route>
    <Route path='/courses' element={<Courses/>}></Route>
    <Route path='/courses/saving' element={<Saving/>}></Route>
    <Route path='/courses/budget' element={<Budget/>}></Route>
    <Route path='/courses/trade' element={<Trade/>}></Route>

   

    <Route path='/about' element={<About/>}></Route>
    <Route path='/profile' element={<ProfilePage/>}></Route>

    

   </Routes>
   </BrowserRouter>
   <Footer/>
     </>
    
  )
}

export default App
