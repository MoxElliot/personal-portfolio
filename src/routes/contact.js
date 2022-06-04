
import { Row, Col, Button, ButtonGroup, Container, Image } from "react-bootstrap";

export default function Contact() {
    return (
        <main style={{ padding: "1rem 0"}} >
            <Row>
            <Col className="ps-5">
            <Image fluid src={require("../images/golden-ratio.png")} />
            </Col>
            <Col className="border border-dark">
            Resume
            </Col>
            <Col className="border border-dark">
            Contact Form
            </Col>
            </Row>
            <Container>
                <Row >
                    <Col className="text-center p-5" >
                        <ButtonGroup className="d-flex justify-content-around">
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
        </main>
    );
}