import React from 'react';
import './ProjectCard.scss';
import projectsData from '../../data/projects.json'; // adapte le chemin si besoin

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubLink: string;
  live?: string;
  skill?: string[];
}

const ProjectsList: React.FC = () => {
  return (
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

            {/* Lien live */}
            {project.live && (
              <a
                href={project.live}
                className="project-card__link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Voir le site
              </a>
            )}
          </div>
        </div>
      ))}
    </section>
  );
};

export default ProjectsList;
