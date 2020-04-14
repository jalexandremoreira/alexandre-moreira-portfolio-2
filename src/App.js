import React from "react";
import NavBar from "./components/navBar";
import LandingPage from "./components/landingPage";
import DisplayProjects from "./components/displayProjects";
import ProjectPage from "./components/projectPage";
import About from "./components/about";
import NotFound from "./components/notFound";

import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <div className="custom-container">
        <Switch>
          <Route path="/home" component={LandingPage} />
          <Route path="/projects/:id" component={ProjectPage} />
          <Route path="/projects" component={DisplayProjects} />
          <Route path="/about" component={About} />
          <Route path="/not-found" component={NotFound} />
          <Redirect from="/" exact to="/home" />
          <Redirect to="/not-found" />
        </Switch>
      </div>
    </React.Fragment>
  );
}

export default App;
