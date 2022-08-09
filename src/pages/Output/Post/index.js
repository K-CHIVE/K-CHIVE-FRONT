import React from 'react';
import PropTypes from 'prop-types';

import * as P from './styles';

const Post = (props) => {
    return <>
        <P.PostWrapper>
            <P.PostInfo>
                <P.InfoAlign>
                    <P.NickName>{props.nickName}</P.NickName>
                    <P.UserId>@{props.userId}</P.UserId>
                    <P.Date>{props.date}</P.Date>
                </P.InfoAlign>
                <P.GoTwitter>트위터에서 →</P.GoTwitter>
            </P.PostInfo>
            <P.Content>{props.content}</P.Content>
            <P.PostRecords>
                <P.Record>{props.reply}개의 답글</P.Record>
                <P.Record>{props.retweet} 리트윗 됨</P.Record>
                <P.Record>{props.heart} 맘찍 됨</P.Record>
            </P.PostRecords>
        </P.PostWrapper>
    </>
};

Post.propTypes = {
    nickName: PropTypes.node.isRequired,
    userId: PropTypes.node.isRequired,
    date: PropTypes.node.isRequired,
    content: PropTypes.node.isRequired,
    reply: PropTypes.node.isRequired,
    retweet: PropTypes.node.isRequired,
    heart: PropTypes.node.isRequired,
}

export default Post;