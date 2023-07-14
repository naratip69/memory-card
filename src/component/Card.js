import React, { useState, useEffect } from "react";

export default function Card(props) {
  const { name, src, isGameOver, setGameOver, score, setScore } = props;
  const [isClick, setClick] = useState(false);

  onclick = (e) => {
    if (!isClick) {
      console.log("update score");
      setClick(true);
      setScore(score + 1);
    } else {
      console.log("game over");
      setGameOver(true);
    }
  };

  return (
    <div className="card" onClick={onclick}>
      <img src={src} />
      <h5>{name}</h5>
    </div>
  );
}
