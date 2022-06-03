
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

            <Carousel.Item>
                <Image
                className="d-block  w-100"
                src={require("../images/hobby-image.PNG")}
                alt="First slide"
                />
                <Carousel.Caption >
                <h3 className="text-success">First slide label</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image
                className="d-block w-100"
                src={require("../images/hobby-image.PNG")}
                alt="Second slide"
                />
                <Carousel.Caption>
                <h3 className="text-success">Second slide label</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item >
                <Image
                className="d-block w-100"
                src={require("../images/hobby-image.PNG")}
                alt="Third slide"
                />
                <Carousel.Caption>
                <h3 className="text-success">Third slide label</h3>
                </Carousel.Caption>
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
                src={require("../images/hobby-image.PNG")}
                alt="First slide"
                />
                <Carousel.Caption >
                <h3 className="text-success">First B slide label</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item >
                <img
                className=" w-100"
                src={require("../images/hobby-image.PNG")}
                alt="Second slide"
                />
                <Carousel.Caption>
                <h3 className="text-success">Second B slide label</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item >
                <img
                className="w-100"
                src={require("../images/hobby-image.PNG")}
                alt="Third slide"
                />
                <Carousel.Caption>
                <h3 className="text-success">Third B slide label</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </Col>
    )
}

