import React, { useState } from "react";

// Components
import DeleteFlashCard from "./DeleteFlashCard";

// React Bootstrap Components
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const FlashCard = ({ flashCardIndex, collectionIndex, card }) => {
  const [showDeletionModal, setShowDeletionModal] = useState(false);

  const handleCloseDeletionModal = () => setShowDeletionModal(false);
  const handleShowDeletionModal = () => setShowDeletionModal(true);

  return (
    <>
      <Card style={{ width: "20rem" }}>
        <Card.Body>
          <Card.Title>Question: {card.question}</Card.Title>
          <Card.Text>Answer: {card.answer}</Card.Text>
          <Button variant="primary" className="me-2">
            Edit
          </Button>
          <Button variant="secondary" onClick={() => handleShowDeletionModal()}>
            Delete
          </Button>
        </Card.Body>
      </Card>

      {/* Deletion Modal */}
      <DeleteFlashCard
        flashCardIndex={flashCardIndex}
        collectionIndex={collectionIndex}
        showDeletionModal={showDeletionModal}
        handleCloseDeletionModal={handleCloseDeletionModal}
      />
    </>
  );
};

export default FlashCard;
