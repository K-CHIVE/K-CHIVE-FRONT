import React, { useEffect, useState, useRef } from "react";
import { SquareTag } from "../../component/Tag/SquareTag";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../component/Logo";
import "./search.css";
import Menu from "../../component/Menu";
import Modal from "component/Modal";
import { InitButton } from "component/Button";
import { ApplyButton } from "component/Button";

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
    name: "성애",
  },
  {
    idx: 6,
    name: "영민",
  },
  {
    idx: 7,
    name: "준현",
  },
  {
    idx: 8,
    name: "정범",
  },
];

const searchContents = () => {
  const [member, setMember] = useState([]);
  useEffect(() => {
    setMember(tmpMember);
  }, []);

  const searchMenu = ["전체검색", "해시태그만 보기", "해시태그 제외 보기"];

  const [memberName, setMemberName] = useState("멤버");
  const selectMember = (e) => {
    setMemberName(e.target.value);
  };

  const [MemberOpen, setMemberOpen] = useState(false);
  const toggleMember = () => {
    setMemberOpen(!MemberOpen);
  };

  const [SearchOpen, setSearchOpen] = useState(false);
  const toggleSearch = () => {
    setSearchOpen(!SearchOpen);
  };

  const [searchName, setSearchName] = useState("검색어");
  const textRef = useRef(null);
  const selectSearchName = () => {
    setSearchName(textRef.current.innerText);
    console.log(textRef.current.innerText);
  };

  return (
    <>
      <Menu menu={"contents"} />
      <div className="search-content">
        <button onClick={toggleMember}>{memberName}</button>

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
            <div className="InitApplyBtn">
              <InitButton text="초기화" />
              <ApplyButton onClick={toggleMember} text="적용하기" />
            </div>
          </div>
        </Modal>

        <button onClick={toggleSearch}>{searchName}</button>
        <Modal open={SearchOpen} className="customOverlay bottomModal">
          <div className="modal_list">
            <div className="modal_name">검색어</div>
            <div className="circleType fixedcircleType">
              {searchMenu.map((v) => {
                return (
                  <div key={v} id={v} className="selectSearchMenu">
                    <div
                      className="searchName"
                      onClick={selectSearchName}
                      ref={textRef}
                    >
                      {v}
                    </div>
                    <FontAwesomeIcon
                      checked={() => {}}
                      className="checkIcon"
                      icon={faCheck}
                    />
                  </div>
                );
              })}
            </div>
            <div className="InitApplyBtn">
              <InitButton text="초기화" />
              <ApplyButton onClick={toggleSearch} text="적용하기" />
            </div>
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
