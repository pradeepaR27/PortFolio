// import { motion } from "framer-motion";

// function Contact() {
//   return (
//     <motion.div
//       className="contact-page"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.8 }}
//     >
//       <h1>Contact Me</h1>

//       <motion.div
//         className="contact-card"
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         <div className="contact-details">
//           <p><strong>Name:</strong> Pradeepa R</p>
//           <p><strong>Email:</strong> pradeeparavichandran05@gmail.com</p>
//           <p><strong>Phone:</strong> +91 8438357995</p>
//           <p><strong>Location:</strong> Chennai, India</p>

//           <div className="contact-links">
//             <a href="#">LinkedIn</a>
//             <a href="#">GitHub</a>
//           </div>
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// }

// export default Contact;


import { motion } from "framer-motion";

function Contact() {
  return (
    <motion.div
      className="contact-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h1>Contact Me</h1>

      <motion.div
        className="contact-card"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="contact-details">
          <p><strong>Name:</strong> Pradeepa R</p>
          <p><strong>Email:</strong> pradeeparavichandran05@gmail.com</p>
          <p><strong>Phone:</strong> +91 8438357995</p>
          <p><strong>Location:</strong> Chennai, India</p>

          <div className="contact-links">
            <a
              href="https://www.linkedin.com/in/pradeepa-ravichandran-927180330/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/pradeepaR27"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Contact;