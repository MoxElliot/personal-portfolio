import { Link } from "react-router-dom"
import { Nav, Navbar, Image, Container} from "react-bootstrap";


export function NavBar() {
  return (
    <Navbar bg="light" expand="sm">
      <Container fluid className="mx-5">
        <Nav.Link className="ms-2" as={Link} to="/" >
          <Image height={"70rem"} src={require("../images/golden-ratio.png")} alt="Logo Icon" />
        </Nav.Link> 
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="ms-auto" variant="tabs">
            <Nav.Link 
              as={Link} 
              to="/portfolio"
              eventKey="link-1"
              >
                Portfolio
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/about-me"
              eventKey="link-2"
              >
                About Me
            </Nav.Link> 
            <Nav.Link 
              as={Link} 
              to="/contact"
              eventKey="link-3"
              >
                Contact
              </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
  );
}
 