import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Carousel from "react-bootstrap/Carousel";
import { useLocation, useNavigate } from "react-router";
import Button from "react-bootstrap/esm/Button";

function ChosenDateDetailsPageView() {
  const location = useLocation();
  const { id, url, title, boldDescription, description } =
    location.state.date || {};

  const navigate = useNavigate();

  // Array of images for the carousel
  const images = [
    "https://sm.askmen.com/askmen_in/article/h/how-to-cho/how-to-choose-a-date-night-movie_ff9d.jpg",
    "https://sm.askmen.com/askmen_in/article/h/how-to-cho/how-to-choose-a-date-night-movie_ff9d.jpg",
    "https://sm.askmen.com/askmen_in/article/h/how-to-cho/how-to-choose-a-date-night-movie_ff9d.jpg",
  ];
  console.log(location.state.date);

  // Custom Google Font for fancy text
  const fancyFontStyle = {
    fontFamily: "Leckerli One",
    fontSize: 40,
    color: "white",
    display: "flex",
    justifyContent: "center",
  };
  const basicFonty = {
    fontFamily: "Leckerli One",
    fontSize: 30,
    color: "black",
    maxWidth: "100%",
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
  };

  // Dynamic messages based on `id` with pet names included
  const getMessage = (id) => {
    switch (id) {
      case "MovieDate":
        return (
          <div className=" p-4 m-4">
            <p style={basicFonty}>
              I’m so excited, babe! 🍿🎬 Our movie night is going to be
              fantastic. We’ll cozy up with some snacks and enjoy a great film
              together. If we can agree on one 😅 Can’t wait to hold your hand
              while we watch the screen light up! 😘
            </p>
            <p style={fancyFontStyle}>
              I look forward to our movie date, lover! 💖
            </p>
          </div>
        );
      case "DinerDate":
        return (
          <div className=" p-4 m-4">
            <p style={basicFonty}>
              Lover 🥰, tonight is going to be magical. 🍽️🥂 A romantic dinner
              awaits us, and I can already imagine the laughter, the great food,
              and the sweet moments we’ll share together. Every bite will be
              special because you’re here with me, Skatje! 😍
            </p>
            <p style={fancyFontStyle}>
              I look forward to our restaurant date, my lil gremlin! 💕
            </p>
          </div>
        );
      case "StargazingDate":
        return (
          <div className=" p-4 m-4">
            <p style={basicFonty}>
              The stars are waiting for us, Bebe! 🌌✨ I can't wait to share
              this peaceful moment with you as we look up at the night sky. It’s
              going to be one of those nights where we feel like the world is
              ours. Let’s dream together under the stars, babe! 💫
            </p>
            <p style={fancyFontStyle}>
              I look forward to our stargazing date, Stinky😚! 🌙
            </p>
          </div>
        );
      case "OtherDate":
        return (
          <div className=" p-4 m-4">
            <p style={basicFonty}>
              Whatever we decide to do, babes, I know it’s going to be perfect.
              💫 Whether we go for a walk, try something new, or just enjoy each
              other’s company, I’ll be so happy to spend the time with you.
              Let’s make it a day to remember, amor! 😘
            </p>
            <p style={fancyFontStyle}>
              I look forward to our special date, Beautifull! 💖
            </p>
          </div>
        );
      default:
        return (
          <div className=" p-4 m-4">
            <p style={basicFonty}>
              I’m so excited for us, lover! 💫 Whatever we end up doing, I know
              it will be an unforgettable time. I’ll cherish every moment spent
              with you. 😘
            </p>
            <p style={fancyFontStyle}>I look forward to our date! 💖</p>
          </div>
        );
    }
  };

  // Dynamic wine image based on `id`
  const getWineImage = (id) => {
    switch (id) {
      case "MovieDate":
        return "https://i.ibb.co/pjr5MB6h/Wine-Glasses.png";
      case "StargazingDate":
        return "https://i.ibb.co/Kx2k8nWk/Raining-Love.png";
      case "OtherDate":
        return "https://i.ibb.co/Wpth7Mbn/Heart-Balloon.png"; // Placeholder for non-restaurant dates
      case "DinerDate":
        return "https://i.ibb.co/9kCKrHpX/Wine.png"; // Wine image for restaurant
      default:
        return "https://i.ibb.co/Wpth7Mbn/Heart-Balloon.png"; // Default placeholder
    }
  };

  return (
    <Container
      fluid
      style={{
        backgroundColor: "#F591A7",
        height: "100vh",
        width: "100vw",
        padding: 0,
        overflow: "hidden",
      }}
    >
      <Row className="m-0 h-100">
        {/* Left Column (Card - Full Height) */}
        <Col lg={3} md={4} sm={5} xs={12} className="p-0 d-flex">
          <Card
            className="w-100 d-flex flex-column"
            style={{ height: "100vh", backgroundColor: "white" }}
          >
            <Card.Img
              className="p-2"
              variant="top"
              src={url}
              style={{
                maxHeight: "250px",
                objectFit: "cover",
                width: "100%",
              }}
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
                  src={getWineImage(id)}
                  alt="little logo"
                />
              </div>
            </Card.Body>
          </Card>
        </Col>

        {/* Right Column (Carousel + Extra Content) */}
        <Col lg={9} md={8} sm={7} xs={12} className="p-0 d-flex flex-column">
          {/* Carousel - 45% of height */}
          <div style={{ height: "45vh", overflow: "hidden" }}>
            <Carousel style={{ height: "100%" }}>
              {images.map((image, index) => (
                <Carousel.Item key={index} style={{ height: "100%" }}>
                  <img
                    className="d-block w-100"
                    src={image}
                    alt={`Slide ${index + 1}`}
                    style={{
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </div>

          {/* Extra Content Below Carousel */}
          <div
            style={{
              height: "40vh",
              backgroundColor: "#F591A7",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              padding: "1rem",
            }}
          >
            {/* Dynamic Date Message */}
            {getMessage(id)}
          </div>

          {/* Confirmation Button */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "1rem",
            }}
          >
            <Button
              className="d-flex justify-content-center"
              onClick={() => navigate("/")}
              style={{
                minWidth: "50%",
                fontFamily: "Leckerli One",
                fontSize: 25,
                color: "white",
              }}
              variant="danger"
              size="lg"
            >
              It's a Date!
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ChosenDateDetailsPageView;
