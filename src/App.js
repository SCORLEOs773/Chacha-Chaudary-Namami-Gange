import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
// import Api from "./components/Api";
import ChatBot from "./components/ChatBot";
import Api from "./components/Api";
import Gallery from "./components/Gallery";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/chatbot" element={<ChatBot />} />
          <Route exact path="/api" element={<Api />} />
          <Route exact path="/gallery" element={<Gallery />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
