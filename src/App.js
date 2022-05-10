import { Link, Outlet } from "react-router-dom"

export default function App() {
  return (
    <div>
    
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
      <Outlet />
    </div>
  );
}

