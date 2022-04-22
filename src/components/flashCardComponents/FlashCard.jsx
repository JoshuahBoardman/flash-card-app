import React, { useState } from "react";

// Components
import EditFlashCard from "./EditFlashCard";
import DeleteFlashCard from "./DeleteFlashCard";

// React Bootstrap Components
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const FlashCard = ({ flashCardIndex, collectionIndex, card }) => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeletionModal, setShowDeletionModal] = useState(false);

  const handleCloseEditModal = () => setShowEditModal(false);
  const handleShowEditModal = () => setShowEditModal(true);

  const handleCloseDeletionModal = () => setShowDeletionModal(false);
  const handleShowDeletionModal = () => setShowDeletionModal(true);

  return (
    <>
      <Card style={{ width: "20rem" }}>
        <Card.Body>
          <Card.Title>Question: {card.question}</Card.Title>
          <Card.Text className="lead">Answer: {card.answer}</Card.Text>
          <Button
            variant="primary"
            className="me-2"
            onClick={() => handleShowEditModal()}
          >
            Edit
          </Button>
          <Button variant="secondary" onClick={() => handleShowDeletionModal()}>
            Delete
          </Button>
        </Card.Body>
      </Card>

      {/* Edit Modal */}
      <EditFlashCard
        collectionIndex={collectionIndex}
        flashCardIndex={flashCardIndex}
        showModal={showEditModal}
        handleCloseModal={handleCloseEditModal}
      />
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
