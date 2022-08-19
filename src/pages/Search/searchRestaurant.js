import React from "react";
import { SquareTag } from "../../component/Tag/SquareTag";
import { LogoBlack } from "../../component/Logo";
import "./search.css";
import Menu from "../../component/Menu";
const searchRestaurant = () => {
  return (
    <>
      <Menu menu={"restaurant"} />
      <div className="search-content">
        <div className="search-content-title">
          <LogoBlack style={{ Color: "black" }} />
        </div>
        <div className="search-content-button">
          <SquareTag text="ALL" />
          <SquareTag text="카페" />
          <SquareTag text="식당" />
        </div>
        <div className="search-content-input">
          <input type="text" placeholder="검색어를 입력하세요 ..." />
        </div>
      </div>
    </>
  );
};

export default searchRestaurant;
