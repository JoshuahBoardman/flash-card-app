import React, { useState } from "react";
import { useCardCollection } from "../context/CardCollectionContext";
import CreateCollectionModal from "./CreateCollectionModal";
import CollectionCard from "./CollectionCard";

// React Bootstrap Components
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const CardCollectionsDisplay = () => {
  const [cardCollection, setCardCollection] = useCardCollection();
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  // TODO: Make this acsessable from other locations (Maybe make a universal card component?)
  function deleteCollection(index) {
    if (index === -1) return;
    setCardCollection([
      ...cardCollection.slice(0, index),
      ...cardCollection.slice(index + 1),
    ]);
  }
  // TODO: Swtich to CSS grid in a container
  // TODO: Make a main section component and put this inside that as a rendering option (Maybe?)
  return (
    <Container fluid="xxl" className="my-5">
      <Row>
        <Col className="d-flex justify-content-center mb-3">
          <Button
            variant="primary"
            onClick={() => {
              handleShowModal();
            }}
          >
            New Collection
          </Button>
        </Col>
      </Row>

      {/* Modal */}
      <CreateCollectionModal show={showModal} handleClose={handleCloseModal} />
      <Row>
        <Col className="d-flex flex-wrap justify-content-center gap-3">
          {cardCollection.length > 0 ? (
            cardCollection.map((collection, index) => {
              return (
                // Collection Card
                <CollectionCard
                  index={index}
                  collection={collection}
                  deleteCollection={deleteCollection}
                />
              );
            })
          ) : (
            // Collection array is empty
            <h3>No Collections Found</h3>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default CardCollectionsDisplay;
