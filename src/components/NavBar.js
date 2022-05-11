import { Link } from "react-router-dom"
import { Nav, Container, Navbar} from "react-bootstrap";

export function NavComponent() {
  return (
    <Navbar bg="light" expand="sm">
      <Container>
        <Navbar.Brand as={Link} to="/home" className="ms-3">Home</Navbar.Brand>  {/* as={Link} is a react-bootstrap render prop which specifies which compoent should be rendered instead of the default (Nav.LinK) */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="me-auto align-self-end">
            <Nav.Link as={Link} to="/portfolio">Portfolio</Nav.Link>
            <Nav.Link as={Link} to="/about-me">About Me</Nav.Link> 
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
 