import React from "react";
import { useCardCollection } from "../../context/CardCollectionContext";

// Components
import CardDeletionModal from "../CardDeletionModal";

const DeleteCollection = ({
  index,
  showDeletionModal,
  handleCloseDeletionModal,
}) => {
  const [cardCollection, setCardCollection] = useCardCollection();

  function deleteCollection() {
    if (index === -1) return;
    setCardCollection([
      ...cardCollection.slice(0, index),
      ...cardCollection.slice(index + 1),
    ]);
  }
  return (
    <CardDeletionModal
      itemType={"Collection"}
      showModal={showDeletionModal}
      handleCloseModal={handleCloseDeletionModal}
      deleteItem={deleteCollection}
    />
  );
};

export default DeleteCollection;
