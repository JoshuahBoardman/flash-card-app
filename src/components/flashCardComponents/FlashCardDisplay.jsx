import React, { useState, useEffect } from "react";
import { useCardCollection } from "../../context/CardCollectionContext";
import { useParams, useNavigate, Link } from "react-router-dom";

// Components
import FlashCard from "./FlashCard";
import CreateFlashCard from "./CreateFlashCard";

// React Bootstrap Components
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const FlashCardDisplay = () => {
  const [cardCollection] = useCardCollection();
  const { collectionIndex } = useParams();
  const navigate = useNavigate();

  const [showCreationModal, setShowCreationModal] = useState(false);

  useEffect(() => {
    if (cardCollection[collectionIndex] === undefined) {
      navigate("/");
    }
  });

  const handleCloseCreationModal = () => setShowCreationModal(false);
  const handleShowCreationModal = () => setShowCreationModal(true);

  let flashCards = cardCollection[collectionIndex]?.cards;

  // TODO: Display the name of the collection and discription at the top.
  return (
    <>
      <div>
        <Container fluid="xxl" className="mb-5" style={{ minHeight: "100vh" }}>
          <Row>
            <Col className="d-flex justify-content-center my-5">
              {/* collectionIndex, showModal, handleCloseModal */}
              <Button
                variant="primary"
                className="me-2"
                onClick={() => {
                  navigate(`/quiz/collection/${collectionIndex}`);
                }}
              >
                Quiz
              </Button>
              <Button
                variant="primary"
                onClick={() => {
                  handleShowCreationModal();
                }}
              >
                New Flash Card
              </Button>
            </Col>
          </Row>
          <Row>
            {flashCards?.length > 0 ? (
              flashCards?.map((card, index) => {
                return (
                  <Col
                    xxl={3}
                    lg={4}
                    md={6}
                    className="mb-5 d-flex justify-content-center"
                  >
                    <FlashCard
                      key={index}
                      flashCardIndex={index}
                      collectionIndex={collectionIndex}
                      card={card}
                    />
                  </Col>
                );
              })
            ) : (
              <Col md={12} className="mb-5 d-flex justify-content-center">
                {/* Flash Card array is empty */}
                <h3>No Flash Cards Found</h3>
              </Col>
            )}
          </Row>
        </Container>
      </div>
      <CreateFlashCard
        collectionIndex={collectionIndex}
        showModal={showCreationModal}
        handleCloseModal={handleCloseCreationModal}
      />
    </>
  );
};

export default FlashCardDisplay;
