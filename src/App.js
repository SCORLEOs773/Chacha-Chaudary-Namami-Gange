import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import ChatBot from "./components/chatbot/ChatBot";
import Gallery from "./components/Gallery";
import About from "./components/About";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/chatbot" element={<ChatBot />} />
          <Route exact path="/gallery" element={<Gallery />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
