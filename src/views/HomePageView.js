import React, { useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import ConfirmitionModalComponent from "./ConfirmationModelComponent";
import { useNavigate } from "react-router";

function HomePageViewComponent() {
  const [modalShow, setModalShow] = useState(false);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    console.log("clicked yes");
    navigate("/happy"); // Navigate to the '/happy' page when the button is clicked
  };

  const customYesCursor = () => {
    // Change the cursor to the image with specified size
    document.getElementById("btn-yes").style.cursor =
      "url('https://i.ibb.co/GcGJZ4q/Stich-mouse-icon-removebg-preview.png') 0 0, auto";
  };

  const customNoCursor = () => {
    console.log("TRIGGRED NO FUNCTION");

    document.getElementById("btn-no").style.cursor =
      "url('https://i.ibb.co/Npmsmfj/Sadstich-removebg-preview.png') 0 0, auto";
  };

  return (
    <Container fluid style={{ height: "100vh", backgroundColor: "#FF5656" }}>
      <Row className="pt-5">
        <Col xs={12} className=" pt-5 d-flex justify-content-center">
          <img
            src="/assets/logo.png"
            style={{ width: "auto", height: "100%" }}
            alt="logo"
          />
        </Col>
      </Row>
      <Row>
        <Col xs={12} className="mt-5 pt-5 d-flex justify-content-center">
          <h1
            style={{
              fontFamily: "Leckerli One",
              fontSize: "5vh",
              color: "white",
            }}
          >
            {" "}
            Will you be my valentine?
          </h1>
        </Col>
      </Row>

      <Row>
        {/* Buttons Section */}
        <Col className="d-flex justify-content-center mt-4 pt-4">
          <Button
            id="btn-yes"
            onClick={() => handleButtonClick()}
            onMouseEnter={() => customYesCursor()}
            onMouseLeave={() => console.log("no longer hovering on yes")}
            variant="light"
            className=" me-5 custom-btn "
            style={{
              width: "500px",
              height: "215PX",
            }}
          >
            <p
              style={{
                fontFamily: "Leckerli One",
                fontSize: 60,
                color: "black",
              }}
            >
              Yes
            </p>
          </Button>
          <Button
            id="btn-no"
            variant="light"
            onMouseEnter={() => customNoCursor()}
            onClick={() => setModalShow(true)}
            style={{ width: "150px", height: "75px" }}
          >
            <p
              style={{
                fontFamily: "Leckerli One",
                fontSize: 25,
                color: "black",
              }}
            >
              No
            </p>
          </Button>
        </Col>
      </Row>
      <>
        <ConfirmitionModalComponent
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    </Container>
  );
}

export default HomePageViewComponent;
