import { Link } from "react-router-dom"
import { Nav, Navbar, Image, Container} from "react-bootstrap";


export function NavComponent() {
  return (
    <Navbar bg="light" expand="sm">
      <Container fluid>
        <Navbar.Brand as={Link} to="/home" className="ms-2 active">
          <Image height={"70rem"} src={require("./golden-ratio.png")} alt="Home Icon" />
        </Navbar.Brand>  {/* as={Link} is a react-bootstrap render prop which specifies which compoent should be rendered instead of the default (Nav.LinK) */}
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
 