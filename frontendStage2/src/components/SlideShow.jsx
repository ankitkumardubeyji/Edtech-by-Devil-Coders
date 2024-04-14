import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/dist/util";
import "bootstrap/js/dist/dropdown";
import "bootstrap/dist/js/bootstrap";
import { Carousel } from 'react-bootstrap';

import OT1 from "../images/img1.jpg";
import OT2 from "../images/img2.jpg";
import OT3 from "../images/img3.jpg";
import OT4 from "../images/img4.jpg";
import OT5 from "../images/img5.jpg";


const Slideshow = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="slideshow m-4 overflow-hidden h-75">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img className="d-block w-75 mx-5" src={OT1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-75 mx-5" src={OT2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-75 mx-5" src={OT3} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-75 mx-5" src={OT4} alt="Fourth slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-75 mx-5" src={OT5} alt="Fifth slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slideshow;
