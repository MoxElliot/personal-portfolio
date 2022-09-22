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
                        <b>Front-End Web Developer</b></h3>
                        <h3>I am learning front-end focused, web development technologies, to transition careers.</h3>
                        <h3> This site displays my skills and introduces my personality. 
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
                        <h2>Portfolio Preview</h2>
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
                        My personal portfolio utilizes JavaScript, React, and React-Router with a simple MongoDB back-end for the contact form.
                        </p>
                    </Col>
                </Row>
                <Row className="mt-1">
                    <Col className="text-center">
                        <a href="https://moxelliot.github.io/personal-portfolio/" target="_blank" rel="noreferrer">
                            <Figure>
                                <Figure.Image 
                                src={require("../images/calendar-module.PNG")}
                                width={400}
                                height={400}
                                />
                                <Figure.Caption>
                                    Scheduling Calendar Module
                                </Figure.Caption>
                            </Figure>
                        </a>
                    </Col>
                    <Col>
                        <p>
                            I built this calendar from scratch utilizing JavaScript, React, Redux, and Next.js. It is one piece of a larger web portal project for teachers and students.
                        </p>
                    </Col>
                </Row>
                <Row className="mt-1">
                    <Col className="text-center">
                        <a href="https://moxelliot.github.io/personal-portfolio/" target="_blank" rel="noreferrer">
                            <Figure>
                                <Figure.Image 
                                src={require("../images/teapot.jpg")}
                                width={400}
                                height={400}
                                />
                                <Figure.Caption>
                                    Tiny Teapot I Made
                                </Figure.Caption>
                            </Figure>
                        </a>
                    </Col>
                    <Col>
                        <p>
                            This is a tiny teapot I made. It's a placeholder until I complete another portfolio project. The world has enough drumMachine.js.
                        </p>
                    </Col>
                </Row>
            </Container>
                    </Col>
                    <Col className="m-1 d-none d-sm-block">
                        <Image height={"600rem"} src={require("../images/me-and-wife.jpg")} fluid alt="Profile Picture" />
                    </Col>
                    
                </Row>

                <SocialLinks />
            </Container>
        </main>
    );
}

