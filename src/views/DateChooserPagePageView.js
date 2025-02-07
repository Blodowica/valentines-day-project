import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import ChooseDateNavBarComponent from "../Components/ChooseDateNavBarComponent";
import { useNavigate } from "react-router";

function DateChooserPageViewComponent() {
  const navigate = useNavigate();

  const dates = [
    {
      id: "DinerDate",
      title: "Romantic Dinner Date",
      boldDescription:
        "Imagine the soft glow of candlelight flickering across your table as you sip fine wine and share an intimate, multi-course meal.",
      description:
        "The air is filled with the tantalizing aroma of delicious food, and the chemistry between us  is undeniable. The atmosphere is cozy, the conversation flows effortlessly, and every glance exchanged feels like an invitation to take the night to the next level.",
      url: "https://margauxsrestaurant.com/wp-content/uploads/hitesh-dewasi-5JwBbnyZzfc-unsplash-scaled.jpg",
    },
    {
      id: "MovieDate",
      title: "Movie Night",
      boldDescription:
        "Dim the lights, wrap yourselves in a blanket, and let the magic unfold on-screen.",
      description:
        "Whether you're watching a passionate romance or a sultry thriller, movie night has never been so romantic. Get lost in the heat of the moment as we cuddle closer, our hearts beating in sync.",
      url: "https://sm.askmen.com/askmen_in/article/h/how-to-cho/how-to-choose-a-date-night-movie_ff9d.jpg",
    },
    {
      id: "StargazingDate",
      title: "Star Gazing Date",
      boldDescription:
        "Sometimes the best way to spend an evening together is beneath the vast, starlit sky.",
      description:
        "The world fades away as we lie side by side, surrounded by the twinkling stars above. Every touch feels electrified, and there's something so intimate about sharing the quiet of the night with someone special.",
      url: "https://dateboxclub.com/cdn/shop/articles/StarGazing2.jpg?v=1706142251",
    },
    {
      id: "OtherDate",
      title: "Other Date",
      boldDescription:
        "Didn’t like any of the options? Or maybe you’ve got an even better idea in mind, Babes?",
      description:
        "If you’re looking for something a little different, the Mystery Date is basically your recommendations. It’s all about breaking away from the usual and letting the night unfold however it feels right.",
      url: "https://media.istockphoto.com/id/1302846377/vector/speech-bubble-with-question-mark-vector-illustration.jpg?s=612x612&w=0&k=20&c=IjtXw2DACsBELihPaovn9XUXcIWwjB8GP1D8EUC2QlA=",
    },
  ];

  function ChooseDate(date) {
    navigate("/detailsDate", { state: { date } });
  }

  return (
    <>
      {/* Full-screen Container */}
      <Container
        fluid
        style={{
          backgroundColor: "#FF5656",
          padding: 0,
          height: "100%",
          overflow: "auto",
        }}
      >
        {/* Navbar */}
        <ChooseDateNavBarComponent />

        {/* Main content */}
        <Container
          fluid
          style={{ padding: "1rem" }}
          className="justify-content-center d-flex"
        >
          <Row
            className="justify-content-center g-4 mt-4 pt-4"
            style={{ width: "100%" }}
          >
            {dates.map((date) => (
              <Col key={date.id} lg={3} md={4} sm={6} xs={12}>
                <Card
                  className="h-100 p-3 d-flex flex-column"
                  style={{ backgroundColor: "white" }}
                >
                  <Card.Img
                    className="mt-3 p-2"
                    variant="top"
                    src={date.url}
                    style={{
                      height: "250px",
                      objectFit: "cover",
                      width: "100%",
                    }}
                  />
                  <Card.Body
                    className="d-flex flex-column align-items-center"
                    style={{ flexGrow: 1, maxWidth: "400px", margin: "0 auto" }}
                  >
                    <Card.Title
                      style={{ fontSize: "1.2rem", fontWeight: "bold" }}
                    >
                      {date.title}
                    </Card.Title>
                    <Card.Text style={{ fontSize: "1rem", color: "#555" }}>
                      <strong>{date.boldDescription}</strong>
                      <br />
                      {date.description}
                    </Card.Text>
                  </Card.Body>
                  <Button
                    onClick={() => ChooseDate(date)}
                    variant="primary"
                    className="mt-auto"
                    style={{ width: "100%" }}
                  >
                    Choose Date
                  </Button>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default DateChooserPageViewComponent;
