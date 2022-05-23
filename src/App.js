import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Context
import CardCollectionContext from "./context/CardCollectionContext";

// Components
import CardCollectionsDisplay from "./components/collectionComponents/CardCollectionsDisplay";
import FlashCardDisplay from "./components/flashCardComponents/FlashCardDisplay";
import FlashCardQuizDisplay from "./components/flashCardComponents/FlashCardQuizDisplay";

// React Bootstrap Components
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CardCollectionContext>
          <Header />
          <Routes>
            <Route path="/" element={<CardCollectionsDisplay />} />
            <Route
              path="/collection/:collectionIndex"
              element={<FlashCardDisplay />}
            />
            <Route
              path="/quiz/collection/:collectionIndex"
              element={<FlashCardQuizDisplay />}
            />
          </Routes>
          <Footer />
        </CardCollectionContext>
      </BrowserRouter>
    </div>
  );
}

export default App;
