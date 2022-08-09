import React from 'react';

import { SquareTag, SquareTagBlack } from "component/Tag/SquareTag";
import { RoundTag, RoundTagBig } from "component/Tag/RoundTag";
import Logo from "component/Logo";

import {
    IntroWrapper
} from './styles';

const Intro = () => {
    return <>
        <IntroWrapper>
            <SquareTag text="All" color=""/>
            <SquareTagBlack text="All" color="true"/>
            <RoundTag text="All"/>
            <RoundTagBig text="All" color="true"/>
            <Logo width={176} height={40}/>
        </IntroWrapper>
    </>
};

export default Intro;