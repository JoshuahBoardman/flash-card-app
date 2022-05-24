import React, { useState } from "react";
import { useCardCollection } from "../../context/CardCollectionContext";

// Components
import CreateCollection from "./CreateCollection";
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
  // TODO: Make a header for components
  return (
    <Container fluid="xxl" className="mb-5" style={{ minHeight: "100vh" }}>
      <Row>
        <Col className="d-flex justify-content-center my-5">
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
      <Row className="">
        {cardCollection.length > 0 ? (
          cardCollection.map((collection, index) => {
            return (
              <Col
                xxl={3}
                lg={4}
                md={6}
                className="mb-5 d-flex justify-content-center"
              >
                {/* Collection Card */}
                <CollectionCard
                  key={index}
                  index={index}
                  collection={collection}
                />
              </Col>
            );
          })
        ) : (
          // Collection array is empty
          <Col md={12} className="mb-5 d-flex justify-content-center">
            <h3>No Collections Found</h3>
          </Col>
        )}
        {/* </Col> */}
      </Row>
    </Container>
  );
};

export default CardCollectionsDisplay;
