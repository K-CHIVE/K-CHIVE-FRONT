import React, { useState, useEffect } from 'react';

import Post from '../Post';
import RoundTagFilter from 'component/Tag/RoundTagFilter';
import MenuOutput from "../../../component/MenuOutput";
import Modal from "component/Modal";
import { InitButton, ApplyButton } from "component/Button";

import * as C from './styles';

export const ImgContents = () => {
    const [member, setMember] = useState([]);
    const [memberName, setMemberName] = useState("멤버");
    const [memberOpen, setMemberOpen] = useState(false);
    const [one, setOne] = useState(true);
    const [two, setTwo] = useState(false);
    const [three, setThree] = useState(false);
    console.log(memberOpen);
    
    const selectMember = (e) => {
      setMemberName(e.target.value);
    };
    const toggleMember = () => {
      setMemberOpen(!memberOpen);
      console.log(memberOpen);
    };

    const handleOne = () => {
        setOne(true);
        setTwo(false);
        setThree(false);
        window.location.href="/image-search/contents";
    }
    const handleTwo = () => {
        setOne(false);
        setTwo(true);
        setThree(false);
        window.location.href="/image-search/groupnotifications";
    }
    const handleThree = () => {
        setOne(false);
        setTwo(false);
        setThree(true);
        window.location.href="/image-search/fantweets";
    }
    const InitTotalMember = () => {
        setMemberName("그룹 선택");
      };

    useEffect(() => {
        setMember(theboysMember);
      }, []);

    return <>
        <C.ContentsWrapper>
            <MenuOutput menu={"contents"} />
            <Modal open={memberOpen} className="customOverlay bottomModal">
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
            <C.Feed>
                <C.MenuBarWrapper>
                    <C.TypeWrapper>
                        <C.Type bg={one} onClick={handleOne}>
                            <C.ContentsType fontColor={one}>
                            이미지/gif
                            </C.ContentsType>
                        </C.Type>
                        <C.Type bg={two} onClick={handleTwo}>
                            <C.ContentsType fontColor={two}>
                            공식 공지
                            </C.ContentsType>
                        </C.Type>
                        <C.Type bg={three} onClick={handleThree}>
                            <C.ContentsType fontColor={three}>
                            팬 트윗
                            </C.ContentsType>
                        </C.Type>
                    </C.TypeWrapper>
                </C.MenuBarWrapper>
                <C.FilterBar>
                    <RoundTagFilter onClick={toggleMember} text="멤버"></RoundTagFilter>
                    <RoundTagFilter text="검색어"></RoundTagFilter>
                    <RoundTagFilter text="날짜"></RoundTagFilter>
                </C.FilterBar>
                {data.map((el)=> (
                    <Post
                        key={el.id}
                        nickName={el.nickName}
                        userId={el.userId}
                        date={el.date}
                        content={el.content}
                        reply={el.reply}
                        retweet={el.retweet}
                        heart={el.heart}
                    />
                ))}
            </C.Feed>
        </C.ContentsWrapper>
    </>
};

export const ImgOfficial = () => {
    const [one, setOne] = useState(false);
    const [two, setTwo] = useState(true);
    const [three, setThree] = useState(false);

    const handleOne = () => {
        setOne(true);
        setTwo(false);
        setThree(false);
        window.location.href="/image-search/contents";
    }
    const handleTwo = () => {
        setOne(false);
        setTwo(true);
        setThree(false);
        window.location.href="/image-search/groupnotifications";
    }
    const handleThree = () => {
        setOne(false);
        setTwo(false);
        setThree(true);
        window.location.href="/image-search/fantweets";
    }

    return <>
        <C.ContentsWrapper>
            <MenuOutput menu={"contents"} />
            <C.Feed>
                <C.MenuBarWrapper>
                    <C.TypeWrapper>
                        <C.Type bg={one} onClick={handleOne}>
                            <C.ContentsType fontColor={one}>
                            이미지/gif
                            </C.ContentsType>
                        </C.Type>
                        <C.Type bg={two} onClick={handleTwo}>
                            <C.ContentsType fontColor={two}>
                            공식 공지
                            </C.ContentsType>
                        </C.Type>
                        <C.Type bg={three} onClick={handleThree}>
                            <C.ContentsType fontColor={three}>
                            팬 트윗
                            </C.ContentsType>
                        </C.Type>
                    </C.TypeWrapper>
                </C.MenuBarWrapper>
                <C.FilterBar>
                    <RoundTagFilter text="멤버"></RoundTagFilter>
                    <RoundTagFilter text="검색어"></RoundTagFilter>
                    <RoundTagFilter text="날짜"></RoundTagFilter>
                </C.FilterBar>
                {data.map((el)=> (
                    <Post
                        key={el.id}
                        nickName={el.nickName}
                        userId={el.userId}
                        date={el.date}
                        content={el.content}
                        reply={el.reply}
                        retweet={el.retweet}
                        heart={el.heart}
                    />
                ))}
            </C.Feed>
        </C.ContentsWrapper>
    </>
};

