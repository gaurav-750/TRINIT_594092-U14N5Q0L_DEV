import React from 'react'
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
const Logo = require("../../img/logo.PNG");
const Full_Logo = require("../../img/full_logo.PNG");
import("./MyNavbar.css");

const MyNavbar = () => {
  return (
    <Navbar  bg="light" expand="sm" className=" nav-home">
          <Container fluid>
            <Navbar.Brand href="#">
              <img src={Full_Logo} alt="logo" className="logo_img_css" /> 
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={"offcanvasNavbar-expand-sm"} />
            <Navbar.Offcanvas
              id={"offcanvasNavbar-expand-sm"}
              aria-labelledby={"offcanvasNavbarLabel-expand-sm"}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={"offcanvasNavbarLabel-expand-sm"}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="#action2">Link</Nav.Link>
                  <NavDropdown
                    title="Dropdown"
                    id={"offcanvasNavbarDropdown-expand-sm"}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Form className="d-flex">
                  {/* <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  /> */}
                  <Button variant="outline-none mx-1 loginBtnColorNavbar text-white">Login</Button>
                  <Button variant="outline-none mx-1 signinBtnColorNavbar text-white">Sign Up</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
    </Navbar>
  )
}

export default MyNavbar