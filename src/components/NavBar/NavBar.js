import CartWidget from "./CartWidget/CartWidget";
import "./NavBar.css";
import { Link, NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <ul className="list">
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "inactive")}
            to="/"
          >
            Todos los productos
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "inactive")}
            to="/category/Remeras"
          >
            Remeras
          </NavLink>
        </li>

        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "inactive")}
            to="/category/gorras"
          >
            Gorras
          </NavLink>
        </li>

        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "inactive")}
            to="/category/otros"
          >
            Otros
          </NavLink>
        </li>

        <CartWidget />
      </ul>
    </nav>
  );
}
