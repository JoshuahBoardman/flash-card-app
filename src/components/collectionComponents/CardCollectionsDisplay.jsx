import React, { useState } from "react";
import { useCardCollection } from "../../context/CardCollectionContext";

// Components
import CreateCollection from "./CreateCollection"
import CollectionCard from "./CollectionCard";

// React Bootstrap Components
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const CardCollectionsDisplay = () => {
  const [cardCollection] = useCardCollection();

  const [showCreationModal, setShowCreationModal] = useState(false);

  const handleCloseCreationModal = () => setShowCreationModal(false);
  const handleShowCreationModal = () => setShowCreationModal(true);

  // TODO: Swtich to CSS grid in a container
  // TODO: Make a main section component and put this inside that as a rendering option (Maybe?)
  return (
    <Container fluid="xxl" className="my-5">
      <Row>
        <Col className="d-flex justify-content-center mb-3">
          <Button
            variant="primary"
            onClick={() => {
              handleShowCreationModal();
            }}
          >
            New Collection
          </Button>
        </Col>
      </Row>

      {/* Modal */}
      <CreateCollection
        showModal={showCreationModal}
        handleCloseModal={handleCloseCreationModal}
      />
      <Row>
        <Col className="d-flex flex-wrap justify-content-center gap-3">
          {cardCollection.length > 0 ? (
            cardCollection.map((collection, index) => {
              return (
                // Collection Card
                <CollectionCard key={index} index={index} collection={collection} />
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
