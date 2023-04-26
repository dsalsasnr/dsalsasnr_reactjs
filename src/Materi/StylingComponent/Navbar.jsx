import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "../Style/WebStyle.css";

export default class NavigationBar extends React.Component {
  render() {
    return (
      <Navbar bg="transparant" variant="dark" fixed="top" expand="lg">
        <Container>
          <Navbar.Brand href="#">SALSA</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">About</Nav.Link>
              <Nav.Link href="#action2">Project</Nav.Link>
              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Social Media</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Resume</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
