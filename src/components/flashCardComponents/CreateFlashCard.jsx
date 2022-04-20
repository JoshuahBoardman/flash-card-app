import React, { useState } from "react";
import { useCardCollection } from "../../context/CardCollectionContext";

// Components
import CardCreationModal from "../CardCreationModal";

const CreateFlashCard = ({ collectionIndex, showModal, handleCloseModal }) => {
  const [, setCardCollection] = useCardCollection();
  const [questionValue, setQuestionValue] = useState("");
  const [answerValue, setAnswerValue] = useState("");

  function createNewFlashCard() {
    setCardCollection((prevCardCollection) => {
      prevCardCollection[collectionIndex].cards.push({
        question: `${questionValue}`,
        answer: `${answerValue}`,
      });
      return [...prevCardCollection];
    });
  }

  return (
    <CardCreationModal
      header={"New FlashCard"}
      labelOne={"Question"}
      lablelOneValue={questionValue}
      setLabelOneValue={setQuestionValue}
      labelTwo={"Answer"}
      lablelTwoValue={answerValue}
      setLabelTwoValue={setAnswerValue}
      showModal={showModal}
      handleCloseModal={handleCloseModal}
      createNewCard={createNewFlashCard}
    />
  );
};

export default CreateFlashCard;
