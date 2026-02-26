import { useState } from "react";
import { motion } from "framer-motion";

function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);

  const certificates = [
    {
      title: "Introduction to Java Programming",
      issuer: "NPTEL",
      year: "2024",
      file: "/certificates/Java.pdf",
    },
    {
      title: "CyberSecurity and Analysis",
      issuer: "Nasscom",
      year: "2023",
      file: "/certificates/Nasscom.pdf",
    },
    {
      title: "Introduction to Machine Learning",
      issuer: "NPTEL",
      year: "2025",
      file: "/certificates/Aiml.pdf",
    },
  ];

  return (
    <motion.div
      className="certifications-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h1>My Certifications</h1>

      <div className="cert-grid">
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            className="cert-card"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <h3>{cert.title}</h3>
            <p><strong>Issued By:</strong> {cert.issuer}</p>
            <p><strong>Year:</strong> {cert.year}</p>

            <button
              className="view-btn"
              onClick={() => setSelectedCert(cert.file)}
            >
              View Certificate
            </button>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      {selectedCert && (
        <div className="modal-overlay" onClick={() => setSelectedCert(null)}>
          <motion.div
            className="modal-content"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-btn"
              onClick={() => setSelectedCert(null)}
            >
              ✖
            </button>

            <iframe
              src={selectedCert}
              width="100%"
              height="500px"
              title="Certificate"
            />
          </motion.div>
        </div>
      )}
    </motion.div>
  );
}

export default Certifications;

