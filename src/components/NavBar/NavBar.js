import ListItems from "./ListItems/ListItems";
import CartWidget from "./CartWidget/CartWidget";
import './NavBar.css'

export default function NavBar() {
  return (
    <nav>
      <ul className="list">
        <ListItems nombre="INICIO" />
        <ListItems nombre="TIENDA" />
        <ListItems nombre="TOUR" />
        <CartWidget />
      </ul>
    </nav>
  );
}
