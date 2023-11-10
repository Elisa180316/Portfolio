import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Footer = () => {
  return (
    <>
      <Container id="footer">
  <Row>
    <Col xs={12} md={6} className="text-center mb-4">
      <h2
        style={{
          marginTop: "8%",
          marginBottom: "8%",
          fontSize: "250%",
        }}
      >
        <span
          style={{
            background: "linear-gradient(60deg, white, purple, blue)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Contatti
        </span>
      </h2>
      <h5 className="text-white mb-2">
        E-mail: elisa.fambrini@yahoo.it
      </h5>
      <h5 className="text-white">
        Cell. +0039-3287024665
      </h5>
    </Col>
    <Col xs={12} md={6} className="text-center">
      <h2
        style={{
          marginTop: "8%",
          marginBottom: "8%",
          fontSize: "250%",
        }}
      >
        <span
          style={{
            background: "linear-gradient(60deg, white, purple, blue)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Social
        </span>
      </h2>
      <h5 style={{ marginBottom: "2%" }}>
        <a
          href="https://www.linkedin.com/in/elisa-fambrini-422b04274/"
          target="_blank"
          rel="noreferrer"
          style={{ color: "white", textDecoration: "none" }}
        >
          LinkedIn
        </a>
      </h5>
      <h5 style={{ marginBottom: "2%" }}>
        <a
          href="https://www.instagram.com/elisafambrini/"
          target="_blank"
          rel="noreferrer"
          style={{ color: "white", textDecoration: "none" }}
        >
          Instagram
        </a>
      </h5>
    </Col>
  </Row>
</Container>

    </>
  );
};

export default Footer;
