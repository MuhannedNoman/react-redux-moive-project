import React from "react";
import {
  Button,
  Container,
  Form,
  FormControl,
  InputGroup,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { Search } from "react-bootstrap-icons";

import "./navbar.css";

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt="This is not Netflix"
            src="/notflix-logo.svg"
            width="135"
            height="36"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Movies" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Adventure</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Animation</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Comedy</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">All Movies</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="">Actors</Nav.Link>
            {/* Show bookmarked only if user is logged in */}
            <Nav.Link href="">Bookmarked</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <InputGroup className="me-3">
              <FormControl
                className="navbar-search"
                type="search"
                placeholder="Search movies and actors"
                aria-label="Search"
              />
              <Button variant="primary">
                <Search />
              </Button>
            </InputGroup>
          </Form>
          <Form className="mx-2">
            <Form.Check type="switch" id="custom-switch" label="Dark" />
          </Form>
          <Navbar.Text className="ms-2">
            <a href="#login">Login</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
