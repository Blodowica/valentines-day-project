import React, { useEffect, useRef } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";

function DefaultValentinePageview() {
  const audioRef = useRef(null);
  const navigate = useNavigate();

  const fontStyle = {
    fontFamily: "Leckerli One, cursive",
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play();
      audioRef.current.volume = 0.1;
    }
  }, []);

  return (
    <Container
      fluid
      className="vh-100  d-flex flex-column justify-content-center"
      style={{ backgroundColor: "#F591A7" }}
    >
      {/* Audio Tag */}
      <audio ref={audioRef}>
        <source src="/assets/happy-background-sound.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>

      {/* GIF Image */}
      <Row className="justify-content-center mb-4">
        <Col xs={12} className="text-center">
          <img
            src="/assets/shaq-shimmy.gif"
            className="img-fluid"
            alt="happy-image"
            style={{ minWidth: "25%", height: "auto" }}
          />
        </Col>
      </Row>

      {/* Text Messages */}
      <Row className="justify-content-center text-center mb-3">
        <Col xs={12}>
          <h1 className="text-white fw-bold display-4" style={fontStyle}>
            Happy to hear that lover ❤️
          </h1>
        </Col>
      </Row>

      <Row className="justify-content-center text-center mb-4">
        <Col xs={12}>
          <h1 className=" display-4 fw-bold" style={fontStyle}>
            See you on Valentine’s Day after 6 PM! 😉
          </h1>
        </Col>
      </Row>

      {/* Button */}
      <Row className="justify-content-center">
        <Col xs={10} sm={8} md={6} lg={4} className="text-center">
          <Button
            variant="light"
            onClick={() => navigate("/choose")}
            className="w-100 py-3"
            style={{ fontSize: "1.5rem", ...fontStyle }}
          >
            Let's Plan the Date!
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default DefaultValentinePageview;
