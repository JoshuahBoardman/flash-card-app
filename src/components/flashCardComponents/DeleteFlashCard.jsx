import React from "react";
import { useCardCollection } from "../../context/CardCollectionContext";

// Components
import CardDeletionModal from "../CardDeletionModal";

const DeleteFlashCard = ({
  flashCardIndex,
  collectionIndex,
  showDeletionModal,
  handleCloseDeletionModal,
}) => {
  const [cardCollection, setCardCollection] = useCardCollection();

  function deleteFlashCard() {
    if (flashCardIndex === -1) return;
    const flashCards = cardCollection[collectionIndex].cards;

    const slicedFlashCards = [
      ...flashCards.slice(0, flashCardIndex),
      ...flashCards.slice(flashCardIndex + 1),
    ];

    setCardCollection((prevCardCollection) => {
      prevCardCollection[collectionIndex].cards = slicedFlashCards;
      console.log(cardCollection);
      return [...prevCardCollection];
    });
  }

  return (
    <CardDeletionModal
      itemType={"Flash Card"}
      showModal={showDeletionModal}
      handleCloseModal={handleCloseDeletionModal}
      deleteItem={deleteFlashCard}
    />
  );
};

export default DeleteFlashCard;
