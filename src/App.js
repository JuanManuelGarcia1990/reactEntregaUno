import logo from "./components/Assets/logo/logo.png";
import "./App.css";
import Main from "./components/Main/Main";
import NavBar from "./components/NavBar/NavBar";



function App() {
  return (
    <div className="App">
      <header className="header">
        <img src={logo} className="logo" alt="logo" />
        <NavBar />
      </header>
      <Main />
    </div>
  );
}

export default App;
