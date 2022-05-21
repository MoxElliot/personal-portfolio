import { Row, Col, Image, Container, Tabs, Tab, Carousel} from "react-bootstrap";
import { ImageCarousel } from "../components/ImageCarousel"
import { HobbyTabs } from "../components/HobbyTabs"

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
                    <HobbyTabs />
                    <ImageCarousel />
                </Row>
           </Container>
        </main>
    );
}