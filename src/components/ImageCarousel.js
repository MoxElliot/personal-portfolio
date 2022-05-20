
import { Carousel } from 'react-bootstrap';

import { useState } from 'react';


{/* Used Controlled Carousel guide from https://react-bootstrap.github.io/components/carousel/ */}

export const ImageCarousel = () => {
    const [index, setIndex] = useState(0)

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
   
    return (
        <Carousel activeIndex={index} onSelect={handleSelect} variant="dark" interval={null}> 
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={require("../images/hobby-image.PNG")}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3 className="text-success">First slide label</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={require("../images/hobby-image.PNG")}
                alt="Second slide"
                />
                <Carousel.Caption>
                <h3 className="text-success">Second slide label</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
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

    )
}

