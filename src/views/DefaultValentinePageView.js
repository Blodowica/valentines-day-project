import React, { useEffect, useRef } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/esm/Button";
import { useNavigate } from "react-router";

function DefaultValentinePageview() {
  const audioRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play();
      audioRef.current.volume = 0.1;
    }
  }, []);
  return (
    <Container fluid style={{ height: "100vh", backgroundColor: "#F591A7" }}>
      {/* Audio Tag */}
      <audio ref={audioRef}>
        <source
          src="/assets/happy-background-sound.mp3" // Path to the audio file in the public folder
          type="audio/mp3"
        />
        Your browser does not support the audio element.
      </audio>

      <Row>
        <Col
          lg={12}
          className="d-flex justify-content-center mt-5 pt-5"
          style={{ width: "100%", height: "100%" }}
        >
          <img src="/assets//shaq-shimmy.gif" sizes="100%" alt="happy-image" />
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center pt-5 mt-2">
          <h1
            style={{
              fontFamily: "Leckerli One",
              fontSize: "7vh",
              color: "white",
              textAlign: "center",
            }}
          >
            Happy to hear that lover ❤️
          </h1>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center">
          <h2
            style={{
              fontFamily: "Leckerli One",
              fontSize: 50,
              color: "black",
              textAlign: "center",
            }}
          >
            See you on valentine's day after 6Pm! 😉
          </h2>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center mt-4  pt-2">
          <Button
            variant="light"
            onClick={() => navigate("/choose")}
            style={{
              width: "60%",
              fontFamily: "Leckerli One",
              fontSize: 25,
              color: "black",
            }}
          >
            Let's Plan the date!
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default DefaultValentinePageview;
