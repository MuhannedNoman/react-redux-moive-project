import React from "react";
import {Navbar} from 'react-bootstrap';
import {Container} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
import {NavDropdown} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import "../index.css";
import logo from "../netflix-logo.png";


const NavBar = () => {
  return (
    <>
      <Navbar fixed="top" bg="dark" variant="primary" expand="lg" className="nav">
        <Container>
          <Navbar.Brand href="#home">
           <img
              src={logo}
              width="215"
              height="50"
              className="d-inline-block align-top"
              alt="netflix-logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" >Home</Nav.Link>
              <Nav.Link href="#actors">Actors</Nav.Link>
              <Nav.Link href="#movies">Movies</Nav.Link>
              <NavDropdown title="Genre" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.2">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Comedy</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Horror</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Romance</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Drama</NavDropdown.Item> 
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <Button variant="danger" className="button" >LOGIN</Button>
        </Container>
      </Navbar>
  </>
  )
  
};

export default NavBar;
