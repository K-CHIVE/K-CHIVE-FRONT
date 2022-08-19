import React, { useState } from 'react';

import Post from '../Post';
import RoundTagFilter from 'component/Tag/RoundTagFilter';
import MenuOutput from "../../../component/MenuOutput";

import * as T from './styles';

//1. Photocard
export const TransPoca = () => {
    const [one, setOne] = useState(true);
    const [two, setTwo] = useState(false);
    const [three, setThree] = useState(false);

    const handleOne = () => {
        setOne(true);
        setTwo(false);
        setThree(false);
        window.location.href="/transaction/poca";
    }
    const handleTwo = () => {
        setOne(false);
        setTwo(true);
        setThree(false);
        window.location.href="/transaction/album";
    }
    const handleThree = () => {
        setOne(false);
        setTwo(false);
        setThree(true);
        window.location.href="/transaction/goods";
    }

    return <>
        <T.TransactionWrapper>
        <MenuOutput menu={"transaction"} />
            <T.Feed>
                <T.MenuBarWrapper>
                    <T.TypeWrapper>
                        <T.Type bg={one} onClick={handleOne}>
                            <T.TransactionType fontColor={one}>
                            포토카드
                            </T.TransactionType>
                        </T.Type>
                        <T.Type bg={two} onClick={handleTwo}>
                            <T.TransactionType fontColor={two}>
                            앨범
                            </T.TransactionType>
                        </T.Type>
                        <T.Type bg={three} onClick={handleThree}>
                            <T.TransactionType fontColor={three}>
                            굿즈
                            </T.TransactionType>
                        </T.Type>
                    </T.TypeWrapper>
                </T.MenuBarWrapper>
                <T.FilterBar>
                    <RoundTagFilter text="멤버"></RoundTagFilter>
                    <RoundTagFilter text="검색어"></RoundTagFilter>
                    <RoundTagFilter text="날짜"></RoundTagFilter>
                </T.FilterBar>
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
            </T.Feed>
        </T.TransactionWrapper>
    </>
};

//2. Album
export const TransAlbum = () => {
    const [one, setOne] = useState(false);
    const [two, setTwo] = useState(true);
    const [three, setThree] = useState(false);

    const handleOne = () => {
        setOne(true);
        setTwo(false);
        setThree(false);
        window.location.href="/transaction/poca";
    }
    const handleTwo = () => {
        setOne(false);
        setTwo(true);
        setThree(false);
        window.location.href="/transaction/album";
    }
    const handleThree = () => {
        setOne(false);
        setTwo(false);
        setThree(true);
        window.location.href="/transaction/goods";
    }

    return <>
        <T.TransactionWrapper>
        <MenuOutput menu={"transaction"} />
            <T.Feed>
                <T.MenuBarWrapper>
                    <T.TypeWrapper>
                        <T.Type bg={one} onClick={handleOne}>
                            <T.TransactionType fontColor={one}>
                            포토카드
                            </T.TransactionType>
                        </T.Type>
                        <T.Type bg={two} onClick={handleTwo}>
                            <T.TransactionType fontColor={two}>
                            앨범
                            </T.TransactionType>
                        </T.Type>
                        <T.Type bg={three} onClick={handleThree}>
                            <T.TransactionType fontColor={three}>
                            굿즈
                            </T.TransactionType>
                        </T.Type>
                    </T.TypeWrapper>
                </T.MenuBarWrapper>
                <T.FilterBar>
                    <RoundTagFilter text="멤버"></RoundTagFilter>
                    <RoundTagFilter text="검색어"></RoundTagFilter>
                    <RoundTagFilter text="날짜"></RoundTagFilter>
                </T.FilterBar>
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
            </T.Feed>
        </T.TransactionWrapper>
    </>
};

//3. Goods
export const TransGoods = () => {
    const [one, setOne] = useState(false);
    const [two, setTwo] = useState(false);
    const [three, setThree] = useState(true);

    const handleOne = () => {
        setOne(true);
        setTwo(false);
        setThree(false);
        window.location.href="/transaction/poca";
    }
    const handleTwo = () => {
        setOne(false);
        setTwo(true);
        setThree(false);
        window.location.href="/transaction/album";
    }
    const handleThree = () => {
        setOne(false);
        setTwo(false);
        setThree(true);
        window.location.href="/transaction/goods";
    }

    return <>
        <T.TransactionWrapper>
        <MenuOutput menu={"transaction"} />
            <T.Feed>
                <T.MenuBarWrapper>
                    <T.TypeWrapper>
                        <T.Type bg={one} onClick={handleOne}>
                            <T.TransactionType fontColor={one}>
                            포토카드
                            </T.TransactionType>
                        </T.Type>
                        <T.Type bg={two} onClick={handleTwo}>
                            <T.TransactionType fontColor={two}>
                            앨범
                            </T.TransactionType>
                        </T.Type>
                        <T.Type bg={three} onClick={handleThree}>
                            <T.TransactionType fontColor={three}>
                            굿즈
                            </T.TransactionType>
                        </T.Type>
                    </T.TypeWrapper>
                </T.MenuBarWrapper>
                <T.FilterBar>
                    <RoundTagFilter text="멤버"></RoundTagFilter>
                    <RoundTagFilter text="검색어"></RoundTagFilter>
                    <RoundTagFilter text="날짜"></RoundTagFilter>
                </T.FilterBar>
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
            </T.Feed>
        </T.TransactionWrapper>
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
    }

]