import React from "react";
import "./ButtonSecondary.css";

function ButtonSecondary(props) {
  return <button className="ButtonSecondary">{props.text}</button>;
}

export { ButtonSecondary };
