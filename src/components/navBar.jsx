import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar className="navbar" expand="lg" variant="dark" fixed="top">
      <Navbar.Brand href="/">Alexandre Moreira</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/projects">Projects</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
        </Nav>
        <Nav>
          <span>
            <a
              className="navbar-icons"
              href="https://github.com/jalexandremoreira"
              target="_blank"
              style={{ marginRight: "15px" }}
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              className="navbar-icons"
              href="https://www.linkedin.com/in/alexandre-moreira-126095b6/"
              target="_blank"
            >
              <i className="fab fa-github"></i>
            </a>
          </span>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
