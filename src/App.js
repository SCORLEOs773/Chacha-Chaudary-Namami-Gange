import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Api from "./components/Api";

function App() {
  return (
    <div>
      <Navbar />
      <Main />
      <Api />
    </div>
  );
}

export default App;
