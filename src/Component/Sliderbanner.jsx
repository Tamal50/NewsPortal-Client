import React from "react";
import image1 from "../Image/Untitled design (10).png";
import image2 from "../Image/Untitled design (9).png";
import image3 from "../Image/Untitled design (8).png";
import "../Style/Slider.scss";
import { Carousel } from "react-bootstrap";

const Sliderbanner = () => {
  return (
    <div className="Sliderbanner">
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block image"
            src={image1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block image"
            src={image2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block image"
            src={image3}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Sliderbanner;
