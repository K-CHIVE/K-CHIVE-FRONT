import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { SquareTag } from "../../component/Tag/SquareTag";
import Logo from "../../component/Logo";
import "./search.css";
const Search = () => {
  return (
    <>
      <div className="artist-select">
        <div className="artist-select-name">더보이즈</div>
        <FontAwesomeIcon
          icon={faAngleDown}
          className="angleDown"
          // onClick={toggleMenu}
        />
      </div>
      <div className="search-menu">
        <div className="search-menu-contents">콘텐츠 서치</div>
        <div className="search-menu-goods">굿즈 거래</div>
        <div className="search-menu-restaurant">맛집 찾기</div>
      </div>
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
          <input type="text" placeholder="검색어를 입력하세요" />
        </div>
      </div>
    </>
  );
};

export default Search;
