
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
                    title="Kintsugi"
                    >
                    <p className="lead">
                    This ancient Japanese method of repairing pottery seeks not to hide the resulting imperfection, but to strengthen and adorn it. The craft uses a slow-curing lacquer and a final layer of gold. The work is restored to its original functionality. The result may be even more beautiful than before!
                    </p>
                </Tab>
                <Tab 
                    eventKey={1}
                    title="Go"
                    >
                    <p className="lead">
                    Go is a board game played with white and black stones laid alternately on a grid. The objective is to use your stones to surround as many interceptions/points on that grid as possible, while hindering your opponent from doing the same. It was the Holy Grail for AI research with Google's Deep Mind finally beating the world's best player in 2006.
                    </p>
                </Tab>
                <Tab 
                    eventKey={2}
                    title="Cycling"
                    >
                    <p className="lead">
                    Go far. Go fast. Live forever. Road cycling is an amazing sport. It both is great for the body and connects us with the natural world. Just remember, to always bring a spare...
                    </p>
                </Tab>
            </Tabs>  
        </Col>
    );
  };