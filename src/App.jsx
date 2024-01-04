import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Navigation from "./components/Navigation";

const App = () => {
  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Hero />} />
          
        </Routes>
      </Router>
    </>
  );
};

export default App;
