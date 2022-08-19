import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import "./styles.css";
import { Link } from "react-router-dom";
import Modal from "component/Modal";

const artist = [
  {
    idx: 0,
    name: "에이티즈",
  },
  {
    idx: 1,
    name: "더보이즈",
  },
  {
    idx: 2,
    name: "블랙핑크",
  },
  {
    idx: 3,
    name: "세븐틴",
  },
  {
    idx: 4,
    name: "소녀시대",
  },
  {
    idx: 5,
    name: "아이브",
  },
  {
    idx: 6,
    name: "트와이스",
  },
];
const index = ({ menu }) => {
  const [Artist, setArtist] = useState(artist);
  useEffect(() => {
    fetch("http://127.0.0.1:8000/common/group", { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setArtist(artist);
      });
  }, []);
  // console.log(Artist);

  const [isOpen, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!isOpen);
  };

  const [artistName, setArtistName] = useState("그룹 선택");
  const selectArtist = (e) => {
    setArtistName(e.target.value);
  };
  return (
    <>
      <header>
        <div
          className={
            isOpen ? "artist-select show-menu" : "artist-select hide-menu"
          }
        >
          <div className="artist-select-name">{artistName}</div>
          <FontAwesomeIcon
            icon={faAngleDown}
            className="angleDown"
            onClick={toggleMenu}
          />
          <Modal open={isOpen} className="customOverlay">
            <div className="modal_list">
              <div className="modal_name">그룹 선택</div>
              <div className="circleType">
                {Artist.map((v) => {
                  return (
                    <div key={v.name} className="modal_list_item">
                      <input
                        type={"radio"}
                        key={v.name}
                        id={v.name}
                        name="radio"
                        value={v.name}
                        onChange={selectArtist}
                        checked={v.name == artistName ? true : false}
                      />
                      <label htmlFor={v.name}>{v.name}</label>
                    </div>
                  );
                })}
              </div>
              <div className="modal_btn" onClick={toggleMenu}>
                선택하기
              </div>
            </div>
          </Modal>
        </div>
        <div className="menu ">
          <Link
            to="/image-search/contents"
            className={menu == "contents" ? "menu-name-contents" : ""}
          >
            <div className="menu-name ">콘텐츠 서치</div>
          </Link>
          <Link
            to="/transaction/poca"
            className={menu == "transaction" ? "menu-name-goods" : ""}
          >
            <div className="menu-name">굿즈 거래</div>
          </Link>
          <Link
            to="/searchRestaurant/output"
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