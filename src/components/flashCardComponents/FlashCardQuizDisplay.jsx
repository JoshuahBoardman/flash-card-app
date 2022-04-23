import React, { useState, useEffect } from "react";
import { useCardCollection } from "../../context/CardCollectionContext";
import { useParams } from "react-router-dom";

// Components
import QuizFlashCard from "./QuizFlashCard";

// React Bootstrap Components
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const FlashCardQuizDisplay = () => {
  const [cardCollection] = useCardCollection();
  const { collectionIndex } = useParams();

  const [shuffledFlashCards, setShuffledFlashCards] = useState([]);
  const [cardDisplayed, setCardDisplayed] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    function shuffleFlashCards() {
      const flashCards = cardCollection[collectionIndex].cards;
      const rearangedFlashCards = flashCards.sort(() => Math.random() - 0.5);
      setShuffledFlashCards([...rearangedFlashCards]);
    }
    shuffleFlashCards();
  }, [cardCollection, collectionIndex]);

  useEffect(() => {
    if (shuffledFlashCards.length > 0) {
      setIsLoading(false);
    }
  }, [shuffledFlashCards.length]);

  function displayPreviousCard() {
    if (cardDisplayed <= 0) return;
    setShowAnswer(false);
    setCardDisplayed((prevCardDisplayed) => prevCardDisplayed - 1);
  }

  function displayNextCard() {
    if (cardDisplayed + 1 >= shuffledFlashCards.length) return;
    setShowAnswer(false);
    setCardDisplayed((prevCardDisplayed) => prevCardDisplayed + 1);
  }
  // TODO: have a title for what this display is
  return (
    <>
      <Container fluid="xxl" className="my-5">
        <Row>
          <Col className="d-flex justify-content-center mb-3"></Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center mb-3">
            {isLoading ? (
              <div className="h4">Loading....</div>
            ) : (
              <div>
                <QuizFlashCard flashCards={shuffledFlashCards} cardDisplayed={cardDisplayed} displayAnswer={showAnswer} setShowAnswer={setShowAnswer}/>

                <div className="mt-3">
                  <Button
                    className="me-2"
                    onClick={() => {
                      displayPreviousCard();
                    }}
                  >
                    Previous Card
                  </Button>
                  <Button
                    onClick={() => {
                      displayNextCard();
                    }}
                  >
                    Next Card
                  </Button>
                </div>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default FlashCardQuizDisplay;
