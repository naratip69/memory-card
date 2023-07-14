import React, { useState, useEffect } from "react";

export default function Card(props) {
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
  const [isClick, setClick] = useState(false);

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
    }
    console.log("game over");
    setClick(false);
    setGameOver(true);
  };

  return (
    <div className="card" onClick={onclick}>
      <img src={src} />
      <h5>{name}</h5>
    </div>
  );
}
