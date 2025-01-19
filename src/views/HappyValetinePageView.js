import React, { useEffect, useRef } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";

function HappyValentinePageView() {
  const audioRef = useRef(null);

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
          <img
            src="https://i.redd.it/nb0lmgrfrf821.png"
            sizes="100%"
            alt="angry-image"
          />
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
            Pick you up tomorrow at 6Pm!
          </h2>
        </Col>
      </Row>
    </Container>
  );
}

export default HappyValentinePageView;
