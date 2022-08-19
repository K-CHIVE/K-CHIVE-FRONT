import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
const Modal = ({ open, children, className }) => {
  console.log(children);
  if (!open) return null;
  return ReactDOM.createPortal(
    <>
      <div className={className}>{children}</div>
    </>,
    document.getElementById("portal")
  );
};

export default Modal;
