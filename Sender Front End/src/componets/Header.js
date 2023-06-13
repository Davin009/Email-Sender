import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export const Header = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="bg-info" variant="info">
        <Container>
          <Navbar.Brand href="#home">Send_Email</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#Home">Home</Nav.Link>
              <Nav.Link href="#About">About</Nav.Link>
              <Nav.Link href="#Contact">Contact</Nav.Link>

            </Nav>
           
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
