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
                        <h2>Portfolio Details</h2>
                        <h1> Test</h1>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <a>
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
                                    <ul>
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
                                    </ul>
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Card.Title>
                                    Technology Stack
                                </Card.Title>
                                <i className="fa-brands fa-react"></i>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </main>
    );
}