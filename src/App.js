import { Outlet } from "react-router-dom"
import { NavComponent } from "./components/Navbar"

export default function App() {
  return (
    <div>
      <NavComponent />
      <Outlet />
    </div>
  );
}

