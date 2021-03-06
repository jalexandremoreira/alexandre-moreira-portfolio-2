import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div>
      <h1 className="landing-page-h1">Alexandre Moreira</h1>
      <h3 className="landing-page-h3">Web Development Portfolio</h3>
      <p id="landing-page-link">
        <Link to="/projects" style={{ fontStyle: "italic" }}>
          Click here to view the projects.
        </Link>
      </p>
    </div>
  );
};

export default LandingPage;
