import { Row, Col, Image, Container, Tabs, Tab} from "react-bootstrap";

export default function AboutMe() {

   

    return (
        <main style={{ padding: "1rem 0"}} >
           <Container>
                <Row>
                    <Col className="text-center">
                        <h2>Who is Elliot Erickson, really?</h2>
                    </Col>
                </Row>
                <Row className="align-items-center">
                    <Col md={4}>
                        <p className="lead font-weight-bold">
                        Mūsa, mihī causās memorā, quō nūmine laesō
                        </p>
                        <p className="lead font-weight-bold">Quidve dolēns, rēgīna deum tot volvere cāsūs
                        īnsīgnem pietāte virum, tot adīre labōrēs impulerit.</p>
                        <p className="lead font-weight-bold">Tantaene animīs caelestibus īrae?  Urbs antīqua fuit, Tyriī tenuēre colōnī. </p>   
                        
                    </Col>
                    <Col md={8}>
                        <Image src={require("../images/about-me-profile.PNG")} className="img-fluid d-none d-sm-block" alt="Portfolio Preview" />
                    </Col>
                </Row>
                <Row>
                    <Col className="mt-5" md={6}>
                        <h2 className="text-center">Hobbies and Interests</h2>
                        <Tabs
                            defaultActiveKey="hobby1"
                            transition={false}
                            id="hobby-tabs-no-animation"
                            className="mb-3"
                        >
                            <Tab eventKey="hobby1" title="Hobby One">
                                <p className="lead">
                                Hīs accēnsa super iactātōs aequore tōtō Trōas, rēliquiās Danaum atque immītis Achillī, arcēbat longē Latiō, multōsque per annōs errābant, āctī Fātīs, maria omnia circum.Tantae mōlis erat Rōmānam condere gentem!
                                </p>
                            </Tab>
                            <Tab eventKey="hobby2" title="Hobby Two">
                                <p className="lead">
                                Aeolus haec contra: 'Tuus, O regina, quid optes explorare labor; mihi iussa capessere fas est. Tu mihi, quodcumque hoc regni, tu sceptra Iovemque concilias, tu das epulis accumbere divom, nimborumque facis tempestatumque potentem.'
                                </p>
                            </Tab>
                            <Tab eventKey="hobby3" title="Hobby Three">
                                <p className="lead">
                                Haec ubi dicta, cavum conversa cuspide montem impulit in latus: ac venti, velut agmine facto, qua data porta, ruunt et terras turbine perflant. Incubuere mari, totumque a sedibus imisna Eurusque Notusque ruunt creberque procellis Africus, et vastos volvunt ad litora fluctus.
                                </p>
                            </Tab>
                        </Tabs>
                        
                    </Col>
                    <Col>
                        Image Carousel
                    </Col>
                </Row>
           </Container>
        </main>
    );
}