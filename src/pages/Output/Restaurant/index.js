import React from 'react';

import Post from '../Post';
import RoundTagFilter from 'component/Tag/RoundTagFilter';

import {
    RestaurantWrapper, FilterBar
} from './styles';

const Restaurant = () => {
    return <>
        <RestaurantWrapper>
            <FilterBar>
                <RoundTagFilter text="멤버"></RoundTagFilter>
                <RoundTagFilter text="검색어"></RoundTagFilter>
                <RoundTagFilter text="날짜"></RoundTagFilter>
            </FilterBar>
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
        </RestaurantWrapper>
    </>
};

export default Restaurant;

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