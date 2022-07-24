import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import Settings from "./Settings/Settings";
import { NavbarProps } from "../../interfaces";

const NavbarTop:React.FC<NavbarProps> = ({conf}) => {
  return (
    <Navbar bg="danger" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Pomidoro App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#reset-all">Reset all</Nav.Link>
            <Settings conf={conf} />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarTop;
