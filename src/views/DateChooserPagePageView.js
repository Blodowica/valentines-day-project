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
      romanticMessage:
        "A cup of coffee brews in 5 minutes. You could make 267,600 cups of coffee in 930 days.\n" +
        "The longest waiting list for a dinner reservation at a fine-dining restaurant was 930 days—it was a 3 Michelin-star restaurant in Tokyo.",
      description:
        "The air is filled with the tantalizing aroma of delicious food, and the chemistry between us is undeniable. The atmosphere is cozy, the conversation flows effortlessly, and every glance exchanged feels like an invitation to take the night to the next level.",
      url: "https://margauxsrestaurant.com/wp-content/uploads/hitesh-dewasi-5JwBbnyZzfc-unsplash-scaled.jpg",
    },
    {
      id: "MovieDate",
      title: "Movie Night",
      boldDescription:
        "Dim the lights, wrap yourselves in a blanket, and let the magic unfold on-screen.",
      romanticMessage:
        "An average movie is about 120 minutes long. In 930 days, we could have watched over 11,160 movies together.\n" +
        "An avatar 1 and 2 marathon last almot 6 hours, we could have watched the marathon 3720 times in 930 days\n" +
        "If we held hands through every movie, that’s 22,320 minutes of holding hands—basically a full-time job!\n",
      description:
        "Whether you're watching a passionate romance or a sultry thriller, movie night has never been so romantic. Get lost in the heat of the moment as we cuddle closer, our hearts beating in sync.",
      url: "https://sm.askmen.com/askmen_in/article/h/how-to-cho/how-to-choose-a-date-night-movie_ff9d.jpg",
    },
    {
      id: "StargazingDate",
      title: "Star Gazing Date",
      boldDescription:
        "Sometimes the best way to spend an evening together is beneath the vast, starlit sky.",
      romanticMessage:
        "A trip to Mars takes about 210 days—so in 930 days, you could fly to Mars and back more than twice.\n" +
        "The Apollo 11 mission took only 8 days—meaning you could complete 116 Moon missions in 930 days.\n",
      description:
        "The world fades away as we lie side by side, surrounded by the twinkling stars above. Every touch feels electrified, and there's something so intimate about sharing the quiet of the night with someone special.",
      url: "https://dateboxclub.com/cdn/shop/articles/StarGazing2.jpg?v=1706142251",
    },
    {
      id: "OtherDate",
      title: "Other Date",
      boldDescription:
        "Didn’t like any of the options? Or maybe you’ve got an even better idea in mind, Babes?",
      romanticMessage:
        "The average person sends around 35 texts a day to a partner in a relationship. In 930 days, you’d exchange around 32,550 texts! (Or in your case, 500 ❤️🙂).\n" +
        "It takes about 60 days to form a new habit. In 930 days, you could form 15 new habits.\n" +
        "The human brain is capable of creating 70,000 thoughts per day. In 930 days, you could generate a freakishly high 65 million thoughts, possibly making you the creator of your own universe of ideas or in my case, around 2 or 3 actual good gift ideas!\n" +
        "The average human orgasm lasts about 20 seconds. If you had an orgasm every day for 930 days, you’d spend 3 hours having orgasms—enough to make it a marathon! 😏",
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
            className="justify-content-center g-lg-4 mt-4 pt-4"
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
