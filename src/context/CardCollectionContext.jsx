import React, { useState, useContext, useEffect } from "react";

const cardCollectionContext = React.createContext();

export function useCardCollection() {
  return useContext(cardCollectionContext);
}

//TODO: Maybe add random ID generation.
const CardCollectionContext = ({ children }) => {
  const [cardCollection, setCardCollection] = useState(() => {
    let value = [];
    const data = localStorage.getItem("flashcard-collections");
    if (data) {
      value = JSON.parse(data);
    }
    return value;
  });

  useEffect(() => {
    localStorage.setItem(
      "flashcard-collections",
      JSON.stringify(cardCollection)
    );
  }, [cardCollection]);

  return (
    <cardCollectionContext.Provider value={[cardCollection, setCardCollection]}>
      {children}
    </cardCollectionContext.Provider>
  );
};

export default CardCollectionContext;
