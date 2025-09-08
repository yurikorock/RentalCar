import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo.jsx";

export default function AppHeader() {
  return (
    <header >
      <nav>
      <Logo/>
        <NavLink to="/" >
          Home
        </NavLink>
        <NavLink to="/catalog" >
          Catalog
        </NavLink>
      </nav>
    </header>
  );
}