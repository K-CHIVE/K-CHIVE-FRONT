import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import "./styles.css";
import { Link } from "react-router-dom";
import Modal from "component/Modal";

const artist = [
  "더보이즈",
  "블랙핑크",
  "세븐틴",
  "소녀시대",
  "아이브",
  "에이티즈",
  "트와이스",
];
const index = ({ menu }) => {
  const [isOpen, setMenu] = useState(false);
  const toggleMenu = () => {
    console.log("bbb");
    setMenu(!isOpen);
  };

  return (
    <>
      <header>
        <div
          className={
            isOpen ? "artist-select show-menu" : "artist-select hide-menu"
          }
        >
          <div className="artist-select-name">더보이즈</div>
          <FontAwesomeIcon
            icon={faAngleDown}
            className="angleDown"
            onClick={toggleMenu}
          />
          <Modal open={isOpen} className="customOverlay">
            <div className="modal_list">
              <div className="modal_name">그룹 선택</div>
              <div className="circleType">
                {artist.map((v) => {
                  return (
                    <div key={v} className="modal_list_item">
                      <input type={"radio"} key={v} id={v} name="radio" />
                      <label htmlFor={v}>{v}</label>
                    </div>
                  );
                })}
              </div>
              <div className="modal_btn">선택하기</div>
            </div>
          </Modal>
        </div>
        <div className="menu ">
          <Link
            to="/search"
            className={menu == "contents" ? "menu-name-contents" : ""}
          >
            <div className="menu-name ">콘텐츠 서치</div>
          </Link>
          <Link
            to="/searchGoods"
            className={menu == "goods" ? "menu-name-goods" : ""}
          >
            <div className="menu-name">굿즈 거래</div>
          </Link>
          <Link
            to="/searchRestaurant"
            className={menu == "restaurant" ? "menu-name-restaurant" : ""}
          >
            <div className="menu-name">맛집 찾기</div>
          </Link>
        </div>
      </header>
    </>
  );
};

export default index;
