import React, { useEffect, useState } from "react";
import { SquareTag } from "../../component/Tag/SquareTag";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../component/Logo";
import "./search.css";
import Menu from "../../component/Menu";
import Modal from "component/Modal";
import Button from "component/Button";
const tmpMember = [
  {
    idx: 1,
    name: "지수",
  },
  {
    idx: 2,
    name: "제니",
  },
  {
    idx: 3,
    name: "로제",
  },
  {
    idx: 4,
    name: "리사",
  },
  {
    idx: 5,
    name: "지수",
  },
  {
    idx: 6,
    name: "제니",
  },
  {
    idx: 7,
    name: "로제",
  },
  {
    idx: 8,
    name: "리사",
  },
];
const searchContents = () => {
  const [member, setMember] = useState([]);
  useEffect(() => {
    setMember(tmpMember);
  }, []);

  const [MemberOpen, setMemberOpen] = useState(false);
  const toggleMember = () => {
    setMemberOpen(!MemberOpen);
  };

  const [SearchOpen, setSearchOpen] = useState(false);
  const toggleSearch = () => {
    setSearchOpen(!SearchOpen);
  };

  const searchMenu = ["전체검색", "해시태그만 보기", "해시태그 지외 보기"];

  const [memberName, setMemberName] = useState();
  const selectMember = (e) => {
    setMemberName(e.target.value);
  };
  return (
    <>
      <Menu menu={"contents"} />
      <div className="search-content">
        <button onClick={toggleMember}>멤버</button>

        <Modal open={MemberOpen} className="customOverlay bottomModal">
          <div className="modal_list">
            <div className="modal_name">멤버</div>
            <div className="circleType fixedcircleType">
              {member.map((v) => {
                return (
                  <div key={v.name} className="modal_list_item">
                    <input
                      type={"radio"}
                      key={v.name}
                      id={v.name}
                      name="radio"
                      value={v.name}
                      onChange={selectMember}
                      checked={v.name == memberName ? true : false}
                    />
                    <label htmlFor={v.name}>{v.name}</label>
                  </div>
                );
              })}
            </div>
            <Button onClick={toggleMember} />
          </div>
        </Modal>

        <button onClick={toggleSearch}>검색어</button>
        <Modal open={SearchOpen} className="customOverlay bottomModal">
          <div className="modal_list">
            <div className="modal_name">검색어</div>
            <div className="circleType fixedcircleType">
              {searchMenu.map((v) => {
                return (
                  <div key={v} className="selectSearchMenu">
                    <div className="searchName">{v}</div>
                    <FontAwesomeIcon className="checkIcon" icon={faCheck} />
                  </div>
                );
              })}
            </div>
            <Button onClick={toggleSearch} />
          </div>
        </Modal>
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
