import React from "react";
import Navbar from "./components/navbar/Navbar";
import cocktail from "./assets/cocktail.jpg";
const App = () => {
  return (
    <div className="app">
      <Navbar />
      <img src={cocktail} alt="Cock" />
    </div>
  );
};

export default App;
