import React from "react";
import CardCollectionContext from "./context/CardCollectionContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CardCollectionsDisplay from "./components/CardCollectionsDisplay";

function App() {
  return (
    <div className="App">
      <Header />

      <CardCollectionContext>
        <CardCollectionsDisplay />
      </CardCollectionContext>

      <Footer />
    </div>
  );
}

export default App;
