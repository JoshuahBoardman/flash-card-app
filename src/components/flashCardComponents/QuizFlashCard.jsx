import React from "react";

// React Bootstrap Components
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const QuizFlashCard = ({
  flashCards,
  cardDisplayed,
  showAnswer,
  setShowAnswer,
}) => {
  return (
    <>
      <Card>
        <Card.Header>
          FlashCard {cardDisplayed + 1} of {flashCards.length}
        </Card.Header>
        <Card.Body>
          <Card.Title>
            Question: {flashCards[cardDisplayed].question}
          </Card.Title>

          {showAnswer ? (
            <Card.Text className="mt-3">
              <span className="lead">Answer:</span>{" "}
              {flashCards[cardDisplayed].answer}
            </Card.Text>
          ) : (
            <></>
          )}
          {!showAnswer ? (
            <Button
              variant="outline-primary"
              className="mt-3"
              onClick={() => setShowAnswer(true)}
            >
              Show Answer
            </Button>
          ) : (
            <Button
              variant="outline-secondary"
              className="mt-3"
              onClick={() => setShowAnswer(false)}
            >
              Hide Answer
            </Button>
          )}
        </Card.Body>
      </Card>
    </>
  );
};

export default QuizFlashCard;
