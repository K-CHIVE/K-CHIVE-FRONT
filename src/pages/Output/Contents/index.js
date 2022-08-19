import React, {useState} from 'react';

import Post from '../Post';
import RoundTagFilter from 'component/Tag/RoundTagFilter';
import MenuOutput from "../../../component/MenuOutput";

import * as C from './styles';

export const ImgContents = () => {
    const [one, setOne] = useState(true);
    const [two, setTwo] = useState(false);
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