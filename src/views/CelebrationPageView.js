import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../index.css"; // Make sure to import the CSS for animations

function HorizontalSlidingImage() {
  const [animation, setAnimation] = useState(null); // State to store the current animation
  const [startAnimation, setStartAnimation] = useState(false); // Trigger animation after 1 minute
  const [hue, setHue] = useState(0); // State for tracking hue rotation
  const audioRef = useRef(null);

  // Function to randomize animation after each cycle
  const randomizeAnimation = () => {
    const random = Math.floor(Math.random() * 3);
    switch (random) {
      case 0:
        return "moveLeftRight";
      case 1:
        return "spin";
      case 2:
        return "moveDiagonal";
      default:
        return "moveLeftRight";
    }
  };

  // Set a random animation initially and start background hue change after 15 seconds
  useEffect(() => {
    // Play music
    if (audioRef.current) {
      audioRef.current.play();
      audioRef.current.volume = 0.1;
    }

    // Set the initial random animation
    const randomAnimation = randomizeAnimation();
    setAnimation(randomAnimation);

    // Set a timeout for 30 seconds before starting the animation
    const timer = setTimeout(() => {
      setStartAnimation(true); // Start animation after 60 seconds
    }, 15000); // 60000 milliseconds = 1 minute

    // Set up the background hue change every 0.5 seconds, starting after 15 seconds
    const hueChangeTimer = setTimeout(() => {
      const interval = setInterval(() => {
        setHue((prevHue) => (prevHue + 30) % 360); // Increment hue by 10 degrees and loop it after 360
      }, 50); // Change hue every 0.5 second

      // Clear the interval when the component is unmounted
      return () => clearInterval(interval);
    }, 20000); // 15000 milliseconds = 15 seconds

    // Cleanup timers on component unmount
    return () => {
      clearTimeout(timer);
      clearTimeout(hueChangeTimer);
    };
  }, []);

  // When the animation cycle ends, randomize a new one
  const handleAnimationIteration = () => {
    const newAnimation = randomizeAnimation();
    setAnimation(newAnimation);
  };

  return (
    <Container
      fluid
      style={{ padding: 0, margin: 0 }}
      className="customBackground"
    >
      <audio loop ref={audioRef}>
        <source
          src="/assets/celebration-music.mp3" // Path to the audio file in the public folder
          type="audio/mp3"
        />
        Your browser does not support the audio element.
      </audio>
      <Row
        className="p-0 m-0"
        style={{
          position: "relative", // Container is positioned to contain the image
          overflow: "hidden", // Hide anything outside the container's bounds
          height: "100vh", // Full screen height
          backgroundImage: "url('/path/to/your/background.jpg')", // Replace with your background image
          backgroundSize: "cover", // Ensure the background image covers the full viewport
          backgroundPosition: "center", // Center the background image
          filter: `hue-rotate(${hue}deg)`, // Dynamically change the hue of the background
        }}
      >
        {/* Add text on top of the image */}
        <Row className="d-flex justify-content-center" style={{ zIndex: 10 }}>
          <h1
            className="justify-content-center d-flex"
            style={{
              color: "white",
              position: "absolute",
              top: "10%",
              width: "100%",
              textAlign: "center",
              fontFamily: "Protest Guerrilla",
              fontWeight: "600",
              fontSize: "80px",
            }}
          >
            Let’s Goooo! Now that it’s all planned lets party!!
          </h1>
        </Row>

        {/* Animated image */}
        <Row>
          <Col
            lg={{ span: 6, offset: 4 }}
            className="justify-content-center d-flex align-items-end"
            style={{ zIndex: 5 }} // Image should be below text
          >
            <img
              className="pb-3 mb-3"
              src="/assets/dancing-clip.gif" // Replace with your image source
              alt="dancing gif"
              style={{
                position: "absolute", // Position image relative to the container
                top: "50%", // Vertically center the image
                transform: "translateY(-50%)", // Fine-tune vertical centering
                width: "600px", // Control width of the image
                height: "auto", // Maintain aspect ratio
                animation: startAnimation
                  ? `${animation} 6s ease-in-out infinite`
                  : "none", // Apply randomized animation after timer
                pointerEvents: "none", // Disable interaction with the image
              }}
              onAnimationIteration={handleAnimationIteration} // Randomize animation after each cycle
            />
          </Col>
        </Row>
      </Row>
    </Container>
  );
}

export default HorizontalSlidingImage;
