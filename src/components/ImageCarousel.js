
import { Carousel, Col } from 'react-bootstrap';
import { Context } from "../routes/about-me"
import {  useContext, useState, useEffect } from "react";


 
export const ImageCarousel = () => {

    const { key } = useContext(Context);
  
      
    const index = ( key === 0 ? "active" : "unactive")
    console.log(key)
    console.log(index)


 
    return (
        <Col>
        <h2>the key is {key} </h2>
 
        <Carousel 
            variant="dark" 
            interval={null} 
            controls={false} 
            indicators={false} 
            activeIndex={ key }
            >
    
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={require("../images/hobby-image.PNG")}
                alt="First slide"
                />
                <Carousel.Caption >
                <h3 className="text-success">First slide label</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item >
                <img
                className="d-block w-100"
                src={require("../images/hobby-image.PNG")}
                alt="Second slide"
                />
                <Carousel.Caption>
                <h3 className="text-success">Second slide label</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item >
                <img
                className="d-block w-100"
                src={require("../images/hobby-image.PNG")}
                alt="Third slide"
                />
                <Carousel.Caption>
                <h3 className="text-success">Third slide label</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </Col>
    )
}

