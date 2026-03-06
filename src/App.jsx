import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import About from "./pages/About";
import Contacts from "./pages/Contacts";

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contacts />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
