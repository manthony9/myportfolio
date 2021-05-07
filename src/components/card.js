import React from "react";
import "./card.css";

const card = (props) => {
  return (
    <>
      <div className="Card">
        <img src={props.image} alt="" />
        <h3>{props.title}</h3>
        <p>{props.text}</p>
      </div>
    </>
  );
};

export default card;
