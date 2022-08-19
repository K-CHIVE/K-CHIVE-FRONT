import React from "react";

import { Logo } from "component/Logo";
import { Link } from "react-router-dom";

import { IntroWrapper } from "./styles";

const Intro = () => {
  return (
    <>
    <Link to="/search">
      <IntroWrapper>
        <Logo width={177} height={50} />
      </IntroWrapper>
    </Link>
    </>
  );
};

export default Intro;
