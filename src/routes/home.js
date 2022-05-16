import { Row, Col, Image, Container} from "react-bootstrap";

export default function Home() {
    return (
        <main style={{ padding: "1rem"}} >
            <Container>
                <Row className="border border-dark">  
                    <Col className="border border-primary m-1 mt-5">
                        <h1>
                            Elliot Erickson
                        </h1>
                        <Container>
                        <h3>
                        <b>Front-End Web Developer</b><br />
                        Arma virumque canō, 
                        Trōiae quī prīmus ab ōrīs 
                        italiam, fātō profugus, lāvīniaque
                        vēnit iītora, multum ille et 
                        terrīs iactātus et altō 
                        </h3>
                        </Container>
                    </Col>
                    <Col className="border border-primary m-1">
                    <Image height={"300rem"} src={require("../images/golden-ratio.png")} alt="Logo Icon" />
                    </Col>
                </Row>
                <Row className="border border-dark">  
                    <Col className="border border-primary m-1">
                        <Image height={"300rem"} src={require("../images/portfolio-preview.PNG")} alt="Portfolio Preview" />
                    </Col>
                    <Col className="border border-primary m-1 d-none d-sm-block">
                        <Image height={"300rem"} src={require("../images/profile-pic.png")} alt="Profile Picture" />
                    </Col>
                    
                </Row>
                <Row className="border border-dark">  
                    <Col className="border border-primary m-1">
                        Social Links
                    </Col>
                </Row>
            </Container>
        </main>
    );
}

<Container>
  <Row>
    <Col>1 of 2</Col>
    <Col>2 of 2</Col>
  </Row>
  <Row>
    <Col>1 of 3</Col>
    <Col>2 of 3</Col>
    <Col>3 of 3</Col>
  </Row>
</Container>