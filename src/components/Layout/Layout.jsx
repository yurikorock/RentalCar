import { NavLink, Outlet } from "react-router-dom";
import css from "./Layout.module.css"

export default function Layout() {
    const setActive = ({isActive}) => isActive ? css.activeLink : css.noActiveLink;
  return (
    <div className="container">
      <header className={css.header}>
        <NavLink to="/" className={css.logo}>
          Rental<span>Car</span>
        </NavLink>
        <nav className={css.nav}>
          <NavLink to="/" className={setActive}>Home</NavLink>
          <NavLink to="/catalog" end className={setActive}>Catalog</NavLink>
        </nav>
      </header>
      <main>
        <Outlet/>
      </main>
    </div>
  );
}
