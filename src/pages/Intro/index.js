import React from 'react';

import Logo from "component/Logo";

import {
    IntroWrapper
} from './styles';

const Intro = () => {
    return <>
        <IntroWrapper>
            <Logo width={177} height={50}/>
        </IntroWrapper>
    </>
};

export default Intro;