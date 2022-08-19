import React from "react";
import "./Button.css";
import { InitButtonWrapper, ApplyButtonWrapper } from "./styles";
export const InitButton = (props) => {
  return (
    <InitButtonWrapper onClick={props.onClick}>{props.text}</InitButtonWrapper>
  );
};

export const ApplyButton = (props) => {
  return (
    <ApplyButtonWrapper onClick={props.onClick}>
      {props.text}
    </ApplyButtonWrapper>
  );
};
