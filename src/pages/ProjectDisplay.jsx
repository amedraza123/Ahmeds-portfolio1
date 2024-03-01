import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import { FaGithub, FaLink } from 'react-icons/fa'; // Import GitHub and Link icons from react-icons
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const projectIndex = parseInt(id,  10);
  const project = ProjectList[projectIndex];

  if (!project) {
    return <div>Oops! The project you're looking for doesn't exist. Please check the URL or try a different project.</div>;
  }

  return (
    <div className="project">
      <h1>{project.name}</h1>
      <img src={project.image} alt={project.name} />
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <div className="icon-container">
        {project.githubLink && (
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        )}
        {project.link && (
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            <FaLink />
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectDisplay;

