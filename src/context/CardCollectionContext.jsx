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
      description: "In euismod porta laoreet. Donec vel cursus velit, quis condimentum leo. Sed ac tristique tortor. Aliquam erat volutpat. Aliquam congue molestie nulla."
    },
    {
      title: "Collection Two",
      cards: [
        { question: "Question One", answer: "Answer One" },
        { question: "Question Two", answer: "Answer Two" },
        { question: "Question Three", answer: "Answer Three" },
      ],
      description: "Etiam eu eleifend diam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam erat volutpat."
    },
    {
      title: "Collection Three",
      cards: [
        { question: "Question One", answer: "Answer One" },
        { question: "Question Two", answer: "Answer Two" },
        { question: "Question Three", answer: "Answer Three" },
      ],
      description: "Morbi tincidunt vestibulum nunc, at rutrum leo varius semper. Suspendisse quis felis quis magna laoreet finibus non vel leo."
    },
    {
      title: "Collection Four",
      cards: [
        { question: "Question One", answer: "Answer One" },
        { question: "Question Two", answer: "Answer Two" },
        { question: "Question Three", answer: "Answer Three" },
      ],
      description: "Morbi tincidunt vestibulum nunc, at rutrum leo varius semper. Suspendisse quis felis quis magna laoreet finibus non vel leo."
    },
    {
      title: "Collection One",
      cards: [
        { question: "Question One", answer: "Answer One" },
        { question: "Question Two", answer: "Answer Two" },
        { question: "Question Three", answer: "Answer Three" },
      ],
      description: "In euismod porta laoreet. Donec vel cursus velit, quis condimentum leo. Sed ac tristique tortor. Aliquam erat volutpat. Aliquam congue molestie nulla."
    },
    {
      title: "Collection Two",
      cards: [
        { question: "Question One", answer: "Answer One" },
        { question: "Question Two", answer: "Answer Two" },
        { question: "Question Three", answer: "Answer Three" },
      ],
      description: "Etiam eu eleifend diam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam erat volutpat."
    },
    {
      title: "Collection Three",
      cards: [
        { question: "Question One", answer: "Answer One" },
        { question: "Question Two", answer: "Answer Two" },
        { question: "Question Three", answer: "Answer Three" },
      ],
      description: "Morbi tincidunt vestibulum nunc, at rutrum leo varius semper. Suspendisse quis felis quis magna laoreet finibus non vel leo."
    },
  ]);

  return (
    <cardCollectionContext.Provider value={[cardCollection, setCardCollection]}>
        {children}
    </cardCollectionContext.Provider>
  );
};

export default CardCollectionContext;
