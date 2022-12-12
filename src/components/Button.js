import React from "react";

const Button = ({ title, type }) => {
  // check type for next, back, or confirm
  const currentClass =
    type === "next"
      ? "next-button"
      : type === "back"
      ? "back-button"
      : "confirm-button";
  return <button className={currentClass}>{title}</button>;
};

export default Button;
