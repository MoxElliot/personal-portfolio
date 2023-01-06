import { Row, Col, Button, Container, ButtonGroup } from "react-bootstrap"


export const SocialLinks = () => {


    return (
     <Container  className="d-flex justify-content-end">
        <Row className="border border-secondary rounded">
            <h2 className="text-center">Contact Me</h2>
       
            <Col className="text-center" >
                <ButtonGroup>
                <Button 
                    href="https://www.freecodecamp.org/fccd6d2b58b-aecf-4f42-9e37-c12c7c081a35" 
                    target="_blank" 
                    variant="outline-secondary" 
                    className="border-0">
                        <i className="fa-brands fa-free-code-camp fa-2x"></i>
                </Button>  
         
                <Button 
                    href="https://discordapp.com/users/127595779035496449" 
                    target="_blank" 
                    variant="outline-secondary" 
                    className="border-0">
                        <i className="fa-brands fa-discord fa-2x"></i>
                </Button> 
          
                <Button 
                    href="https://github.com/MoxElliot" 
                    target="_blank" 
                    variant="outline-secondary" 
                    className="border-0">
                        <i className="fa-brands fa-github fa-2x"></i>
                </Button> 
            
                <Button 
                    href="mailto:eric0952@gmail.com" 
                    target="_blank" 
                    variant="outline-secondary" 
                    className="border-0">
                        <i className="fa-solid fa-envelope fa-2x"></i>
                </Button> 
          
                <Button 
                    href="https://www.linkedin.com/in/elliot-e-7a786822a/" 
                    target="_blank" 
                    variant="outline-secondary" 
                    className="border-0">
                        <i className="fa-brands fa-linkedin fa-2x"></i>
                </Button> 
                </ButtonGroup>
            </Col>
        </Row>
        </Container>
      
      
        )}