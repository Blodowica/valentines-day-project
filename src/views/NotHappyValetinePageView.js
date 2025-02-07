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
  const fontStyle = {
    fontFamily: "Leckerli One, cursive",
  };

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

      <Row className="justify-content-center ">
        <Col xs={12} className="text-center" style={{ maxHeight: "50vh" }}>
          <img
            src="/assets/gru-gun.jpg"
            className="img-fluid"
            alt="happy-image"
            style={{ maxHeight: "90%", width: "auto", height: "100%" }}
          />
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center pt-5 mt-2">
          <h1 style={{ fontFamily: "Leckerli One", color: "white" }}>
            This is no longer a question
          </h1>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center">
          <h1
            className="display-6 fw-bold"
            style={{ color: "black", textAlign: "center", ...fontStyle }}
          >
            I better see you on the 14TH after 6Pm! 😤💢
          </h1>
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
