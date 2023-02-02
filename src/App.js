import logo from "./components/Assets/logo/logo.png";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div className="App">
      <header className="header">
        <img src={logo} className="logo" alt="logo" />
        <NavBar />
      </header>
      <main>
        <ItemListContainer greeting="Chili Peppers World" />
      </main>
    </div>
  );
}

export default App;
