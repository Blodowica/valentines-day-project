import React, { useEffect, useRef } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/esm/Button";
import { useNavigate } from "react-router";

function NotHappyValentinePageView() {
  const audioRef = useRef(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play(); // Start playing audio when the component loads
    }
  }, []);

  return (
    <Container fluid style={{ height: "100vh", backgroundColor: "#FF5656" }}>
      {/* Audio Tag */}
      <audio ref={audioRef}>
        <source
          src="/assets/mad-background-sound.mp3" // Path to the audio file in the public folder
          type="audio/mp3"
        />
        Your browser does not support the audio element.
      </audio>

      <Row>
        <Col
          xl
          className="d-flex justify-content-center mt-5 pt-5"
          style={{ width: "560px", height: "470px" }}
        >
          <img src="assets/gru-gun.jpg" sizes="100%" alt="angry-image" />
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center pt-5 mt-2">
          <h1
            style={{ fontFamily: "Leckerli One", fontSize: 80, color: "white" }}
          >
            This is no longer a question
          </h1>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center">
          <h2
            style={{ fontFamily: "Leckerli One", fontSize: 50, color: "white" }}
          >
            I better see you on the 14TH after 6Pm! 😤💢
          </h2>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center mt-5 pt-3">
          <Button
            variant="light"
            className="d-flex justify-content-center text-center"
            onClick={() => navigate("/choose")}
            style={{
              width: "30%",

              outlineColor: "black",
              fontFamily: "Leckerli One",
              fontSize: 25,
              color: "black",
            }}
          >
            Plan Date! 🗓️
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default NotHappyValentinePageView;