export const ImgFan = () => {
    const [one, setOne] = useState(false);
    const [two, setTwo] = useState(false);
    const [three, setThree] = useState(true);

    const handleOne = () => {
        setOne(true);
        setTwo(false);
        setThree(false);
        window.location.href="/image-search/contents";
    }
    const handleTwo = () => {
        setOne(false);
        setTwo(true);
        setThree(false);
        window.location.href="/image-search/groupnotifications";
    }
    const handleThree = () => {
        setOne(false);
        setTwo(false);
        setThree(true);
        window.location.href="/image-search/fantweets";
    }

    return <>
        <C.ContentsWrapper>
            <MenuOutput menu={"contents"} />
            <C.Feed>
                <C.MenuBarWrapper>
                    <C.TypeWrapper>
                        <C.Type bg={one} onClick={handleOne}>
                            <C.ContentsType fontColor={one}>
                            이미지/gif
                            </C.ContentsType>
                        </C.Type>
                        <C.Type bg={two} onClick={handleTwo}>
                            <C.ContentsType fontColor={two}>
                            공식 공지
                            </C.ContentsType>
                        </C.Type>
                        <C.Type bg={three} onClick={handleThree}>
                            <C.ContentsType fontColor={three}>
                            팬 트윗
                            </C.ContentsType>
                        </C.Type>
                    </C.TypeWrapper>
                </C.MenuBarWrapper>
                <C.FilterBar>
                    <RoundTagFilter text="멤버"></RoundTagFilter>
                    <RoundTagFilter text="검색어"></RoundTagFilter>
                    <RoundTagFilter text="날짜"></RoundTagFilter>
                </C.FilterBar>
                {data.map((el)=> (
                    <Post
                        key={el.id}
                        nickName={el.nickName}
                        userId={el.userId}
                        date={el.date}
                        content={el.content}
                        reply={el.reply}
                        retweet={el.retweet}
                        heart={el.heart}
                    />
                ))}
            </C.Feed>
        </C.ContentsWrapper>
    </>
};

const data = [
    {   
        id: 0,
        nickName: "강아지",
        userId: "puppy",
        date: "2022/08/05",
        content: "안녕하세요 게시글입니다. 게시글의 내용입니다. 이렇게 저렇게 쓰고 있습니다. 트위터 입니다.",
        reply: 10,
        retweet: 11400,
        heart: 6586
    },
    {   
        id: 1,
        nickName: "고양이",
        userId: "cat",
        date: "2022/08/05",
        content: "안녕하세요 게시글입니다. 게시글의 내용입니다. 이렇게 저렇게 쓰고 있습니다. 트위터 입니다.",
        reply: 12,
        retweet: 1100,
        heart: 658
    },
    {
        id: 2,
        nickName: "고양이",
        userId: "cat",
        date: "2022/08/05",
        content: "안녕하세요 게시글입니다. 게시글의 내용입니다. 이렇게 저렇게 쓰고 있습니다. 트위터 입니다.",
        reply: 12,
        retweet: 1100,
        heart: 658
    },
    {
        id: 3,
        nickName: "멍멍이",
        userId: "puppy",
        date: "2022/08/05",
        content: "안녕하세요 멍멍이입니다. 게시글의 멍멍이입니다. 이렇게 저렇게 쓰고 있습니다. 트위터 입니다.",
        reply: 124,
        retweet: 110009,
        heart: 65889
    },
    {
        id: 4,
        nickName: "멍멍이",
        userId: "puppy",
        date: "2022/08/05",
        content: "안녕하세요 멍멍이입니다. 게시글의 멍멍이입니다. 이렇게 저렇게 쓰고 있습니다. 트위터 입니다.",
        reply: 124,
        retweet: 110009,
        heart: 65889
    },
    {
        id: 5,
        nickName: "고양이",
        userId: "cat",
        date: "2022/08/05",
        content: "안녕하세요 게시글입니다. 게시글의 내용입니다. 이렇게 저렇게 쓰고 있습니다. 트위터 입니다.",
        reply: 12,
        retweet: 1100,
        heart: 658
    },

]

const theboysMember = [
    {
      idx: 1,
      name: "상연",
    },
    {
      idx: 2,
      name: "제이콥",
    },
    {
      idx: 3,
      name: "영훈",
    },
    {
      idx: 4,
      name: "현재",
    },
    {
      idx: 5,
      name: "주연",
    },
    {
      idx: 6,
      name: "케빈",
    },
    {
      idx: 7,
      name: "뉴",
    },
    {
      idx: 8,
      name: "큐",
    },
    {
      idx: 9,
      name: "주학년",
    },
    {
      idx: 10,
      name: "선우",
    },
    {
      idx: 11,
      name: "에릭",
    }
  ];