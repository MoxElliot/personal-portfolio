import { Row, Col, Image, Container } from "react-bootstrap";
import { ImageCarousel } from "../components/ImageCarousel"
import { HobbyTabs } from "../components/HobbyTabs"
import { useState, createContext } from "react";
import { SocialLinks } from "../components/SocialLinks";

export const Context = createContext()

export default function AboutMe() {

    const [key, setKey] = useState(0)

    const mediaImageArray = [
        {
            number: 0,
            title: 'zero',
            image: "https://images-na.ssl-images-amazon.com/images/I/41ODxbkAqIL._SX324_BO1,204,203,200_.jpg",
            link: "https://en.wikipedia.org/wiki/The_Brothers_Karamazov"
          },
          {
            number: 1,
            title: 'one',
            image: "https://m.media-amazon.com/images/I/51vM1OQSEgL._SY355_.jpg",
            link: "https://www.youtube.com/watch?v=_tklCnpXUGY"
          },
          {
            number: 2,
            title: 'two',
            image: "https://m.media-amazon.com/images/I/915DHAe2yXL._AC_UY218_.jpg",
            link: "https://www.nottingham.ac.uk/scope/documents/2003/may-2003/merrin.pdf"
          },
          {
            number: 3,
            title: 'three',
            image: "https://m.media-amazon.com/images/I/81bcR1H5MvL._SY355_.jpg",
            link: "https://www.youtube.com/watch?v=ekALA6N0NEM&list=OLAK5uy_mCI9g0tAzBZTtwfil1u31GY8p6vdQ3Kpk"
          },
          {
            number: 4,
            title: 'four',
            image: "https://images-na.ssl-images-amazon.com/images/I/41jMnvITH7L._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
            link: "https://cummings.ee/book/and/poem/and-seven-poems-vii/"
          },
          {
            number: 5,
            title: 'five',
            image: "https://m.media-amazon.com/images/I/71BUBWTvyhL._SY355_.jpg",
            link: "https://www.youtube.com/watch?v=2vG_pZfp084"
          },
          {
            number: 6,
            title: 'six',
            image: "https://m.media-amazon.com/images/I/510okYkTZ5L._AC_UY218_.jpg",
            link: "https://en.wikipedia.org/wiki/The_Wheel_of_Time"
          },
          {
            number: 7,
            title: 'seven',
            image: "https://m.media-amazon.com/images/I/A1l09sdRK-L._AC_UY218_.jpg",
            link: "https://www.imdb.com/title/tt0335266/"
          },
          {
            number: 8,
            title: 'eight',
            image: "https://m.media-amazon.com/images/I/715eN7hCs+L._AC_UY218_.jpg",
            link: "https://www.youtube.com/watch?v=y79Hv2b-EQg"
          }
    ]
    
    return (
        <main style={{ padding: "1rem 0"}} >
           <Container>
                <Row>
                    <Col className="text-center">
                        <h2>Who is Elliot Erickson, really?</h2>
                    </Col>
                </Row>
                <Row className="align-items-center">
                    <Col md={4}>
                        <p className="lead font-weight-bold">
                        I am a techno-bohemian with a wide range of interests and areas of expertise. 
                        </p>
                        <p className="lead font-weight-bold">My personal value to always strive to know more about the world has brough richness and depth to my projects and life in general.</p>
                        <p className="lead font-weight-bold">On this page you will find out more about me, about what moves me, and hopefully about why you want to work with me. </p>   
                        
                    </Col>
                    <Col md={8}>
                        <Image src={require("../images/pano-all.jpg")} className="img-fluid d-none d-sm-block" alt="Portfolio Preview" />
                    </Col>
                </Row>
                <Row>
                  
                    <Col md={8} className="d-flex justify-content-center">
                    <Context.Provider 
                      
                      value={{
                          key, 
                          setKey: key => setKey(key)}}>
                        <HobbyTabs />
                    </Context.Provider>
                    </Col>  
                    <Col >
                    <Context.Provider value={{
                        key, 
                        setKey: key => setKey(key)}}>
                        <ImageCarousel />
                    </Context.Provider>
                    </Col>
                </Row>
         
                <Row className="w-75 text-center mx-auto mx-md-0" lg={8}>
                  <h3>My Favorite Media</h3>
                  <p>Click image to check it out!</p>
                  { mediaImageArray.map((item) => (
                          <Col key={item.number} xs={4}>
                              <a href={item.link}  
                                 target="_blank" 
                                 rel="noreferrer">
                                <Image
                                  thumbnail="true"
                                  width="1500"
                                  src={item.image}
                              />
                              </a>
                          </Col>
                      ))}
                              
                </Row>
                <SocialLinks />
           </Container>
        </main>
    );
}