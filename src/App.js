import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Intro from "pages/Intro";
import Search from "pages/Search/searchContents";
import SearchGoods from "pages/Search/searchGoods";
import SearchRestaurant from "pages/Search/searchRestaurant";
import { ImgContents, ImgOfficial, ImgFan } from "pages/Output/Contents";
import { TransGoods, TransPoca, TransAlbum }  from "pages/Output/Transaction";
import Restaurant from "pages/Output/Restaurant";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/search" element={<Search />} />
        <Route path="/searchGoods" element={<SearchGoods />} />
        <Route path="/searchRestaurant" element={<SearchRestaurant />} />
        <Route path="/image-search/contents" element={<ImgContents />} />
        <Route path="/image-search/groupnotifications" element={<ImgOfficial />} />
        <Route path="/image-search/fantweets" element={<ImgFan />} />
        <Route path="/transaction/poca" element={<TransPoca />} />
        <Route path="/transaction/album" element={<TransAlbum />} />
        <Route path="/transaction/goods" element={<TransGoods />} />
        <Route path="/food-search" element={<Restaurant />} />
      </Routes>
    </Router>
  );
}

export default App;
