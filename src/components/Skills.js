import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

function Skills() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        onClick={handleShow}
        style={{
          background: "linear-gradient(to bottom, #8a2be2, #ff1493)",
          marginLeft: "72%",
          marginTop: "-29%",
          padding: "1%",
          width: "8%",
          color: "black",
        }}
      >
        Skills
      </Button>

      <Offcanvas
        show={show}
        onHide={handleClose}
        style={{ background: "linear-gradient(to bottom, #8a2be2, #ff1493)" }}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Skills</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul>
            <li>HTML</li>
            <li>CSS - @keyframes animations</li>
            <li>Flexbox</li>
            <li>Git - GitHub</li>
            <li>Javascript</li>
            <li>Node Js</li>
            <li>DOM</li>
            <li>Bootstrap</li>
            <li>React</li>
            <li>WebAPIS</li>
            <li>Express Js</li>
            <li>MongoDB - Mongoose</li>
            <li>Endpoint CRUD</li>
            <li>Hashing Password</li>
            <li>Token JWT</li>
            <li>OAuth</li>
            <li>Cors</li>
            <li>Deploy</li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Skills;
