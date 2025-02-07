import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import ConfirmitionModalComponent from "./ConfirmationModelComponent";
import { useNavigate } from "react-router";

// Import Google Font
const fontStyle = {
  fontFamily: "Leckerli One, cursive",
};

function HomePageViewComponent() {
  const [modalShow, setModalShow] = useState(false);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    console.log("clicked yes");
    navigate("/happy");
  };

  const customYesCursor = () => {
    document.getElementById("btn-yes").style.cursor =
      "url('https://i.ibb.co/GcGJZ4q/Stich-mouse-icon-removebg-preview.png') 0 0, auto";
  };

  const customNoCursor = () => {
    console.log("TRIGGRED NO FUNCTION");
    document.getElementById("btn-no").style.cursor =
      "url('https://i.ibb.co/Npmsmfj/Sadstich-removebg-preview.png') 0 0, auto";
  };

  return (
    <Container
      fluid
      className="vh-100 bg-danger text-center d-flex flex-column justify-content-center"
    >
      {/* Logo */}
      <Row className="justify-content-center mb-4">
        <Col xs={12}>
          <img
            src="/assets/logo.png"
            className="img-fluid"
            style={{ maxWidth: "80%", height: "auto" }}
            alt="logo"
          />
        </Col>
      </Row>

      {/* Heading */}
      <Row className="justify-content-center mb-4">
        <Col xs={12}>
          <h1 className="text-white display-4 fw-bold" style={fontStyle}>
            Will you be my valentine?
          </h1>
        </Col>
      </Row>

      {/* Buttons - Yes and No side by side */}
      <Row className="justify-content-center">
        {/* Yes Button - Larger Height */}
        <Col xs={8} sm={6} md={5} lg={4} className="text-end">
          <Button
            id="btn-yes"
            onClick={handleButtonClick}
            onMouseEnter={customYesCursor}
            variant="light"
            className="w-100 py-4"
            style={{ height: "215px", fontSize: "60px", ...fontStyle }}
          >
            Yes
          </Button>
        </Col>

        {/* No Button - Smaller */}
        <Col xs={4} sm={3} md={2} lg={2} className="text-start">
          <Button
            id="btn-no"
            variant="light"
            onMouseEnter={customNoCursor}
            onClick={() => setModalShow(true)}
            className="w-100 py-2"
            style={{ height: "75px", fontSize: "25px", ...fontStyle }}
          >
            No
          </Button>
        </Col>
      </Row>

      {/* Modal */}
      <ConfirmitionModalComponent
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </Container>
  );
}

export default HomePageViewComponent;
