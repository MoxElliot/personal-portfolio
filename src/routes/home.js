import { 
        Row, Col, Image, 
        Container, Figure
        } from "react-bootstrap";
import { SocialLinks } from "../components/SocialLinks";

export default function Home() {
    return (
        <main style={{ padding: "1rem"}} >
            <Container>
                <Row>  
                    <Col className="m-1 mt-5">
                        <h1>
                            Elliot Erickson
                        </h1>
                        <Container>
                        <h3>
                        <b>Front-End Web Developer</b><br />
                        I am a freelance front-end web consultant. You can lean on me to define, design, and develop the web-based application of your dreams. 
                        </h3>
                        </Container>
                    </Col>
                    <Col className="m-1">
                    <Image height={"300rem"} src={require("../images/golden-ratio.png")} alt="Logo Icon"/>
                    </Col>
                </Row>
                <Row> 
                    <Col className="m-1">
                <Container>
                <Row className="text-center">
                    <Col>
                        <h3>Portfolio Preview</h3>
                    </Col>
                </Row>
                <Row className="mt-1">
                    <Col className="text-center">
                        <a href="https://moxelliot.github.io/personal-portfolio/" target="_blank" rel="noreferrer">
                            <Figure>
                                <Figure.Image 
                                src={require("../images/portfolio-preview.PNG")}
                                width={400}
                                height={400}
                                />
                                <Figure.Caption>
                                    My Personal Portfolio Site
                                </Figure.Caption>
                            </Figure>
                        </a>
                    </Col>
                    <Col>
                        <p>
                            Mūsa, mihī causās memorā, quō nūmine laesō.
                        </p>
                    </Col>
                </Row>
                <Row className="mt-1">
                    <Col className="text-center">
                        <a href="https://moxelliot.github.io/personal-portfolio/" target="_blank" rel="noreferrer">
                            <Figure>
                                <Figure.Image 
                                src={require("../images/media-tile.PNG")}
                                width={400}
                                height={400}
                                />
                                <Figure.Caption>
                                    Portfolio Link #1
                                </Figure.Caption>
                            </Figure>
                        </a>
                    </Col>
                    <Col>
                        <p>
                            Mūsa, mihī causās memorā, quō nūmine laesō.
                        </p>
                    </Col>
                </Row>
                <Row className="mt-1">
                    <Col className="text-center">
                        <a href="https://moxelliot.github.io/personal-portfolio/" target="_blank" rel="noreferrer">
                            <Figure>
                                <Figure.Image 
                                src={require("../images/media-tile.PNG")}
                                width={400}
                                height={400}
                                />
                                <Figure.Caption>
                                    Portfolio Link #1
                                </Figure.Caption>
                            </Figure>
                        </a>
                    </Col>
                    <Col>
                        <p>
                            Mūsa, mihī causās memorā, quō nūmine laesō.
                        </p>
                    </Col>
                </Row>
            </Container>
                    </Col>
                    <Col className="m-1 d-none d-sm-block">
                        <Image height={"600rem"} src={require("../images/profile-pic.png")} fluid alt="Profile Picture" />
                    </Col>
                    
                </Row>

                <SocialLinks />
            </Container>
        </main>
    );
}

