import React from "react";

// React Bootstrap Components
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const CollectionCard = ({ index, collection, deleteCollection }) => {
  return (
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
        {/* TODO: add a modal to confirm deletion */}
        <Button
          variant="secondary"
          onClick={() => {
            deleteCollection(index);
          }}
        >
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CollectionCard;
