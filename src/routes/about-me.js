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
            image: "../images/about-me-profile.PNG",
          },
          {
            number: 1,
            title: 'one',
            image: "../images/about-me-profile.PNG",
          },
          {
            number: 2,
            title: 'two',
            image: "../images/about-me-profile.PNG",
          },
          {
            number: 3,
            title: 'three',
            image: "../images/about-me-profile.PNG",
          },
          {
            number: 4,
            title: 'four',
            image: "../images/about-me-profile.PNG",
          },
          {
            number: 5,
            title: 'five',
            image: "../images/about-me-profile.PNG",
          },
          {
            number: 6,
            title: 'six',
            image: "../images/about-me-profile.PNG",
          },
          {
            number: 7,
            title: 'seven',
            image: "../images/about-me-profile.PNG",
          },
          {
            number: 8,
            title: 'eight',
            image: "../images/about-me-profile.PNG",
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
                        Mūsa, mihī causās memorā, quō nūmine laesō
                        </p>
                        <p className="lead font-weight-bold">Quidve dolēns, rēgīna deum tot volvere cāsūs
                        īnsīgnem pietāte virum, tot adīre labōrēs impulerit.</p>
                        <p className="lead font-weight-bold">Tantaene animīs caelestibus īrae?  Urbs antīqua fuit, Tyriī tenuēre colōnī. </p>   
                        
                    </Col>
                    <Col md={8}>
                        <Image src={require("../images/about-me-profile.PNG")} className="img-fluid d-none d-sm-block" alt="Portfolio Preview" />
                    </Col>
                </Row>
                <Row>
                  
                    <Col md={8}>
                    <Context.Provider value={{
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
         
                <Row className="w-75 text-center mx-auto mx-md-0">
                  <h3>My Favorite Media</h3>
                  { mediaImageArray.map((index) => (
                          <Col key={index} xs={4}>
                              <Image
                                  thumbnail="true"
                                  width="1500"
                                  src={require("../images/hobby-image.PNG")}
                              />
                          </Col>
                      ))}
                    <p>Click image to check it out!</p>          
                </Row>
                <SocialLinks />
           </Container>
        </main>
    );
}