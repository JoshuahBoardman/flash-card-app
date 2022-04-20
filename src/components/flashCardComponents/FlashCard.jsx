import React from "react";

// React Bootstrap Components
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const FlashCard = ({ index, card }) => {
  return (
    <>
      <Card style={{ width: "20rem" }}>
        <Card.Body>
          <Card.Title>Question: {card.question}</Card.Title>
          <Card.Text>Answer: {card.answer}</Card.Text>
          <Button variant="primary" className="me-2">
            Edit
          </Button>
          <Button variant="secondary">Delete</Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default FlashCard;
