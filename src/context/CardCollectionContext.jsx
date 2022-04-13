import React, { useState, useContext } from "react";

const cardCollectionContext = React.createContext();

export function useCardCollection() {
    return useContext(cardCollectionContext);
}

const CardCollectionContext = ({ children }) => {
  const [cardCollection, setCardCollection] = useState([
    {
      title: "Collection One",
      cards: [
        { question: "Question One", answer: "Answer One" },
        { question: "Question Two", answer: "Answer Two" },
        { question: "Question Three", answer: "Answer Three" },
      ],
    },
    {
      title: "Collection Two",
      cards: [
        { question: "Question One", answer: "Answer One" },
        { question: "Question Two", answer: "Answer Two" },
        { question: "Question Three", answer: "Answer Three" },
      ],
    },
    {
      title: "Collection Three",
      cards: [
        { question: "Question One", answer: "Answer One" },
        { question: "Question Two", answer: "Answer Two" },
        { question: "Question Three", answer: "Answer Three" },
      ],
    },
  ]);

  return (
    <cardCollectionContext.Provider value={[cardCollection, setCardCollection]}>
        {children}
    </cardCollectionContext.Provider>
  );
};

export default CardCollectionContext;
