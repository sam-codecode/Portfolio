import "./ProjectModal.css";
import { useEffect } from "react";

export default function ProjectModal({ project, onClose }) {

  useEffect(() => {
    document.body.classList.add("modal-open");

    return () => {
      document.body.classList.remove("modal-open");
    };
  }, []);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-card"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose}>
          ×
        </button>

        <img src={project.image} alt={project.title} />

        <h2>{project.title}</h2>
        <p className="modal-short">{project.shortDesc}</p>

        <div className="modal-section">
          <h4>Problem</h4>
          <p>{project.problem}</p>
        </div>

        <div className="modal-section">
          <h4>Solution</h4>
          <p>{project.solution}</p>
        </div>

        <div className="modal-section">
          <h4>Tech Used</h4>
          <div className="modal-tags">
            {project.tech.map((tech, i) => (
              <span key={i}>{tech}</span>
            ))}
          </div>
        </div>

        <div className="modal-links">
          {project.live && (
            <a href={project.live} target="_blank" rel="noreferrer">
              🔗 Live Demo
            </a>
          )}
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer">
              💻 GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
