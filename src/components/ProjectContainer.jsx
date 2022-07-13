import React from "react";
import projects from "../projects.json";
import Project from "./Project";
import "../components/ProjectContainer.css";

const ProjectContainer = () => {
  return (
    <div className="projectContainer">
      <h2 className="notable">Notable Personal Projects</h2>
      {projects.projects.map((item) => (
        <Project item={item} />
      ))}
      <h6 style={{ color: "#f5f5f5" }}>hello@jacobbinnie.com</h6>
    </div>
  );
};

export default ProjectContainer;
