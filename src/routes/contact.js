
import {
    Row, Col, Button, 
    ButtonGroup, Container, Image, 
    Card, Form 
        } from "react-bootstrap";
import React from 'react';
import Resume from '../images/Elliot_Erickson_Full_CV.pdf'


export default function Contact() {
    return (
        <Container>
            <Row className="text-center mt-3">
                <Col>
                    <h1> Contact Elliot </h1>
                </Col>
            </Row>
            <Row className="d-flex justify-content-center">
                <Col xs={10} md={6} className="ps-5">
                    <Image 
                        fluid
                        src={require("../images/golden-ratio.png")} 
                    />
                </Col>
            <Col xs={12} md={6} className="p-5">
                <Card className="text-center">
                    <Card.Header>
                        Link to Resume/CV
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
            <Col xs={12}>
                <Form>
                    <Form.Group className="mb-3 w-75">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type='email' placeholder="sample@company.com" />
                    </Form.Group>
                    <Form.Group className="mb-3 w-75">
                        <Form.Label>Message Me</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="Your message here..."/>
                    </Form.Group>
                    <Button variant="secondary" type="submit">Submit</Button>
                </Form>
            </Col>
            </Row>
           
                <Row>
                    <Col className="text-center p-5">
                        <ButtonGroup className="d-flex justify-content-around flex-wrap">
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
                            href="https://www.linkedin.com/in/elliot-erickson-7a786822a/" 
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