import React from "react";
import { getProject } from "./../services/projectsService";

const ProjectPage = ({ match }) => {
  const project = getProject(match.params.id);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-5 col-sm-12">
          <h1>{project.name}</h1>
        </div>
        <div className="col-md-7 col-sm-12">
          <img src={project.img} alt="" className="project-images" />
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
