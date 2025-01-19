import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router"; // For navigation to a different page

function ConfirmationModalComponent(props) {
  const [yesCount, setYesCount] = useState(0); // Track the count of "Yes, Fuck you!" clicks
  const [modalText, setModalText] = useState(
    "Are you sure you don't want to be my valentine! 🥲"
  );

  const navigate = useNavigate(); // Hook to navigate to a different page after modal is closed

  // Function to update modal text based on "Yes" clicks
  function handleYesClick() {
    let newText = modalText;
    if (yesCount === 0) {
      newText = "Are you REALLY sure you don't want to be my valentine? 😉";
    } else if (yesCount === 1) {
      newText =
        "Are you REALLY REALLY Positively sure you don't wanna be my valentine? 😢😭";
    } else if (yesCount === 2) {
      newText = "Okay... I see. How it is 😢😭😭";
    }

    setModalText(newText);
    setYesCount(yesCount + 1);

    // Close the modal after the 3rd "Yes"
    if (yesCount >= 2) {
      setTimeout(() => {
        props.onHide(); // Close the modal after 3rd "Yes"
        navigate("/mad"); // Navigate to a different page (e.g., `/new-page`)
      }, 1000); // Optional delay before redirecting
    }
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Come on </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{modalText}</p> {/* Display the dynamic modal text */}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={handleYesClick}>
          Yes, Fuck you!
        </Button>{" "}
        {/* Update text on "Yes" click */}
        <Button onClick={props.onHide}>No, I change my mind!</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ConfirmationModalComponent;
