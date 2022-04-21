import React, { useState } from "react";
import { useCardCollection } from "../../context/CardCollectionContext";

// Components
import CardCreationModal from "../CardCreationModal";

const CreateCollection = ({ showModal, handleCloseModal }) => {
  const [cardCollection, setCardCollection] = useCardCollection();
  const [titleValue, setTitleValue] = useState("");
  const [textAreaValue, setTextAreaValue] = useState("");

  function createNewCollection() {
    setCardCollection([
      ...cardCollection,
      {
        title: `${titleValue}`,
        cards: [],
        description: `${textAreaValue}`,
      },
    ]);
  }

  return (
    <CardCreationModal
      header={"New Collection"}
      labelOne={"Collection Title"}
      lablelOneValue={titleValue}
      setLabelOneValue={setTitleValue}
      labelTwo={"Collection Description"}
      lablelTwoValue={textAreaValue}
      setLabelTwoValue={setTextAreaValue}
      showModal={showModal}
      handleCloseModal={handleCloseModal}
      createNewCard={createNewCollection}
      action={"Create"}
    />
  );
};

export default CreateCollection;
