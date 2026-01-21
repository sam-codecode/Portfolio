import { useState } from "react";
import { projectsData } from "../data/projectsData";
import ProjectModal from "../components/projects/ProjectModal";
import "./Projects.css";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-grid">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="project-card"
            onClick={() => setSelectedProject(project)}
            onMouseMove={(e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty(
      "--x",
      `${e.clientX - rect.left}px`
    );
    e.currentTarget.style.setProperty(
      "--y",
      `${e.clientY - rect.top}px`
    );
  }}>
  <img src={project.image} alt={project.title} />
  <div className="project-info">
  <h3>{project.title}</h3>
  <p>{project.shortDesc}</p>
  <div className="project-tags">
{project.tech.map((t, i) => (
  <span key={i}>{t}</span>))}
              </div>
            </div>
          </div>
        ))}
      </div>
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );}