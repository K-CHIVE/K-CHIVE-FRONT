import React from 'react';
import { ReactComponent as ArrowDownIcon } from 'assets/arrow-down.svg';
import PropTypes from 'prop-types';

import {
    RoundTagFilterWrapper
} from './styles';

const RoundTagFilter = (props) => {
    return (
        <RoundTagFilterWrapper {...props}>
            {props.text}
            <ArrowDownIcon />
        </RoundTagFilterWrapper>
    )
};

RoundTagFilter.propTypes = {
    text: PropTypes.node.isRequired,
}

export default RoundTagFilter