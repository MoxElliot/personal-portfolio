
import {
    Row, Col, Container,
    Card,  Figure 
        } from "react-bootstrap";
import React from 'react';

export default function Portfolio() {
    return (
        <main style={{ padding: "1rem 0"}} >
            <Container>
                <Row className="text-center">
                    <Col>
                        <h1>Portfolio Details</h1>
                        <p>These projects are planned and developed by me. I will not include any coding excercises here. Instead, what you see are projects that interest me, for better or worse.</p>
                    </Col>
                </Row>
                <Row className="mt-3 border p-2">
                    <Col md={6} className="text-center">
                    <h3>Personal Portfolio</h3>
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
                    <Col md={6}>
                        <Card>
                            <Card.Header>
                                This fully responsive portfolio demonstrates my use of React, Redux, and React-Boostrap
                            </Card.Header>
                            <Card.Body>
                                <Card.Title>
                                    Features
                                </Card.Title>
                                <Card.Text>
                                        <li>
                                            Fully Responsive, Mobile First Design
                                        </li>
                                        <li>
                                            React-Bootstrap Styling
                                        </li>
                                        <li>
                                            Contact Me Form 
                                        </li>
                                        
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className="text-center">
                                <Card.Title>
                                    Technology Stack
                                </Card.Title>
                                <i className="fa-brands fa-js-square fa-2x p-2"></i>
                                <i className="fa-brands fa-react fa-2x p-2"></i>
                                <img className="icon" src="https://img.icons8.com/ios-filled/50/000000/redux.png" alt="Redux Icon"></img>
                                <img className="icon" src="https://img.icons8.com/color/344/mongodb.png" alt="MongoDB Icon"></img>
                                <i className="fa-brands fa-bootstrap fa-2x p-2"></i>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
                <Row className="mt-3 border p-2">
                    <Col md={6} className="text-center">
                    <h3>Scheduling Calendar Module</h3>
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
                    <Col md={6}>
                        <Card>
                            <Card.Header>
                                This scheduling calendar is a module for a larger teacher-student online lesson portal
                            </Card.Header>
                            <Card.Body>
                                <Card.Title>
                                    Features
                                </Card.Title>
                                <Card.Text>
                                        <li>
                                            No React calendar library used, I developed this myself as a learning excercise
                                        </li>
                                        <li>
                                            Logic allows user to navigate forward in time, accounts for leap years
                                        </li>
                                        <li>
                                            User cannot navigate before the present day to prevent scheduling "past" lessons
                                        </li>
                                        <li>
                                            Selecting a time slot opens a lesson detail window
                                        </li>
                                        <li>
                                            The "Today" button brings user back to present day
                                        </li>
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className="text-center">
                                <Card.Title>
                                    Technology Stack
                                </Card.Title>
                                <i className="fa-brands fa-js-square fa-2x p-2"></i>
                                <i className="fa-brands fa-react fa-2x p-2"></i>
                                <img className="icon" src="https://img.icons8.com/ios-filled/50/000000/redux.png" alt="Redux Icon"></img>
                                <img className="icon" src="https://img.icons8.com/color/344/nextjs.png" alt="NextJS Icon"></img>
                                <i className="fa-brands fa-bootstrap fa-2x p-2"></i>
                                <i className="fa-brands fa-sass fa-2x p-2"></i>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
                <Row className="mt-3 border p-2">
                    <Col md={6} className="text-center">
                    <h3>Lesson Creator Module</h3>
                        <a href="https://lesson-creation-module.vercel.app/" target="_blank" rel="noreferrer">
                            <Figure>
                                <Figure.Image 
                                src={require("../images/lesson-creation-module.PNG")}
                                width={400}
                                height={400}
                                />
                                <Figure.Caption>
                                    Lesson Creator Module
                                </Figure.Caption>
                            </Figure>
                        </a>
                    </Col>
                    <Col md={6}>
                        <Card>
                            <Card.Header>
                                This module allows teachers to create, edit, and cancel lessons for students. It is for a larger teacher-student online lesson portal
                            </Card.Header>
                            <Card.Body>
                                <Card.Title>
                                    Features
                                </Card.Title>
                                <Card.Text>
                                        <li>
                                            User can create, cancel, and edit lessons from a control form. New and modified lessons populate on the included lesson table
                                        </li>
                                        <li>
                                            User can filter lessons in lesson table by status
                                        </li>
                                        <li>
                                            User can include file attachments for each lesson. Attachments can be added or removed within edit funcionality
                                        </li>
                                        <li>
                                            User can include a web link for online lesson location such as Zoom or Discord
                                        </li>
                                        <li>
                                            No fields are required for easy of use in testing, would be modified in live app
                                        </li>
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className="text-center">
                                <Card.Title>
                                    Technology Stack
                                </Card.Title>
                                <i className="fa-brands fa-js-square fa-2x p-2"></i>
                                <i className="fa-brands fa-react fa-2x p-2"></i>
                                <img className="icon" src="https://img.icons8.com/ios-filled/50/000000/redux.png" alt="Redux Icon"></img>
                                <img className="icon" src="https://img.icons8.com/color/344/nextjs.png" alt="NextJS Icon"></img>
                                <i className="fa-brands fa-bootstrap fa-2x p-2"></i>
                                <i className="fa-brands fa-sass fa-2x p-2"></i>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </Container>
            
        </main>
    );
}