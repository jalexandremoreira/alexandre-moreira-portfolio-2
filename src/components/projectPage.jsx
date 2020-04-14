import React from "react";
// import { Link } from "react-router-dom";
import { getProject } from "./../services/projectsService";

const ProjectPage = ({ match }) => {
  const project = getProject(match.params.id);

  return (
    <div className="container">
      <div className="row project-page-div">
        <div className="col-md-5 col-sm-12">
          <h1 className="project-page-title">{project.name}</h1>
          <p className="project-page-description">{project.description}</p>
          {/* <Link to={`/projects`}>
            <div className="project-page-button">
              <i className="fas fa-chevron-circle-left"></i>
            </div>
          </Link> */}
        </div>
        <div className="col-md-7 col-sm-12">
          <a href={project.link} target="_blank">
            <img src={project.img} alt="" className="project-images" />
            <p className="project-page-link">Click here to visit website</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
