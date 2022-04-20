import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

// Context
import CardCollectionContext from "./context/CardCollectionContext";

// Components
import CardCollectionsDisplay from "./components/CardCollectionsDisplay";
import FlashCardDisplay from "./components/FlashCardDisplay"

// React Bootstrap Components
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />

      <CardCollectionContext>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CardCollectionsDisplay />} />
          <Route path="/collection/:collectionIndex" element={<FlashCardDisplay />} />
        </Routes>
      </BrowserRouter>
      </CardCollectionContext>

      <Footer />
    </div>
  );
}

export default App;
