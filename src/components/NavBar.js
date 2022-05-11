import { Link } from "react-router-dom"
import { Navbar, Nav } from "react-bootstrap";


export function NavComponent() {
  return (
    <Navbar bg="light" expand="lg">
        <Nav.Link as={Link} to="/home">Home</Nav.Link> | {" "}  
        <Nav.Link as={Link} to="/portfolio">Portfolio</Nav.Link> | {" "}
        <Nav.Link as={Link} to="/about-me">About Me</Nav.Link> | {" "}
        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
    </Navbar>
  );
}
