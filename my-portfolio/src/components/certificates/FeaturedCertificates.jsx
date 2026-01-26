/* This program is to display featured certificates */
import { useState, useEffect } from "react";
import "./FeaturedCertificates.css";
/* Write yo ultra pro max certificates here */
const certificates = [
{
    title: "IBM Data Science Professional Certificate",
    issuer: "IBM",
    image: "/images/certificates/featured/ibm-data-science.png",
},
{
    title: "Google Data Analytics Professional Certificate",
    issuer: "Google",
    image: "/images/certificates/featured/google-data-analytics.png",
},
{
    title: "Mathematics for Machine Learning",
    issuer: "Imperial College London",
    image: "/images/certificates/featured/maths-ml.png",
},
];
export default function FeaturedCertificates() {
  const [active, setActive] = useState(1);
  const length = certificates.length;
  const prev = () =>
    setActive((i) => (i - 1 + length) % length);
  const next = () =>
    setActive((i) => (i + 1) % length);
  /* Auto rotation logic inge irukku */
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((i) => (i + 1) % length);
    }, 4500);

    return () => clearInterval(interval);
  }, [length]);
  /* HTML part mameyy */
  return (
    <section className="cert-section">
      <h2 className="cert-heading">Featured Certificates</h2>
      <div className="cert-wrapper">
        <button className="arrow left" onClick={prev}>‹</button>
        <div className="cert-stack">
          {certificates.map((cert, i) => {
            const offset = i - active;

            return (
              <div
                key={i}
                className="cert-card"
                style={{
                  transform: `
                    translateX(${offset * 300}px)
                    translateZ(${offset === 0 ? 120 : -120}px)
                    rotateY(${offset * -18}deg)
                    scale(${offset === 0 ? 1 : 0.92})
                  `,
                  opacity: Math.abs(offset) > 2 ? 0 : 1,
                  zIndex: 10 - Math.abs(offset),
                }}>
                <img src={cert.image} alt={cert.title} />
                <h3>{cert.title}</h3>
                <p>{cert.issuer}</p>
              </div>
            );
          })}
        </div>
        <button className="arrow right" onClick={next}>›</button>
      </div>
    </section>);}