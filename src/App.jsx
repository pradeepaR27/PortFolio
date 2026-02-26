import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import About from "./pages/About.jsx";
import Skills from "./pages/Skills.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/Contact.jsx";
import Certifications from "./pages/Certifications";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
         <Route path="/certifications" element={<Certifications />} />
      </Routes>
    </>
  );
}

export default App;