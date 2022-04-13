import React from 'react'
import { useCardCollection } from '../context/CardCollectionContext'

const Testing = () => {
    const [cardCollection, setCardCollection] = useCardCollection();
    console.log("here", cardCollection)
  return (
   <>
       {
           cardCollection.map((collection, index) => {
               return (
                   <div key={index}>
                       <h1>{collection.title}</h1>
                   </div>
               )
           })
       }
   </>
  )
}

export default Testing