import React, { useState } from "react";

// Components
import DeleteCollection from "./DeleteCollection";

// React Bootstrap Components
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const CollectionCard = ({ index, collection }) => {
  const [showDeletionModal, setShowDeletionModal] = useState(false);

  const handleCloseDeletionModal = () => setShowDeletionModal(false);
  const handleShowDeletionModal = () => setShowDeletionModal(true);

  return (
    <>
      <Card key={index} style={{ width: "20rem" }}>
        <Card.Body>
          <Card.Title>{collection.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Number of Cards: <span>{collection.cards.length}</span>
          </Card.Subtitle>
          {/* TODO: Limit the card description length */}
          <Card.Text>{collection.description}</Card.Text>
          <Button variant="primary" className="me-2">
            Vliew
          </Button>
          <Button
            variant="secondary"
            onClick={() => {
              handleShowDeletionModal();
            }}
          >
            Delete
          </Button>
        </Card.Body>
      </Card>

      <DeleteCollection
        index={index}
        showDeletionModal={showDeletionModal}
        handleCloseDeletionModal={handleCloseDeletionModal}
      />
    </>
  );
};

export default CollectionCard;
