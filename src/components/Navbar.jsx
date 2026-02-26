import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Navbar() {
  const linkStyle = {
    textDecoration: "none",
    color: "white",
    marginLeft: "20px",
  };

  return (
    <nav className="navbar">
      <h2>My Portfolio</h2>
      <div>
        <motion.span whileHover={{ scale: 1.1 }}>
          <Link to="/" style={linkStyle}>About</Link>
        </motion.span>

        <motion.span whileHover={{ scale: 1.1 }}>
          <Link to="/skills" style={linkStyle}>Skills</Link>
        </motion.span>

         <motion.span whileHover={{ scale: 1.1 }}>
          <Link to="/certifications" style={linkStyle}>Certifications</Link>
        </motion.span>

        <motion.span whileHover={{ scale: 1.1 }}>
          <Link to="/projects" style={linkStyle}>Projects</Link>
        </motion.span>

        <motion.span whileHover={{ scale: 1.1 }}>
          <Link to="/contact" style={linkStyle}>Contact</Link>
        </motion.span>
      </div>
    </nav>
  );
}

export default Navbar;