import React, { useState } from "react";
import { useCardCollection } from "../context/CardCollectionContext";
import CreateCollectionModal from "./CreateCollectionModal";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const CardCollectionsDisplay = () => {
  const [cardCollection, setCardCollection] = useCardCollection();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // TODO: Make this acsessable from other locations (Maybe make a universal card component?)
  function deleteCollection(index) {
    if (index === -1) return;
    setCardCollection([
      ...cardCollection.slice(0, index),
      ...cardCollection.slice(index + 1),
    ]);
  }
  // TODO: Refactor all of this!!!!!!!!!!!!
  // TODO: Swtich to CSS grid in a container
  // TODO: Make a main section component and put this inside that as a rendering option (Maybe?)
  return (
    <Container fluid="xxl" className="my-5">
      <Row>
        <Col className="d-flex justify-content-center mb-3">
          <Button
            variant="primary"
            onClick={() => {
              handleShow();
            }}
          >
            New Collection
          </Button>
        </Col>
      </Row>
      <CreateCollectionModal show={show} handleClose={handleClose} />
      <Row>
        <Col className="d-flex flex-wrap justify-content-center gap-3">
          {cardCollection.length > 0 ? (
            cardCollection.map((collection, index) => {
              return (
                <Card key={index} style={{ width: "20rem" }}>
                  <Card.Body>
                    <Card.Title>{collection.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      Number of Cards: <span>{collection.cards.length}</span>
                    </Card.Subtitle>
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
            })
          ) : (
            <h3>No Collections Found</h3>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default CardCollectionsDisplay;
