import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Footer = () => {
  return (
    <>
      <Container id="footer">
        <Row>
          <Col>
            <h2
              style={{
                marginTop: "8%",
                marginBottom: "8%",
                marginLeft: "46%",
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
            <h5
              className="text-white"
              style={{ marginLeft: "35%", marginBottom: "2%" }}
            >
              E-mail: elisa.fambrini@yahoo.it
            </h5>
            <h5
              className="text-white"
              style={{ marginLeft: "40%", marginBottom: "6%" }}
            >
              Cell. +0039-3287024665
            </h5>
          </Col>
          <Col>
            {" "}
            <h2
              style={{
                marginTop: "8%",
                marginBottom: "8%",
                marginLeft: "41%",
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
            <h5 style={{ marginLeft: "43%", marginBottom: "2%" }}>
              <a
                href="https://www.linkedin.com/in/elisa-fambrini-422b04274/"
                target="_blank"
                style={{ color: "white", textDecoration: "none" }}
              >
                LinkedIn
              </a>
            </h5>
            <h5 style={{ marginLeft: "42%", marginBottom: "2%" }}>
              <a
                href="https://www.instagram.com/elisafambrini/"
                target="_blank"
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
