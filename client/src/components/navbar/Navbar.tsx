import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import Settings from "./Settings/Settings";

const NavbarTop = () => {
  return (
    <Navbar bg="danger" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Pomidoro App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#reset-all">Reset all</Nav.Link>
            <Settings />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarTop;
