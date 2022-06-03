import { Row, Col, Button, Container, ButtonGroup } from "react-bootstrap"


export const SocialLinks = () => {


    return (
     <Container className="w-50 d-block text-center me-5 border border-secondary rounded ">
         <h2>Contact Me</h2>
        <Row >
            <Col className="justify-content-end">
                <ButtonGroup>
                <Button href="https://www.freecodecamp.org/fccd6d2b58b-aecf-4f42-9e37-c12c7c081a35" target="_blank" variant="outline-secondary" className="border-0"><i className="fa-brands fa-free-code-camp fa-2x"></i></Button>  
         
                <Button href="discordapp.com/users/MoxElliot#8234" target="_blank" variant="outline-secondary" className="border-0"><i className="fa-brands fa-discord fa-2x"></i></Button> 
          
                <Button href="https://github.com/MoxElliot" target="_blank" variant="outline-secondary" className="border-0"><i className="fa-brands fa-github fa-2x"></i></Button> 
            
                <Button href="mailto:eric0952@gmail.com" target="_blank" variant="outline-secondary" className="border-0"><i className="fa-solid fa-envelope fa-2x"></i></Button> 
          
                <Button href="https://www.linkedin.com/in/elliot-erickson-7a786822a/" target="_blank" variant="outline-secondary" className="border-0"><i className="fa-brands fa-linkedin fa-2x"></i></Button> 
                </ButtonGroup>
            </Col>
        </Row>
        </Container>
      
      
        )}