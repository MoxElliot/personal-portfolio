import { Carousel, Col, Image } from 'react-bootstrap';
import { Context } from "../routes/about-me"
import {  useContext } from "react";

//cors doc for s3 & cloudfront https://stackoverflow.com/questions/12358173/correct-s3-cloudfront-cors-configuration#24459590

// cors docs for cloudfront functions https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-functions.html
 
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
                src={require("https://d1shtg7dhtoxn3.cloudfront.net/bike-one.jpg")}
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

