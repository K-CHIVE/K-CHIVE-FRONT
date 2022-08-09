import React from 'react';
import PropTypes from 'prop-types';

const Logo = (props) => {
    return (
        <img width={props.width} height={props.height} src="/img/K_chive.png" alt="K_chive Logo"/>
    )
}

Logo.defaultProps = {
    width: 176,
    height: 40
}

Logo.propTypes = {
    width: PropTypes.node.isRequired,
    height: PropTypes.node.isRequired,
}

export default Logo;