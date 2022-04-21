import React, { useState } from "react";
import { useCardCollection } from "../../context/CardCollectionContext";

// Components
import CardCreationModal from "../CardCreationModal";

const EditFlashCard = ({
  collectionIndex,
  flashCardIndex,
  showModal,
  handleCloseModal,
}) => {
  const [cardCollection, setCardCollection] = useCardCollection();
  const [questionValue, setQuestionValue] = useState(
    cardCollection[collectionIndex].cards[flashCardIndex].question
  );
  const [answerValue, setAnswerValue] = useState(
    cardCollection[collectionIndex].cards[flashCardIndex].answer
  );

  function editFlashCard() {
    setCardCollection((prevCardCollection) => {
      cardCollection[collectionIndex].cards[flashCardIndex].question =
        questionValue;
      cardCollection[collectionIndex].cards[flashCardIndex].answer =
        answerValue;
      return [...prevCardCollection];
    });
  }

  return (
    <CardCreationModal
      header={"Edit FlashCard"}
      labelOne={"Question"}
      lablelOneValue={questionValue}
      setLabelOneValue={setQuestionValue}
      labelTwo={"Answer"}
      lablelTwoValue={answerValue}
      setLabelTwoValue={setAnswerValue}
      showModal={showModal}
      handleCloseModal={handleCloseModal}
      createNewCard={editFlashCard}
      action={"Edit"}
    />
  );
};

export default EditFlashCard;
