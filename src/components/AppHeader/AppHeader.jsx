import css from "./AppHeader.module.css"
import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo.jsx";

export default function AppHeader() {
  return (
  
      <header className={css.container}>
      <Logo/>
        <NavLink to="/" >
          Home
        </NavLink>
        <NavLink to="/catalog" >
          Catalog
        </NavLink>
      </header>
    
  );
}