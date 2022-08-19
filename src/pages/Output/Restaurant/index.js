import React, { useState, useEffect } from "react";
import axios from "axios";
import Post from "../Post";
import RoundTagFilter from "component/Tag/RoundTagFilter";

import { RestaurantWrapper, FilterBar } from "./styles";
import Modal from "component/Modal";
import { InitButton } from "component/Button";
import { ApplyButton } from "component/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

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

const Restaurant = () => {
  const [member, setMember] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    setMember(tmpMember);
    axios
      .get("http://52.79.132.135:8000/food-search", {
        params: { group: "더보이즈" },
      })
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      });
  }, []);

  var searchMenu = ["전체검색", "해시태그만 보기", "해시태그 제외 보기"];

  const [memberName, setMemberName] = useState("멤버");
  const selectMember = (e) => {
    setMemberName(e.target.value);
  };

  const [MemberOpen, setMemberOpen] = useState(false);
  const toggleMember = () => {
    setMemberOpen(!MemberOpen);
    axios
      .get("http://52.79.132.135:8000/food-search", {
        params: { group: "더보이즈", member: memberName },
      })
      .then((response) => {
        console.log(response.data);
      });
  };

  const [SearchOpen, setSearchOpen] = useState(false);
  const toggleSearch = () => {
    setSearchOpen(!SearchOpen);
  };

  const [searchName, setSearchName] = useState("검색어");
  const selectSearchName = (e) => {
    setSearchName(e.target.innerText);
  };

  const InitTotalSearch = () => {
    setSearchName("검색어");
  };

  const InitTotalMember = () => {
    setMemberName("그룹 선택");
  };

  return (
    <>
      <RestaurantWrapper>
        <FilterBar>
          <RoundTagFilter
            onClick={toggleMember}
            text={memberName}
          ></RoundTagFilter>
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
                <InitButton onClick={InitTotalMember} text="초기화" />
                <ApplyButton onClick={toggleMember} text="적용하기" />
              </div>
            </div>
          </Modal>
          <RoundTagFilter
            onClick={toggleSearch}
            text={searchName}
          ></RoundTagFilter>
          <Modal open={SearchOpen} className="customOverlay bottomModal">
            <div className="modal_list">
              <div className="modal_name">검색어</div>
              <div className="circleType fixedcircleType">
                {searchMenu.map((v) => {
                  return (
                    <div key={v} id={v} className="selectSearchMenu">
                      <div
                        onClick={selectSearchName}
                        className={
                          searchName == v
                            ? "searchName searchNameChecked"
                            : "searchName"
                        }
                      >
                        {v}
                      </div>

                      <FontAwesomeIcon
                        className={
                          searchName == v ? "checkIconChecked" : "checkIcon"
                        }
                        icon={faCheck}
                      />
                    </div>
                  );
                })}
              </div>
              <div className="InitApplyBtn">
                <InitButton onClick={InitTotalSearch} text="초기화" />
                <ApplyButton onClick={toggleSearch} text="적용하기" />
              </div>
            </div>
          </Modal>
          <RoundTagFilter text="날짜"></RoundTagFilter>
        </FilterBar>
        {data.map((el) => (
          <Post
            key={el.id}
            nickName={el.nickName ? el.nickName : null}
            userId={el.userId ? el.userId : null}
            date={el.date ? el.date : null}
            content={el.content ? el.content : null}
            reply={el.reply ? el.reply : null}
            retweet={el.retweet ? el.retweet : null}
            heart={el.heart ? el.heart : null}
          />
        ))}
      </RestaurantWrapper>
    </>
  );
};

export default Restaurant;

// const data = [
//   {
//     id: 0,
//     nickName: "강아지",
//     userId: "puppy",
//     date: "2022/08/05",
//     content:
//       "안녕하세요 게시글입니다. 게시글의 내용입니다. 이렇게 저렇게 쓰고 있습니다. 트위터 입니다.",
//     reply: 10,
//     retweet: 11400,
//     heart: 6586,
//   },
//   {
//     id: 1,
//     nickName: "고양이",
//     userId: "cat",
//     date: "2022/08/05",
//     content:
//       "안녕하세요 게시글입니다. 게시글의 내용입니다. 이렇게 저렇게 쓰고 있습니다. 트위터 입니다.",
//     reply: 12,
//     retweet: 1100,
//     heart: 658,
//   },
//   {
//     id: 2,
//     nickName: "고양이",
//     userId: "cat",
//     date: "2022/08/05",
//     content:
//       "안녕하세요 게시글입니다. 게시글의 내용입니다. 이렇게 저렇게 쓰고 있습니다. 트위터 입니다.",
//     reply: 12,
//     retweet: 1100,
//     heart: 658,
//   },
//   {
//     id: 3,
//     nickName: "멍멍이",
//     userId: "puppy",
//     date: "2022/08/05",
//     content:
//       "안녕하세요 멍멍이입니다. 게시글의 멍멍이입니다. 이렇게 저렇게 쓰고 있습니다. 트위터 입니다.",
//     reply: 124,
//     retweet: 110009,
//     heart: 65889,
//   },
// ];
