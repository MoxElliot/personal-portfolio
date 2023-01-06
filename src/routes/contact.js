
import {
    Row, Col, Button, 
    ButtonGroup, Container, Image, 
    Card 
        } from "react-bootstrap";
import React from 'react';
import Resume from '../images/Elliot_Erickson_Development_CV.pdf'
import { ContactForm } from '../components/ContactForm'


export default function Contact() {
    return (
        <Container>
            <Row className="text-center mt-3">
                <Col>
                    <h1> Contact Elliot </h1>
                </Col>
            </Row>
            <Row className="d-flex justify-content-center">
                <Col xs={10} md={6} lg={4} className="ps-5">
                    <Image 
                        fluid
                        src={require("../images/golden-ratio.png")} 
                    />
                </Col>
            <Col xs={12} md={6} className="p-5">
                <Card className="text-center">
                    <Card.Header>
                        <h4>Link to Resume/CV</h4>
                        <p>Contact Details and References Available upon Request</p>
                    </Card.Header>
                    <Card.Body>
                        <a href={Resume} target="_blank" rel="noreferrer">
                            <i 
                            className="fa-regular fa-file-pdf fa-5x"
                            style={{color: "Grey"}}
                             />
                        </a>
                    </Card.Body>
                    <Card.Text>
                        Click to view or download...
                    </Card.Text>
                </Card>  
            </Col>
            <Col xs={12} md={10} lg={8}>
                <ContactForm />
            </Col>
            </Row>
           
            <Row className="d-flex justify-content-center">
                <Col className="text-center p-5" xs={10} sm={8} md={6} lg={5} xl={4}>
                    <ButtonGroup className="d-flex justify-content-around flex-wrap border">
                    <Button 
                        href="https://www.freecodecamp.org/fccd6d2b58b-aecf-4f42-9e37-c12c7c081a35" 
                        target="_blank" 
                        variant="outline-secondary" 
                        className="border-0">
                            <i className="fa-brands fa-free-code-camp fa-4x"></i>
                    </Button>  
            
                    <Button 
                        href="discordapp.com/users/MoxElliot#8234" 
                        target="_blank" 
                        variant="outline-secondary" 
                        className="border-0">
                            <i className="fa-brands fa-discord fa-4x"></i>
                    </Button> 
            
                    <Button 
                        href="https://github.com/MoxElliot" 
                        target="_blank" 
                        variant="outline-secondary" 
                        className="border-0">
                            <i className="fa-brands fa-github fa-4x"></i>
                    </Button> 
                
                    <Button 
                        href="mailto:eric0952@gmail.com" 
                        target="_blank" 
                        variant="outline-secondary" 
                        className="border-0">
                            <i className="fa-solid fa-envelope fa-4x"></i>
                    </Button> 
            
                    <Button 
                        href="https://www.linkedin.com/in/elliot-e-7a786822a/" 
                        target="_blank" 
                        variant="outline-secondary" 
                        className="border-0">
                            <i className="fa-brands fa-linkedin fa-4x"></i>
                    </Button> 
                    </ButtonGroup>
                </Col>
            </Row>
            
        </Container>
    );
}