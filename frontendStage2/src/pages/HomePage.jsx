import React from 'react';
// import '../style/HomePage.css';
// import ContactUsForm from '../components/ContactUsForm';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/dist/util";
import "bootstrap/js/dist/dropdown";
import "bootstrap/dist/js/bootstrap";
import Slideshow from '../components/SlideShow';
import Feedback from 'react-bootstrap/esm/Feedback';
import Hero from '../components/Hero';
//import logo from "./logo.jpeg";
// import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <>
    <Hero/>
    <h1 className=' fw-bolder 'style={{fontSize:"50px"}}>OUR GALLARY</h1>
    <Slideshow/>
    
    
    </>
  );
}

export default HomePage;
