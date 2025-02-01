import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom"; // For navigation

function ChooseDateNavBarComponent() {
  return (
    <>
      <Navbar
        style={{
          backgroundColor: "white", // White background for navbar
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Slight shadow for a more elevated effect
          width: "100%", // Full width navbar
          padding: "0.5rem 1rem", // Compact padding
        }}
        expand="lg"
      >
        <Navbar.Brand
          as={Link}
          to="/"
          style={{
            display: "flex",
            alignItems: "center",
            textAlign: "left", // Align text to the left
          }}
        >
          {/* Logo image */}
          <img
            src="https://i.ibb.co/q37HRDcG/Book.png"
            alt="Logo"
            style={{
              width: "40px", // Slightly smaller logo
              height: "auto", // Maintain aspect ratio
              marginRight: "10px", // Spacing between logo and text
            }}
          />
          <span
            style={{
              fontFamily: "'Great Vibes', cursive", // Fancy script font
              fontSize: "1.8rem", // Slightly smaller font size
              color: "#FF5656", // Matching the theme color
              fontWeight: "bold",
            }}
          >
            Choose Your Date
          </span>
        </Navbar.Brand>

        {/* Heart image on the right */}
        <Nav className="ml-auto">
          <img
            src="https://icons.iconarchive.com/icons/designbolts/free-valentine-heart/256/Heart-icon.png"
            alt="Heart Icon"
            style={{
              width: "30px", // Size of the heart image
              height: "auto", // Maintain aspect ratio
              marginLeft: "10px", // Spacing between heart image and navbar
            }}
          />
        </Nav>
      </Navbar>
    </>
  );
}

export default ChooseDateNavBarComponent;
