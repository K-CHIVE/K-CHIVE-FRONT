import React from "react";
import "./Button.css";
const Button = () => {
  return (
    <>
      <div className="select_button">
        <button className="styleBtn initBtn">초기화</button>
        <button className="styleBtn applyBtn">적용하기</button>
      </div>
    </>
  );
};

export default Button;
