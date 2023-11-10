import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export const AboutMe = () => {
  return (
    <>
      <h2
  id="features"
  style={{
    textAlign: "center",
    marginTop: "8%",
    marginBottom: "8%",
    marginLeft: "-2%",
    fontSize: "250%",
  }}
>
  <span
    style={{
      background: "linear-gradient(60deg,  purple, blue)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      fontSize: "100%",
    }}
  >
    Su di me
  </span>
</h2>




      <div style={{ marginLeft: "10%" }}>
        <Row
          style={{
            flexWrap: "wrap",
            justifyContent: "space-between",
            display: "flex",
            color: "white",
            padding: "20px",
            textAlign: "center",
            ...(window.innerWidth <= 600 && {
              marginLeft: '11%',
            }),
          }}
        >
          <Col
            xs={12}
            sm={6}
            md={3}
            style={{ flex: "0 0 calc(25% - 20px)", marginBottom: "20px" }}
          >
            <Card
              style={{
                width: "12rem",
                background: "linear-gradient(to bottom, #8a2be2, #ff1493)",
                height: "100%",
                borderRadius: "50px 20px",
              }}
            >
              <Card.Body>
                <Card.Title>Determinazione</Card.Title>
                <Card.Text>
                  Metto passione e determinazione in tutto quello che faccio per
                  raggiungere gli obiettivi prefissati.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col
            xs={12}
            sm={6}
            md={3}
            style={{ flex: "0 0 calc(25% - 20px)", marginBottom: "20px" }}
          >
            <Card
              style={{
                width: "12rem",
                background: "linear-gradient(to bottom, #8a2be2, #ff1493)",
                height: "100%",
                borderRadius: "50px 20px",
                paddingTop: "8%",
              }}
            >
              <Card.Body>
                <Card.Title>Passione</Card.Title>
                <Card.Text>
                  Appassionata nello sviluppo di app e siti web
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col
            xs={12}
            sm={6}
            md={3}
            style={{ flex: "0 0 calc(25% - 20px)", marginBottom: "20px" }}
          >
            <Card
              style={{
                width: "12rem",
                background: "linear-gradient(to bottom, #8a2be2, #ff1493)",
                height: "100%",
                borderRadius: "50px 20px",
                paddingTop: "8%",
              }}
            >
              <Card.Body>
                <Card.Title>Dinamicità</Card.Title>
                <Card.Text>Adoro far prendere vita alle pagine web</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col
            xs={12}
            sm={6}
            md={3}
            style={{ flex: "0 0 calc(25% - 20px)", marginBottom: "20px" }}
          >
            <Card
              style={{
                width: "12rem",
                background: "linear-gradient(to bottom, #8a2be2, #ff1493)",
                height: "100%",
                borderRadius: "50px 20px",
                paddingTop: "8%",
              }}
            >
              <Card.Body>
                <Card.Title>Curiosità</Card.Title>
                <Card.Text>
                  Interessata a scoprire ed imparare nuove tecnologie
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>

      <Card className="mx-auto mt-4 text-center" style={{ width: "80%", backgroundColor: "rgb(41, 39, 39)" }}>
        <Card.Body>
          <Card.Text className="text-white" style={{ fontSize: "145%", lineHeight: "165%", textAlign: "justify" }}>
            Ho appena completato un corso per Full Stack Web Developer intensivo di 6 mesi presso Epicode e sono alla ricerca di un ruolo come programmatrice preferibilmente completamente da remoto ed in un'azienda che si dedichi alla formazione. Ho una propensione al teamwork, al problem-solving ed un approccio positivo nei confronti delle nuove tecnologie mettendo passione e determinazione in tutto quello che faccio per raggiungere gli obiettivi prefissati e sono desiderosa di imparare nuove tecnologie.
          </Card.Text>
        </Card.Body>
      </Card>
      
    </>
  );
};
