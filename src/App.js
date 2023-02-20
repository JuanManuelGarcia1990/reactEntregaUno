import logo from "./components/Assets/logo/logo.png";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import { NavLink } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="header">
          <NavLink to="/">
            <img src={logo} className="logo" alt="logo" />
          </NavLink>
          <NavBar />
        </header>
         {/* <main>
         <ItemListContainer greeting="Chili Peppers World" />
       </main>  */}
      </div>
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route
          path="*"
          element={
            <div>
              <h1>Esta página no existe</h1>
            </div>
          }
        />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
