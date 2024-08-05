import React from "react";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Offers from "./pages/Offers/Offers";
import Orders from "./pages/Orders/Orders";
// import cocktail from "./assets/cocktail.jpg";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      {/* <img src={cocktail} alt="Cock" /> */}
      {/* <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/offer" element={<Offers />} />
          <Route path="/order" element={<Orders />} />
        </Routes>
      </Router> */}
    </div>
  );
};

export default App;
