import React from "react";
import CardCollectionContext from "./context/CardCollectionContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Testing from "./components/Testing";

function App() {

  return (
    <div className="App">
      <Header />

      <CardCollectionContext>
          <Testing />
      </CardCollectionContext>

      <Footer />
    </div>
  );
}

export default App;
