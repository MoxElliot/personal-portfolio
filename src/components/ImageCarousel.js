import { Carousel, Col, Image } from 'react-bootstrap';
import { Context } from "../routes/about-me"
import {  useContext } from "react";


 
export const ImageCarousel = () => {

    const { key } = useContext(Context);
 
    return (
        <Col>
 
        <Carousel 
            variant="dark" 
            interval={null} 
            controls={false} 
            indicators={false} 
            activeIndex={ key }
            >
            <Carousel.Item >
                <Image
                className="d-block  w-100"
                src={require("../images/kintsugi-one.jpg")}
                alt="First slide"
                />
            </Carousel.Item>
        
            <Carousel.Item>
                <Image
                className="d-block w-100"
                src={require("../images/go-one.jfif")}
                alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item >
                <Image
                className="d-block w-100"
                src={require("https://d3ee098cruiy0.cloudfront.net/BWDrive.jpg")}
                alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
        <Carousel 
            variant="dark" 
            interval={null} 
            controls={false} 
            indicators={false} 
            activeIndex={ key }
            className="d-none d-md-block"
            >
    
            <Carousel.Item>
                <img
                className="w-100"
                src={require("../images/kintsugi-two.jpg")}
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item >
                <img
                className=" w-100"
                src={require("../images/go-two.jfif")}
                alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item >
                <img
                className="w-100"
                src={require("../images/bike-two.jfif")}
                alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
        </Col>
    )
}

