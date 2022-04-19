import React from "react";

// Context
import CardCollectionContext from "./context/CardCollectionContext";

// Components
import CardCollectionsDisplay from "./components/CardCollectionsDisplay";

// React Bootstrap Components
import Header from "./components/Header";
import Footer from "./components/Footer";

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
