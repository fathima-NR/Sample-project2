import React from 'react';
import { Carousel } from 'react-bootstrap';
import './imagecarousal.css';
import carosalimg1 from "/src/assets/istockphoto-1028082274-1024x1024.jpg"
import carosalimg2 from "/src/assets/istockphoto-1488521147-1024x1024.jpg"
function Imagecarousal() {
  return (
    <Carousel fade interval={3000} controls={true} indicators={true} Loop={true}>
    
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image "
          src={carosalimg1}
          alt="First slide"
        />
        <Carousel.Caption className="carousel-caption"style={{position:'absolute',top:"30%"}}>
          <h3>Techcybe</h3>
          <p className=' fw-bolder'>HIGHLY INFLUENTSED WITH OFFERING IT SOLUTION FOR SMALL, MEDIUM AND COMPLEX ENTERPRISES</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image  "
          src={carosalimg2}
          alt="Second slide"
        />
        <Carousel.Caption className="carousel-caption"style={{position:'absolute',top:"30%"}}>
          <h3>Techcybe</h3>
          <p className=' fw-bolder'>REDEFINING THE WAY ORGANIZATIONS BENEFIT FROM OUR SERVICES AND SOLUTION</p>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  );
}

export default Imagecarousal;
