
import { Col, Tabs, Tab } from "react-bootstrap";
import { useContext } from "react";
import { Context } from "../routes/about-me"

export const HobbyTabs = () => {
    const {key, setKey } = useContext(Context)

    return (
        
        <Col className="mt-5" md={8}>
       
            <h2 className="text-center">Hobbies and Interests</h2>
            <Tabs
                activeKey={key}
                transition={false}
                onSelect={(k) => setKey(Number(k))}
                id="hobby-tabs-no-animation"
                className="mb-3"
            >
                <Tab 
                    eventKey={0} 
                    title="Hobby One"
                    >
                    <p className="lead">
                    Hīs accēnsa super iactātōs aequore tōtō Trōas, rēliquiās Danaum atque immītis Achillī, arcēbat longē Latiō, multōsque per annōs errābant, āctī Fātīs, maria omnia circum.Tantae mōlis erat Rōmānam condere gentem!
                    </p>
                </Tab>
                <Tab 
                    eventKey={1}
                    title="Hobby Two"
                    >
                    <p className="lead">
                    Aeolus haec contra: 'Tuus, O regina, quid optes explorare labor; mihi iussa capessere fas est. Tu mihi, quodcumque hoc regni, tu sceptra Iovemque concilias, tu das epulis accumbere divom, nimborumque facis tempestatumque potentem.'
                    </p>
                </Tab>
                <Tab 
                    eventKey={2}
                    title="Hobby Three"
                    >
                    <p className="lead">
                    Haec ubi dicta, cavum conversa cuspide montem impulit in latus: ac venti, velut agmine facto, qua data porta, ruunt et terras turbine perflant. Incubuere mari, totumque a sedibus imisna Eurusque Notusque ruunt creberque procellis Africus, et vastos volvunt ad litora fluctus.
                    </p>
                </Tab>
            </Tabs>  
        </Col>
    );
  };