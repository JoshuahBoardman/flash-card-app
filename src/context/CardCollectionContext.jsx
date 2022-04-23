import React, { useState, useContext, useEffect } from "react";

const cardCollectionContext = React.createContext();

export function useCardCollection() {
    return useContext(cardCollectionContext);
}

//TODO: Maybe add random ID generation.
const CardCollectionContext = ({ children }) => {
  const [cardCollection, setCardCollection] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false)

  useEffect(() => {
    const data = localStorage.getItem("flashcard-collections");
    if (data) {
      setCardCollection(JSON.parse(data));
      setDataLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (!dataLoaded) return
    localStorage.setItem(
      "flashcard-collections",
      JSON.stringify(cardCollection)
    );
  }, [cardCollection, dataLoaded]);

  return (
    <cardCollectionContext.Provider value={[cardCollection, setCardCollection]}>
        {children}
    </cardCollectionContext.Provider>
  );
};

export default CardCollectionContext;
