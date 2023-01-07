import "./App.css";
import Contact from "./components/Contact/Contact";
import Characters from "./components/Characters/Characters";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/characters" element={<Characters/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </Router>
  );
}

export default App;
