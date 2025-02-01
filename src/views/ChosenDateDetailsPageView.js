import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/Form";
import { useLocation, useNavigate } from "react-router";
import { Alert } from "react-bootstrap";

function ChosenDateDetailsPageView() {
  const location = useLocation();
  const { id, url, title, boldDescription, description } =
    location.state.date || {};

  const navigate = useNavigate();
  const [dateIdea, setDateIdea] = useState("");
  const [confirmedIdea, setConfirmedIdea] = useState(null);
  const [buttonText, setButtonText] = useState("Great, It's a Date!");
  const [showMessage, setShowMessage] = useState(false);
  const [showAlert, setShowAlert] = useState(false); // State to control the alert

  const handleButtonClick = () => {
    if (id === "OtherDate") {
      if (buttonText === "Sounds Like a Plan!") {
        navigate("/yay");
      } else if (dateIdea.trim() === "" && !confirmedIdea) {
        setShowAlert(true); // Show the alert if input is empty
      } else if (dateIdea.trim() === "") {
        setShowAlert(true); // Show the alert if input is empty
      } else {
        setConfirmedIdea(dateIdea);
        setButtonText("Sounds Like a Plan!");
        setShowMessage(true);
        setShowAlert(false); // Show the alert if input is empty
      }
    } else {
      navigate("/yay");
    }
  };

  const images = Array.from(
    { length: 65 },
    (_, i) =>
      `assets/Carousel/IMG-20250201-WA${String(i + 1).padStart(4, "0")}.jpg`
  );

  const fancyFontStyle = {
    fontFamily: "Leckerli One",
    color: "white",
    fontSize: 25,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const basicFonty = {
    fontFamily: "Leckerli One",
    fontSize: 10,
    color: "black",
    maxWidth: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: "15%",
    marginLeft: "15%",
  };

  const basicFontyother = {
    fontFamily: "Leckerli One",
    fontSize: 25,
    color: "white",
    maxWidth: "100%",
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    marginRight: "10%",
    marginLeft: "10%",
  };

  const getMessage = (id) => {
    if (id === "OtherDate") {
      return (
        <>
          <div className=" mt-0 pt-0">
            <p style={basicFontyother}>
              Whatever we decide to do, babes, I know it’s going to be perfect.
              💫 Whether we go for a walk, try something new, or just enjoy each
              other’s company, I’ll be so happy to spend the time with you.
              Let’s make it a day to remember, amor! 😘
            </p>
          </div>
          <div style={{ width: "100%" }}>
            <Form className="mt-1">
              <Form.Group
                className="mb-4 pb-4"
                controlId="DateIdeaInput"
                style={{ justifyContent: "center", alignItems: "center" }}
              >
                <Form.Label
                  style={{
                    fontFamily: "Leckerli One",
                    fontSize: 20,
                    color: "black",
                    maxWidth: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  What do you have in mind?
                </Form.Label>
                <Form.Control
                  style={{
                    width: "50%",
                    display: "flex",
                    justifyContent: "center",
                    marginLeft: "25%",
                  }}
                  type="text"
                  placeholder="Insert Your Recommendation (Max 35 Characters)..."
                  maxLength={35}
                  value={dateIdea}
                  onChange={(e) => setDateIdea(e.target.value)}
                />
              </Form.Group>
            </Form>
            {showMessage && (
              <p
                className="fs-1 fs-md-2 fs-lg-3 text-white"
                style={basicFontyother}
              >
                That's a great idea Amor! We should go {dateIdea} ❤️
              </p>
            )}
          </div>
        </>
      );
    }

    // \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\//////////////////////////////////////////////////////////\\\\\\The message explaing the date /////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
    return (
      <div className="p-3 m-2">
        <p style={basicFonty}>{description}</p>
        <p style={fancyFontStyle}>I look forward to our date! 💖</p>
      </div>
    );
  };

  return (
    <Container
      fluid
      style={{
        backgroundColor: "#F591A7",
        height: "100vh",
        width: "100vw",
        padding: 0,
        overflowX: "hidden",
      }}
    >
      <Row className="m-0 h-100">
        <Col lg={3} md={4} sm={5} xs={12} className="p-0 d-flex">
          <Card
            className="w-100 d-flex flex-column"
            style={{ height: "100vh", backgroundColor: "white" }}
          >
            <Card.Img
              className="p-2"
              variant="top"
              src={url}
              style={{ maxHeight: "250px", objectFit: "cover", width: "100%" }}
            />
            <Card.Body className="text-center d-flex flex-column justify-content-between">
              <div>
                <Card.Title style={{ fontWeight: "bold" }}>{title}</Card.Title>
                <Card.Text style={{ fontSize: "1rem", color: "#555" }}>
                  <strong>{boldDescription}</strong>
                  <br />
                  {description}
                </Card.Text>
              </div>
              <div>❤️ Brandon & Christel - 14-11-2025 ❤️</div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <img
                  style={{ maxWidth: "110px" }}
                  src="https://i.ibb.co/Wpth7Mbn/Heart-Balloon.png"
                  alt="little logo"
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={9} md={8} sm={7} xs={12} className="p-0 d-flex flex-column">
          <div
            style={{
              height: "50vh",
              minHeight: "450px",
              maxHeight: "600px",
              position: "relative",
              backgroundColor: "black",
            }}
          >
            <Carousel style={{ height: "100%" }}>
              {images.map((image, index) => (
                <Carousel.Item key={index} style={{ height: "100%" }}>
                  <img
                    className="d-block w-100"
                    src={image}
                    alt={`Slide ${index + 1}`}
                    style={{
                      height: "100%",
                      width: "100%",
                      objectFit: "scale-down",
                      minHeight: "450px",
                      maxHeight: "450px",
                    }}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
          <div
            style={{
              flex: 1,
              backgroundColor: "#FF5C5C",
              padding: "1rem",
              overflowY: "auto",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {getMessage(id)}
            {showAlert && (
              <Alert
                variant="danger"
                onClose={() => setShowAlert(false)}
                dismissible
              >
                ⚠️ You must fill in a date idea to continue!
              </Alert>
            )}
            <Row>
              {/* <Col>
                <Button
                  onClick={() => navigate("/choose")}
                  variant="warning"
                  size="lg"
                >
                  I changed my mind
                </Button>
              </Col> */}
              {/* BUTTON IT'S A DATE  */}

              <Col>
                <Button
                  style={{ height: "100%" }}
                  onClick={handleButtonClick}
                  variant="light"
                  size="lg"
                >
                  {buttonText}
                </Button>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ChosenDateDetailsPageView;
