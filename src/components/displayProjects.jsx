import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getProjects } from "./../services/projectsService";

class DisplayProjects extends Component {
  state = {
    projects: [],
  };

  componentDidMount() {
    const projects = getProjects();
    this.setState({ projects });
  }

  render() {
    const { projects } = this.state;
    return !projects ? (
      <div></div>
    ) : (
      <div>
        <h1 className="projects-h1">PROJECTS</h1>

        <div className="row project-page-projects">
          {projects.map((project, index) => (
            <div
              key={index}
              className="col-sm-6"
              style={{ marginBottom: "3%" }}
            >
              <Link to={`/projects/${project.id}`}>
                <p>
                  <img src={project.img} alt="" className="project-images" />
                </p>
                {project.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default DisplayProjects;
