import React from 'react';
// import '../style/HomePage.css';
// import ContactUsForm from '../components/ContactUsForm';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/dist/util";
import "bootstrap/js/dist/dropdown";
import "bootstrap/dist/js/bootstrap";
import Slideshow from '../components/SlideShow';
import Feedback from 'react-bootstrap/esm/Feedback';
//import logo from "./logo.jpeg";
// import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <>
    <Slideshow/>
    <div className="d-flex me-2">
      <Feedback/>
      <Feedback/>
      <Feedback/>
      <Feedback/>
      <Feedback/>
    </div>
    </>
  );
}

export default HomePage;
