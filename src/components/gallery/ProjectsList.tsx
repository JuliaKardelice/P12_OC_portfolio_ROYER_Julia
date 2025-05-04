import React from "react";
import projectsData from "../../data/projects.json"; // adapte le chemin si besoin
import "./ProjectCard.scss";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubLink: string;
  website?: string;
  skill?: string[];
}

const ProjectsList: React.FC = () => {
  return (
    <div id="projects" className="projects-">
      <h2> Mes projets </h2>
      <section className="projects-container">
        {projectsData.map((project: Project) => (
          <div key={project.id} className="project-card">
            {/* Image */}
            <img
              src={project.image}
              alt={`Image du projet ${project.title}`}
              className="project-card__image"
            />

            {/* Contenu */}
            <div className="project-card__content">
              <h3 className="project-card__title">{project.title}</h3>
              <p className="project-card__description">{project.description}</p>

              {/* Technologies */}
              <ul className="project-card__tech-list">
                {project.technologies.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>

              {/* Lien GitHub */}
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
              {/* Lien GitHub */}
              {project.website && (
                <a
                  href={project.website}
                  className="project-card__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Voir sur en Ligne
                </a>
              )}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ProjectsList;
