import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import projectsData from "../../data/projects.json";
import "./ProjectsList.scss";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubLink: string;
  website?: string;
  skill?: string[];
  plot?: string;
}

const ProjectsList: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleOpenModal = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <div id="projects">
      <h2>Mes projets</h2>
      <section className="projects-container">
        {projectsData.map((project: Project) => (
          <div key={project.id} className="project-card">
            <img
              src={project.image}
              alt={`Image du projet ${project.title}`}
              className="project-card__image"
              onClick={() => handleOpenModal(project)}
            />

            <div className="project-card__content">
              <h3 className="project-card__title">{project.title}</h3>
              <p className="project-card__description">{project.description}</p>

              <ul className="project-card__tech-list">
                {project.technologies.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>

              <div className="project-card__links">
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    className="project-card__link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Voir sur GitHub
                  </a>
                )}
                {project.website && (
                  <a
                    href={project.website}
                    className="project-card__link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Voir en ligne
                  </a>
                )}
              </div>

              <button
                className="project-card__details-button"
                onClick={() => handleOpenModal(project)}
              >
                Pour plus de détails{" "}
                <FontAwesomeIcon icon={faUpRightFromSquare} />
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* MODALE */}
      {selectedProject && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={handleCloseModal}>
              ✕
            </button>
            <img
              src={selectedProject.image}
              alt={`Image du projet ${selectedProject.title}`}
              className="modal-image"
            />
            <h3>{selectedProject.title}</h3>
            <div className="modal-text">
              {/**  <p className="modal-description">{selectedProject.description}</p> */}

              <p className="modal-plot"> {selectedProject.plot}</p>
              {selectedProject.technologies.length > 0 && (
                <>
                  <h4>Technologies utilisées :</h4>
                  <ul className="modal-tech-list">
                    {selectedProject.technologies.map((tech, index) => (
                      <li key={index}>{tech}</li>
                    ))}
                  </ul>
                </>
              )}

              {selectedProject.skill && selectedProject.skill.length > 0 && (
                <>
                  <h4>
                    {" "}
                    Voici ce que ce projet m'a permet d'explorer commme
                    compétences :{" "}
                  </h4>
                  <ul className="modal-skill-list">
                    {selectedProject.skill.map((skill, index) => (
                      <li key={index}>{skill}</li>
                    ))}
                  </ul>
                </>
              )}

              {selectedProject.website && (
                <a
                  href={selectedProject.website}
                  className="modal-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visiter le site
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsList;
