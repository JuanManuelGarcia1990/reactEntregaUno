import ListItems from "./ListItems/ListItems";
import CartWidget from "./CartWidget/CartWidget";


export default function NavBar() {
  return (
    <nav>
      <ul>
        <ListItems nombre="INICIO" />
        <ListItems nombre="COMPRAR" />
        <ListItems nombre="QUIENES SOMOS" />
      </ul>
      <CartWidget />
    </nav>
  );
}
