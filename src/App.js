import { Outlet } from "react-router-dom"
import { NavBar } from "./components/NavBar"
import './index.sass';

export default function App() {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
}

