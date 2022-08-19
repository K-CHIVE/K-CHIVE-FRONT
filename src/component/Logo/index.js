import React from "react";
import PropTypes from "prop-types";

export const Logo = (props) => {
  return (
    <img
      width={props.width}
      height={props.height}
      src="/img/K_chive.png"
      alt="K_chive Logo"
    />
  );
};

export const LogoBlack = (props) => {
  return (
    <img
      width={props.width}
      height={props.height}
      src="/img/K_chive_black.png"
      alt="K_chive Logo"
    />
  );
};

Logo.defaultProps = {
  width: 176,
  height: 40,
};

Logo.propTypes = {
  width: PropTypes.node.isRequired,
  height: PropTypes.node.isRequired,
};

LogoBlack.defaultProps = {
  width: 176,
  height: 40,
};

LogoBlack.propTypes = {
  width: PropTypes.node.isRequired,
  height: PropTypes.node.isRequired,
};