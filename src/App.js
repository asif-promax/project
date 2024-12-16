import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Recipes from "./Recipes";
import Addfav from "./redux/Addfav";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Recipes />} />
        <Route path="/Addfav" element={<Addfav />} />
      </Routes>
    </Router>
  );
}

export default App;
