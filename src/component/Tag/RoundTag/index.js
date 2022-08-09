import React from 'react';
import PropTypes from 'prop-types';

import {
    RoundTagWrapper,
    RoundTagBigWrapper,
} from './styles';

export const RoundTag = (props) => {
    return (
        <RoundTagWrapper>
            {props.text}
        </RoundTagWrapper>
    )
};

RoundTag.propTypes = {
    text: PropTypes.node.isRequired,
}

export const RoundTagBig = (props) => {
    return (
        <RoundTagBigWrapper primary={props.color} >
            {props.text}
        </RoundTagBigWrapper>
    )
}

RoundTagBig.propTypes = {
    text: PropTypes.node.isRequired,
    color: PropTypes.node.isRequired,
}