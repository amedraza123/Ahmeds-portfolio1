import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import { FaGithub } from 'react-icons/fa'; // Import GitHub icon from react-icons
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  // Convert the string id to a number since array indices are numbers
  const projectIndex = parseInt(id,  10);
  const project = ProjectList[projectIndex];

  // Check if the project exists
  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="project">
      <h1>{project.name}</h1>
      <img src={project.image} alt={project.name} />
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      {/* Render the GitHub icon only if the project has a GitHub link */}
      {project.githubLink && (
        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
          <FaGithub /> {/* Use the GitHub icon from react-icons */}
        </a>
      )}
    </div>
  );
}

export default ProjectDisplay;
