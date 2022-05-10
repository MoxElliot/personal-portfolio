import { Link } from "react-router-dom"

function App() {
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
      <h1>Website Goes Here</h1>
    </div>
  );
}

export default App;
