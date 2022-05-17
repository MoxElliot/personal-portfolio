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
                        <Image src={require("../images/portfolio-preview.PNG")} className="img-fluid" alt="Portfolio Preview" />
                    </Col>
                    <Col className="border border-primary m-1 d-none d-sm-block">
                        <Image height={"600rem"} src={require("../images/profile-pic.png")} className="img-fluid" alt="Profile Picture" />
                    </Col>
                    
                </Row>
                <Row className="border border-dark flex-row-reverse">  
                    <Col className="border border-primary d-flex justify-content-end">
                    <Image src={require("../images/social-links.PNG")} className="img-fluid" alt="Portfolio Preview" />
                    </Col>
                </Row>
            </Container>
        </main>
    );
}

