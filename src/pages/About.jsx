import { motion } from "framer-motion";
import myPhoto from "../assets/myPhoto.jpeg";
import { Link } from "react-router-dom";

function About() {
  return (
    <motion.div
      className="page about-page"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "40px",
        flexWrap: "wrap",
        justifyContent: "space-between", // push photo to right
      }}
    >
      {/* Text Section */}
      <div className="about-text" style={{ flex: "1", minWidth: "250px" }}>
        <h1>Hello, I'm Pradeepa</h1>
        <p>
          I am a passionate and self-motivated developer specializing in Java and backend technologies. I have hands-on experience building REST APIs using Spring Boot and designing relational databases with MySQL. I also have basic knowledge of React for building responsive user interfaces. I enjoy writing clean and structured code, learning new technologies, and solving complex problems. My objective is to grow as a skilled Java backend developer and contribute to impactful software projects.
        </p>
      </div>

      {/* Photo Section */}
      <motion.div
        className="about-photo"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        style={{ flex: "0 0 auto" }} // prevents shrinking
      >
        <img
          src={myPhoto}
          alt="Pradeepa"
          style={{
            width: "300px",        // slightly bigger
            height: "400px",       // keep square
            objectFit: "cover",
            borderRadius: "10px",  // square with slightly rounded corners
            border: "3px solid #00adb5",
          }}
        />
      </motion.div>
    </motion.div>

  );
}

export default About;