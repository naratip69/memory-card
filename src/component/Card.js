import React, { useState, useEffect } from "react";

const Card = (props) => {
  const [isClick, setClick] = useState(false);
  const {
    name,
    src,
    isGameOver,
    setGameOver,
    score,
    setScore,
    isShuffle,
    setShuffle,
  } = props;

  onclick = (e) => {
    e.stopPropagation();
    e.preventDefault();
    console.log(isClick);
    console.log(name);
    //setShuffle(true);
    if (!isClick) {
      console.log("update score");
      setClick(true);
      setScore(score + 1);
      return;
    } else {
      console.log("game over");
      setClick(false);
      setGameOver(true);
    }
  };

  return (
    <div className="card" onClick={onclick}>
      <img src={src} />
      <h5>{name}</h5>
    </div>
  );
};

export default Card;
