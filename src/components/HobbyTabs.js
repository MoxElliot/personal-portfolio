
import { Col, Tabs, Tab } from "react-bootstrap";
import { useState, useEffect } from "react";
export const HobbyTabs = () => {
    const [activeIndex, setActiveIndex ] = useState(1)

    useEffect(()=> console.log(activeIndex), [activeIndex])

    const tabSelect = (index) => {
        if (index===1) {
            setActiveIndex(1);
        } else if (index===2) {
            setActiveIndex(2);
        } else if (index === 3) {
            setActiveIndex(3);
        }
    }
    return (
        
        <Col className="mt-5" md={6}>
            <button onClick={() => setActiveIndex(activeIndex + 1)}>Click</button>
            <p>{activeIndex}</p>
            <h2 className="text-center">Hobbies and Interests</h2>
            <Tabs
               defaultActiveKey={1}
                transition={false}
                id="hobby-tabs-no-animation"
                className="mb-3"
                onSelect={tabSelect()}
            >
                <Tab 
               
                    eventKey={1} 
                    title="Hobby One"
                    onSelect={() => setActiveIndex(activeIndex + 1)}
                    >
                    <p className="lead">
                    Hīs accēnsa super iactātōs aequore tōtō Trōas, rēliquiās Danaum atque immītis Achillī, arcēbat longē Latiō, multōsque per annōs errābant, āctī Fātīs, maria omnia circum.Tantae mōlis erat Rōmānam condere gentem!
                    </p>
                </Tab>
                <Tab 
               
                    eventKey={2}
                    title="Hobby Two"
                    onSelect={() => setActiveIndex(activeIndex + 1)}
                    
                    >
                    <p className="lead">
                    Aeolus haec contra: 'Tuus, O regina, quid optes explorare labor; mihi iussa capessere fas est. Tu mihi, quodcumque hoc regni, tu sceptra Iovemque concilias, tu das epulis accumbere divom, nimborumque facis tempestatumque potentem.'
                    </p>
                </Tab>
                <Tab 
             
                    eventKey={3}
                    title="Hobby Three"
                    onSelect={() => setActiveIndex(activeIndex + 1)}
                    
                    >
                    <p className="lead">
                    Haec ubi dicta, cavum conversa cuspide montem impulit in latus: ac venti, velut agmine facto, qua data porta, ruunt et terras turbine perflant. Incubuere mari, totumque a sedibus imisna Eurusque Notusque ruunt creberque procellis Africus, et vastos volvunt ad litora fluctus.
                    </p>
                </Tab>
            </Tabs>  
        </Col>
    );
  };