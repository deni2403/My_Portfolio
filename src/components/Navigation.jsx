import React from 'react';
import { Nav, Navbar, Offcanvas, Container, Button } from 'react-bootstrap';
import { AiOutlineMenu } from 'react-icons/ai';

function Navigation() {
  return (
    <Navbar sticky="top" expand="md" className="mynavbar mb-3 p-3">
      <Container>
        <Navbar.Brand href="#">
          <span className="logo-brand">deni</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar-expand-md">
          <span className="my-toggler-icon">
            <AiOutlineMenu />
          </span>
        </Navbar.Toggle>
        <Navbar.Offcanvas
          id="offcanvasNavbar-expand-sm"
          aria-labelledby="offcanvasNavbarLabel-expand-md"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel-expand-md">
              <h3 className="my-toggler-label">Navigation</h3>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="#hero">About Me</Nav.Link>
              <Nav.Link href="#portfolio">Portfolio</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
              <Nav.Link href="/Deni_CV.pdf">
                <Button className="resume-button">Resume</Button>
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default Navigation;
