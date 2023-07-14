import React, { useState, useEffect } from "react";

const Card = (props) => {
  const { name, src, setGameOver, setShuffle, id, setClick, click } = props;

  onclick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log(id);
    console.log(name);
    setShuffle(true);
    if (!click[id]) {
      console.log("update score");
    } else {
      console.log("game over");
      setGameOver();
    }
    setClick(id);
  };

  return (
    <div
      className="card"
      onClick={onclick}
      style={{ width: "300px", height: "400px" }}
    >
      <img src={src} style={{ width: "300px", height: "380px" }} />
      <h5>{name}</h5>
    </div>
  );
};

export default Card;
