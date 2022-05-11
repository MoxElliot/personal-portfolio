import { Link  } from "react-router-dom"

export function NavBar() {
  return (
    <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
      >
        <Link to="/home">Home</Link> | {" "}
        <Link to="/portfolio">Portfolio</Link> | {" "}
        <Link to="/about-me">About Me</Link> | {" "}
        <Link to="/contact">Contact</Link>
      </nav>
  );
}
