
import { Carousel, Col } from 'react-bootstrap';


{/* Used Controlled Carousel guide from https://react-bootstrap.github.io/components/carousel/ */}
{/* Read https://w3collective.com/tab-component-react/ for tab active index*/}

export const ImageCarousel = () => {
  
    return (
        <Col>
        <Carousel variant="dark" interval={null}> 
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
        </Col>
    )
}

