import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Navigation = () => {
  return (
    <>
      <Navbar style={{ backgroundColor: "rgb(41, 39, 39)" }}>
        <Container>
          <Navbar.Brand
            style={{ color: "#dc1ddc", fontSize: "24px"}}
            href="#home"
          >
            HOME
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link style={{ color: "white", fontSize: "20px", paddingLeft: "0%", paddingRight: "0%", whiteSpace: "nowrap", }} href="#home">
              SU DI ME
            </Nav.Link>
            <Nav.Link
              style={{ color: "white", fontSize: "20px" }}
              href="#projects"
            >
              PROGETTI
            </Nav.Link>
            <Nav.Link
              style={{ color: "white", fontSize: "20px" }}
              href="#footer"
            >
              CONTATTI
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
