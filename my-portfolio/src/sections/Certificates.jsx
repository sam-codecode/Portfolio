import { useState } from "react";
import { certificatesData } from "../components/certificates/certificatesData";
import "./Certificates.css";
const categories = [
  { key: "ai", label: "AI" },
  { key: "dataScience", label: "Data Science" },
  { key: "machineLearning", label: "Machine Learning" },
  { key: "deepLearning", label: "Deep Learning" },
  { key : "mathematics", label: "Mathematics"},
  { key : "dsa", label: "DSA"},
];
export default function Certificates() {
  const [activeCategory, setActiveCategory] = useState("ai");
  const activeCertificates = certificatesData[activeCategory] || [];
  return (
    <section className="certificates-section" id="certificates">
      <h2 className="certificates-title">
        Certificates
      </h2>
      <div className="cert-tabs">
        {categories.map((cat) => (
          <button
            key={cat.key}
            className={`cert-tab ${activeCategory === cat.key ? "active" : ""}`}
            onClick={() => setActiveCategory(cat.key)}
          >
            {cat.label}
          </button>
        ))}</div>
      <div className="cert-grid">
        {activeCertificates.map((cert, index) => (
          <div className="cert-grid-card" key={index}>
            <img src={cert.preview} alt={cert.title} />
            <h3>{cert.title}</h3>
            <p>{cert.issuer}</p>
            <a
              href={cert.file}
              target="_blank"
              rel="noopener noreferrer"
              className="cert-view">
              View Certificate →
            </a>
          </div>
        ))}
      </div>
    </section>
  );}