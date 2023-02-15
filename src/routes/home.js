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
                        {/* <a href="https://moxelliot.github.io/personal-portfolio/" target="_blank" rel="noreferrer"> */}
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
                        {/* </a> */}
                    </Col>
                    <Col>
                        <p>
                        My personal portfolio utilizes JavaScript, React, and React-Router
                        </p>
                    </Col>
                </Row>
                <Row className="mt-1">
                    <Col className="text-center">
                        <a href="https://calendar-module.vercel.app/" target="_blank" rel="noreferrer">
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
                        <a href="https://lesson-creation-module.vercel.app/" target="_blank" rel="noreferrer">
                            <Figure>
                                <Figure.Image 
                                src={require("../images/lesson-creation-module.PNG")}
                                width={400}
                                height={400}
                                />
                                <Figure.Caption>
                                    Online Lesson Creator Module
                                </Figure.Caption>
                            </Figure>
                        </a>
                    </Col>
                    <Col>
                        <p>
                            This is a module for a larger web portal project for teachers and students. It allows a teacher to create, edit, and cancel available lesson times for students to request. It utilizes JavaScript, React, Redux, and Next.js.
                        </p>
                    </Col>
                </Row>
                <Row className="mt-1">
                    <Col className="text-center">
                        <a href="https://flashy.onrender.com/" target="_blank" rel="noreferrer">
                            <Figure>
                                <Figure.Image 
                                src={require("../images/flashy-game.png")}
                                width={400}
                                height={400}
                                />
                                <Figure.Caption>
                                    Mobile First Children's Flashcard Game
                                </Figure.Caption>
                            </Figure>
                        </a>
                    </Col>
                    <Col>
                        <p>
                            This project is an online game for children, utilizing flashcards, to teach basic letters, numbers, shapes, and animals. It utilizes React, React-Router, Redux, Tailwind, API Integration, and Firebase.
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

