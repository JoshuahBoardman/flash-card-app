import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Components
import DeleteCollection from "./DeleteCollection";

// React Bootstrap Components
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const CollectionCard = ({ index, collection }) => {
  const [showDeletionModal, setShowDeletionModal] = useState(false);
  const navigate = useNavigate();

  const handleCloseDeletionModal = () => setShowDeletionModal(false);
  const handleShowDeletionModal = () => setShowDeletionModal(true);

  return (
    <>
      <Card style={{ width: "20rem" }}>
        <Card.Body>
          <Card.Title>{collection.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Number of Cards: <span>{collection.cards.length}</span>
          </Card.Subtitle>
          {/* TODO: Limit the card description length */}
          <Card.Text>{collection.description}</Card.Text>
        </Card.Body>
        <Card.Body className="d-flex gap-2 mt-auto">
          <Button
            variant="primary"
            className="d-flex align-items-center mt-auto"
            onClick={() => {
              navigate(`/collection/${index}`);
            }}
          >
            Vliew
          </Button>
          <Button
            variant="secondary"
            className="d-flex align-items-center mt-auto"
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
