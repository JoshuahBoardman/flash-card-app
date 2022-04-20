import React from 'react';
import { useCardCollection } from '../context/CardCollectionContext';
import { useParams } from 'react-router-dom';

const FlashCardDisplay = () => {
  const [cardCollection, setCardCollection] = useCardCollection();
  const { collectionIndex } = useParams();

  console.log(collectionIndex)
  return (
    <div>{cardCollection[collectionIndex].title}</div>
  )
}

export default FlashCardDisplay