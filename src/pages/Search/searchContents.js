import React from "react";
import { SquareTag } from "../../component/Tag/SquareTag";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../component/Logo";
import "./search.css";
import Menu from "../../component/Menu";
const searchContents = () => {
  return (
    <>
      <Menu menu={"contents"} />
      <div className="search-content">
        <div className="search-content-title">
          <Logo width="50%" height="50px" style={{ Color: "black" }} />
        </div>
        <div className="search-content-button">
          <SquareTag text="ALL" />
          <SquareTag text="직찍" />
          <SquareTag text="GIF" />
          <SquareTag text="공식 공지" />
          <SquareTag text="팬 트윗" />
        </div>
        <div className="search-content-input">
          <input type="text" placeholder="검색어를 입력하세요 ..." />
        </div>
      </div>
    </>
  );
};

export default searchContents;
