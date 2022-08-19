import React from 'react';
import PropTypes from 'prop-types';

import {
    SquareTagWrapper,
    SquareTagBlackWrapper,
} from './styles';

export const SquareTag = (props) => {
    return <>
        <SquareTagWrapper primary={props.color} {...props}>
            {props.text}
        </SquareTagWrapper>
    </>
};

SquareTag.propTypes = {
    text: PropTypes.node.isRequired,
    color: PropTypes.node.isRequired,
}

export const SquareTagBlack = (props) => {
    return <>
        <SquareTagBlackWrapper primary={props.color} {...props}>
            {props.text}
        </SquareTagBlackWrapper>
    </>
}

SquareTagBlack.propTypes = {
    text: PropTypes.node.isRequired,
    color: PropTypes.node.isRequired,
}