import React from "react";
import { useCardCollection } from "../../context/CardCollectionContext";
import { useParams } from "react-router-dom";

// Components
import FlashCard from "./FlashCard";

// React Bootstrap Components
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const FlashCardDisplay = () => {
  const [cardCollection] = useCardCollection();
  const { collectionIndex } = useParams();

  const flashCards = cardCollection[collectionIndex].cards;

  // TODO: Display the name of the collection and discription at the top.
  return (
    <div>
      <Container fluid="xxl" className="my-5">
        <Row>
          <Col className="d-flex justify-content-center mb-3">
            <Button variant="primary">New Flash Card</Button>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex flex-wrap justify-content-center gap-3">
            {flashCards.length > 0 ? (
              flashCards.map((card, index) => {
                return (
                  <FlashCard
                    key={index}
                    flashCardIndex={index}
                    collectionIndex={collectionIndex}
                    card={card}
                  />
                );
              })
            ) : (
              // Flash Card array is empty
              <h3>No Flash Cards Found</h3>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FlashCardDisplay;
