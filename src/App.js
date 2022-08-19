import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Intro from "pages/Intro";
import Search from "pages/Search/searchContents";
import SearchGoods from "pages/Search/searchGoods";
import SearchRestaurant from "pages/Search/searchRestaurant";
import Output from "pages/Output";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/search" element={<Search />} />
        <Route path="/searchGoods" element={<SearchGoods />} />
        <Route path="/searchRestaurant" element={<SearchRestaurant />} />
        <Route path="/output" element={<Output />} />
      </Routes>
    </Router>
  );
}

export default App;
