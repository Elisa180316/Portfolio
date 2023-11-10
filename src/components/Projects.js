import React  from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Album from "../img/Album.png";
import Blog from "../img/Blog.png";
import BooksApi from "../img/BooksApi.png";
import Chessboard from "../img/Chessboard.png";
import EpiBooks from "../img/EpiBooks.png";
import Geek from "../img/Geek.png";
import Honey from "../img/Honey.png";
import Netflix from "../img/Netflix.png";
import Spotify from "../img/Spotify.png";
import Ricetta from "../img/Ricetta.png";
import Quiz from "../img/Quiz.png";
import UserList from "../img/UserList.png";
import PSH from "../img/PSH.png";

// import "../styles/album.css";

const Projects = () => {
  // useEffect(() => {
  //   // Function to set the same height for cards in each row
  //   function setSameCardHeight() {
  //     const rows = document.querySelectorAll(".project-row");

  //     rows.forEach((row) => {
  //       let maxHeight = 0;
  //       const cards = row.querySelectorAll(".card");

  //       cards.forEach((card) => {
  //         const cardHeight = card.offsetHeight;
  //         if (cardHeight > maxHeight) {
  //           maxHeight = cardHeight;
  //         }
  //       });

  //       cards.forEach((card) => {
  //         card.style.minHeight = `${maxHeight}px`;
  //       });
  //     });
  //   }

  //   setSameCardHeight();
  //   window.addEventListener("resize", setSameCardHeight);
  //   return () => {
  //     window.removeEventListener("resize", setSameCardHeight);
  //   };
  // }, []);
  return (
    <>
      <h2 id="projects"
        style={{
          textAlign: "center",
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
          Progetti
        </span>
      </h2>
      

      
      <div style={{ marginLeft: "4%", height:"80% !important", justifyContent: "justify-content-center"}}>
        <Row
        className='row-cols-1 row-cols-md-3 g-4'
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
            <Card className='h-100' style={{ width: "15rem" }}>
              <Card.Img
                variant="top"
                src={Album}
                alt="Album"
                style={{ maxWidth: "100%", maxHeight: "100%", marginTop: "20px" }}
              />
              <Card.Body style={{background: "linear-gradient(to bottom, white, #8a2be2, #ff1493)"}}>
                <Card.Title className="text-dark" style= {{marginTop: "20%"}}>
                  Web site creato con HTML, CSS e Bootstrap
                </Card.Title>
                <Card.Text className="text-dark" >
                  Sito web tema musicale con NavBar dei link interni alla
                  pagina. Tabella con tracklist con possibilità di eliminare o
                  aggiungere tracce con l'apertura di un modale
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
            <Card className='h-100' style={{ width: "15rem" }}>
              <Card.Img
                variant="top"
                src={Blog}
                alt="Blog"
                style={{ maxWidth: "100%", maxHeight: "100%", marginTop: "20px" }}
              />
              <Card.Body style={{background: "linear-gradient(to bottom, white, #8a2be2, #ff1493)"}}>
                <Card.Title className="text-dark" style= {{marginTop: "20%"}}>
                  Blog creato con HTML, CSS e Bootstrap
                </Card.Title>
                <Card.Text className="text-dark">
                  Blog con NavBar, divisione articoli ed uso CSS avanzato
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
            <Card className='h-100' style={{ width: "15rem" }}>
              <Card.Img
                variant="top"
                src={BooksApi}
                alt="BooksApi"
                style={{ maxWidth: "100%", maxHeight: "100%", marginTop: "20px" }}
              />
              <Card.Body style={{background: "linear-gradient(to bottom, white, #8a2be2, #ff1493)"}}>
                <Card.Title className="text-dark" style= {{marginTop: "20%"}}>
                  Marketplace creato con HTML, CSS, Bootstrap ed API
                </Card.Title>
                <Card.Text className="text-dark">
                  Marketplace a tema libri con una homepage con libri da API con
                  possibilità di aggiungere al carrello ed
                  una barra di ricerca. Pagina dettaglio del libro selezionato.
                  Backend che consente di creare, modificare o eliminare un
                  prodotto (Con richieste HTTP: GET, POST, PATCH, DELETE)
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
            <Card className='h-100' style={{ width: "15rem" }}>
              <Card.Img
                variant="top"
                src={Chessboard}
                alt="Chessboard"
                style={{ maxWidth: "100%", maxHeight: "100%", marginTop: "20%" }}
              />
              <Card.Body style={{background: "linear-gradient(to bottom, white, #8a2be2, #ff1493)"}}>
                <Card.Title className="text-dark" style= {{marginTop: "20%"}}>Chessboard</Card.Title>
                <Card.Text className="text-dark">
                  Scacchiera creata con HTML e CSS avanzato
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
            <Card className='h-100' style={{ width: "15rem" }}>
              <Card.Img
                variant="top"
                src={EpiBooks}
                alt="EpiBooks"
                style={{ maxWidth: "100%", maxHeight: "100%",  marginTop: "20px" }}
              />
              <Card.Body style={{background: "linear-gradient(to bottom, white, #8a2be2, #ff1493)"}}>
                <Card.Title className="text-dark" style= {{marginTop: "20%"}}>EpiBooks</Card.Title>
                <Card.Text className="text-dark">
                  Sito web e-commerce a tema libri con dati provenienti da API
                  creato con React, Redux e Boostrap. Contiene pagina dettaglio
                  del libro selezionato, funzione carrello, rotte per
                  navigazione verso altre pagine del sito.
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
            <Card className='h-100' style={{ width: "15rem" }}>
              <Card.Img
                variant="top"
                src={Geek}
                alt="Geek"
                style={{ maxWidth: "100%", maxHeight: "100%", marginTop: "20px" }}
              />
              <Card.Body style={{background: "linear-gradient(to bottom, white, #8a2be2, #ff1493)"}}>
                <Card.Title className="text-dark" style= {{marginTop: "20%"}}>Geeks Clone</Card.Title>
                <Card.Text className="text-dark">
                  Clone Sito web Geeks creato con React e Bootstrap
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
            <Card className='h-100' style={{ width: "15rem" }}>
              <Card.Img
                variant="top"
                src={Honey}
                alt="Honey"
                style={{ maxWidth: "100%", maxHeight: "100%", marginTop: "20px" }}
              />
              <Card.Body style={{background: "linear-gradient(to bottom, white, #8a2be2, #ff1493)"}}>
                <Card.Title className="text-dark"style= {{marginTop: "20%"}}>Honey</Card.Title>
                <Card.Text className="text-dark">
                  Sito web pubblicitario tema alimentare creato con HTML e CSS
                  avanzato
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
            <Card className='h-100' style={{ width: "15rem" }}>
              <Card.Img
                variant="top"
                src={Spotify}
                alt="Spotify"
                style={{ maxWidth: "100%", maxHeight: "100%", marginTop: "20px" }}
              />
              <Card.Body style={{background: "linear-gradient(to bottom, white, #8a2be2, #ff1493)"}}>
                <Card.Title className="text-dark" style= {{marginTop: "20%"}}>Spotify Clone</Card.Title>
                <Card.Text className="text-dark">
                  Clone Sito web Spotify creato con HTML, Boostrap, CSS con dati
                  ricevuti da API
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
            <Card className='h-100' style={{ width: "15rem" }}>
              <Card.Img
                variant="top"
                src={Netflix}
                alt="Netflix"
                style={{ maxWidth: "100%", maxHeight: "100%", marginTop: "20px" }}
              />
              <Card.Body style={{background: "linear-gradient(to bottom, white, #8a2be2, #ff1493)"}}>
                <Card.Title className="text-dark" style= {{marginTop: "20%"}}>Netflix Clone</Card.Title>
                <Card.Text className="text-dark">
                  Clone Sito web Netflix creato con HTML, Boostrap, CSS avanzato
                  con animazioni e dati ricevuti da API
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
            <Card className='h-100' style={{ width: "15rem" }}>
              <Card.Img
                variant="top"
                src={Ricetta}
                alt="Ricetta"
                style={{ maxWidth: "100%", maxHeight: "100%", marginTop: "20px" }}
              />
              <Card.Body style={{background: "linear-gradient(to bottom, white, #8a2be2, #ff1493)"}}>
                <Card.Title className="text-dark" style= {{marginTop: "20%"}}>Simply Recipes</Card.Title>
                <Card.Text className="text-dark">
                  Sito Simply Recipes creato con HTML e CSS.
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
            <Card className='h-100' style={{ width: "15rem" }}>
              <Card.Img
                variant="top"
                src={Quiz}
                alt="Quiz"
                style={{ maxWidth: "100%", maxHeight: "100%", marginTop: "20px" }}
              />
              <Card.Body style={{background: "linear-gradient(to bottom, white, #8a2be2, #ff1493)"}}>
                <Card.Title className="text-dark" style= {{marginTop: "20%"}}>Quiz</Card.Title>
                <Card.Text className="text-dark">
                  Gioco a quiz creato con HTML, CSS e Javascript con
                  manipolazione del DOM. Con domande singole costruite in array
                  di oggetti, domande random, segnalazione punteggio ad ogni
                  domanda, cambio colore sfondo in base alla risposta
                  selezionata ed indicazione del punteggio finale.
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
            <Card className='h-100' style={{ width: "15rem" }}>
              <Card.Img
                variant="top"
                src={UserList}
                alt="UserList"
                style={{ maxWidth: "100%", maxHeight: "100%", marginTop: "20px" }}
              />
              <Card.Body style={{background: "linear-gradient(to bottom, white, #8a2be2, #ff1493)"}}>
                <Card.Title className="text-dark" style= {{marginTop: "20%"}}>User List</Card.Title>
                <Card.Text className="text-dark">
                  User List creata con HTML, CSS, Boostrap e Javascript.
                  Recupero dati da API con funzione di filtro, cancellazione e
                  ricerca ascendente/discendente.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col
            xs={12}
            sm={6}
            md={6}
            style={{ flex: "0 0 calc(25% - 20px)", marginBottom: "20px" }}
          >
            <Card className='h-100' style={{ width: "170%", height:"100%",  }}>
              <Card.Img
                variant="top"
                src={PSH}
                alt="PSH"
                style={{ maxWidth: "100%", maxHeight: "100%", marginTop: "20px" }}
              />
              <Card.Body style={{background: "linear-gradient(to bottom, white, #8a2be2, #ff1493)"}}>
                <Card.Title className="text-dark">
                  Private sell home - Fullstack Project
                </Card.Title>
                <Card.Text className="text-dark" >
                  Sito web responsive per compravendita immobiliare tra privati.
                  Progetto Full stack. Backend: Server MongoDb, con librerie
                  BCrypt, Cors, Dotenv, Express, JsonWebToken, Mongoose, Multer
                  e Nodemon. Frontend: React, con librerie React-Icons,
                  React-Redux, React-router-dom, React-Bootstrap, Email Js e
                  JWT-decode.La NavBar porta alle rotte selezionate, è presente
                  un hero per la ricerca di immobili, il main è composto da un
                  carousel pubblicitario. L'utente loggato può contattare il
                  venditore e tramite rotte protette e può pubblicare o visionare
                  i propri annunci.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
      ;
    </>
  );
};

export default Projects;
