import '../index.sass';
import {
    Row, Col, Container,
    Card,  Figure 
        } from "react-bootstrap";

export default function Portfolio() {
    return (
        <main style={{ padding: "1rem 0"}} >
            <Container>
                <Row className="text-center">
                    <Col>
                        <h1>Portfolio Details</h1>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} className="text-center">
                        <a href="https://moxelliot.github.io/personal-portfolio/" target="_blank" >
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
                    <Col md={6}>
                        <Card>
                            <Card.Header>
                                Mūsa, mihī causās memorā, quō nūmine laesō.
                            </Card.Header>
                            <Card.Body>
                                <Card.Title>
                                    Features
                                </Card.Title>
                                <Card.Text>
                                        <li>
                                            Vix e conspectu Siculae 
                                        </li>
                                        <li>
                                            Telluris in altum
                                        </li>
                                        <li>
                                            Vela dabant laeti, et spumas salis 
                                        </li>
                                        <li>
                                            Aere ruebant cum Iuno
                                        </li>
                                        <li>
                                            Aeternum servans sub pectore volnus
                                        </li>
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className="text-center">
                                <Card.Title>
                                    Technology Stack
                                </Card.Title>
                                <i className="fa-brands fa-html5 fa-2x p-2"></i>
                                <i className="fa-brands fa-bootstrap fa-2x p-2"></i>
                                <i className="fa-brands fa-js-square fa-2x p-2"></i>
                                <i className="fa-brands fa-sass fa-2x p-2"></i>
                                <i className="fa-brands fa-react fa-2x p-2"></i>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} className="text-center">
                        <a href="https://moxelliot.github.io/personal-portfolio/" target="_blank" >
                            <Figure>
                                <Figure.Image 
                                src={require("../images/media-tile.PNG")}
                                width={400}
                                height={400}
                                />
                                <Figure.Caption>
                                    Portfolio Link #2
                                </Figure.Caption>
                            </Figure>
                        </a>
                    </Col>
                    <Col md={6}>
                        <Card>
                            <Card.Header>
                                Mūsa, mihī causās memorā, quō nūmine laesō.
                            </Card.Header>
                            <Card.Body>
                                <Card.Title>
                                    Features
                                </Card.Title>
                                <Card.Text>
                                        <li>
                                            Vix e conspectu Siculae 
                                        </li>
                                        <li>
                                            Telluris in altum
                                        </li>
                                        <li>
                                            Vela dabant laeti, et spumas salis 
                                        </li>
                                        <li>
                                            Aere ruebant cum Iuno
                                        </li>
                                        <li>
                                            Aeternum servans sub pectore volnus
                                        </li>
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className="text-center">
                                <Card.Title>
                                    Technology Stack
                                </Card.Title>
                                <i className="fa-brands fa-html5 fa-2x p-2"></i>
                                <i className="fa-brands fa-bootstrap fa-2x p-2"></i>
                                <i className="fa-brands fa-js-square fa-2x p-2"></i>
                                <i className="fa-brands fa-sass fa-2x p-2"></i>
                                <i className="fa-brands fa-react fa-2x p-2"></i>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} className="text-center">
                        <a href="https://moxelliot.github.io/personal-portfolio/" target="_blank" >
                            <Figure>
                                <Figure.Image 
                                src={require("../images/media-tile.PNG")}
                                width={400}
                                height={400}
                                />
                                <Figure.Caption>
                                    Portfolio Link #3
                                </Figure.Caption>
                            </Figure>
                        </a>
                    </Col>
                    <Col md={6}>
                        <Card>
                            <Card.Header>
                                Mūsa, mihī causās memorā, quō nūmine laesō.
                            </Card.Header>
                            <Card.Body>
                                <Card.Title>
                                    Features
                                </Card.Title>
                                <Card.Text>
                                        <li>
                                            Vix e conspectu Siculae 
                                        </li>
                                        <li>
                                            Telluris in altum
                                        </li>
                                        <li>
                                            Vela dabant laeti, et spumas salis 
                                        </li>
                                        <li>
                                            Aere ruebant cum Iuno
                                        </li>
                                        <li>
                                            Aeternum servans sub pectore volnus
                                        </li>
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className="text-center">
                                <Card.Title>
                                    Technology Stack
                                </Card.Title>
                                <i className="fa-brands fa-html5 fa-2x p-2"></i>
                                <i className="fa-brands fa-bootstrap fa-2x p-2"></i>
                                <i className="fa-brands fa-js-square fa-2x p-2"></i>
                                <i className="fa-brands fa-sass fa-2x p-2"></i>
                                <i className="fa-brands fa-react fa-2x p-2"></i>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </Container>
            
        </main>
    );
}