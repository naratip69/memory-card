import React, { useState, useEffect } from "react";
import Card from "./Card";

export default function Game() {
  let [score, setScore] = useState(0);
  let [bestScore, setBestScore] = useState(0);
  let [isGameOver, setGameOver] = useState(false);
  let [isShuffle, setShuffle] = useState(false);
  let [click, setClick] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false,
    10: false,
    11: false,
  });
  function toggleClick(targetId) {
    let obj = click;
    obj[targetId] = !obj[targetId];
    setClick(obj);
  }
  function gameOver() {
    setGameOver(true);
  }
  const [cards, setCards] = useState([
    {
      name: "Deer",
      setGameOver: gameOver,
      src: "https://images.unsplash.com/photo-1484406566174-9da000fda645?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YW5pbWFsfGVufDB8MXwwfHx8Mg%3D%3D&auto=format&fit=crop&w=500&q=60",
      setShuffle: setShuffle,
      click: click,
      setClick: toggleClick,
      id: "1",
    },
    {
      name: "Parrot",
      setGameOver: gameOver,
      src: "https://images.unsplash.com/photo-1555169062-013468b47731?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YW5pbWFsfGVufDB8MXwwfHx8Mg%3D%3D&auto=format&fit=crop&w=500&q=60",
      setShuffle: setShuffle,
      click: click,
      setClick: toggleClick,
      id: "2",
    },
    {
      name: "Tiger",
      setGameOver: gameOver,
      src: "https://images.unsplash.com/photo-1602491453631-e2a5ad90a131?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YW5pbWFsfGVufDB8MXwwfHx8Mg%3D%3D&auto=format&fit=crop&w=500&q=60",
      setShuffle: setShuffle,
      click: click,
      setClick: toggleClick,
      id: "3",
    },
    {
      name: "Pug",
      setGameOver: gameOver,
      src: "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YW5pbWFsfGVufDB8MXwwfHx8Mg%3D%3D&auto=format&fit=crop&w=500&q=60",
      setShuffle: setShuffle,
      click: click,
      setClick: toggleClick,
      id: "4",
    },
    {
      name: "Rabbit",
      setGameOver: gameOver,
      src: "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YW5pbWFsfGVufDB8MXwwfHx8Mg%3D%3D&auto=format&fit=crop&w=500&q=60",
      setShuffle: setShuffle,
      click: click,
      setClick: toggleClick,
      id: "5",
    },
    {
      name: "Gold Fish",
      setGameOver: gameOver,
      src: "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YW5pbWFsfGVufDB8MXwwfHx8Mg%3D%3D&auto=format&fit=crop&w=500&q=60",
      setShuffle: setShuffle,
      click: click,
      setClick: toggleClick,
      id: "6",
    },

    {
      name: "Eagle",
      setGameOver: gameOver,
      src: "https://images.unsplash.com/photo-1611689342806-0863700ce1e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFuaW1hbHxlbnwwfDF8MHx8fDI%3D&auto=format&fit=crop&w=500&q=60",
      setShuffle: setShuffle,
      click: click,
      setClick: toggleClick,
      id: "7",
    },
    {
      name: "Frog",
      setGameOver: gameOver,
      src: "https://images.unsplash.com/photo-1579380656108-f98e4df8ea62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YW5pbWFsfGVufDB8MXwwfHx8Mg%3D%3D&auto=format&fit=crop&w=500&q=60",
      setShuffle: setShuffle,
      click: click,
      setClick: toggleClick,
      id: "8",
    },
    {
      name: "Meerkat",
      setGameOver: gameOver,
      src: "https://images.unsplash.com/photo-1586959140255-aab0163e21cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFuaW1hbHxlbnwwfDF8MHx8fDI%3D&auto=format&fit=crop&w=500&q=60",
      setShuffle: setShuffle,
      click: click,
      setClick: toggleClick,
      id: "9",
    },
    {
      name: "Iguana",
      setGameOver: gameOver,
      src: "https://images.unsplash.com/photo-1610629651605-0b181ad69aab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFuaW1hbHxlbnwwfDF8MHx8fDI%3D&auto=format&fit=crop&w=500&q=60",
      setShuffle: setShuffle,
      click: click,
      setClick: toggleClick,
      id: "10",
    },
    {
      name: "Cat",
      setGameOver: gameOver,
      src: "https://images.unsplash.com/photo-1581300134629-4c3a06a31948?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGFuaW1hbHxlbnwwfDF8MHx8fDI%3D&auto=format&fit=crop&w=500&q=60",
      setShuffle: setShuffle,
      click: click,
      setClick: toggleClick,
      id: 11,
    },
  ]);
  function shuffle() {
    let out = [...cards];
    let index = cards.length;
    let randomIndex;
    while (index != 0) {
      randomIndex = Math.floor(Math.random() * index);
      index--;
      [out[index], out[randomIndex]] = [out[randomIndex], out[index]];
    }
    setCards(out);
  }

  useEffect(() => {
    console.log("call");
    if (isShuffle) {
      shuffle();
      setShuffle(false);
      setScore(!isGameOver ? score + 1 : 0);
    }
    if (isGameOver) {
      console.log("gameover");
      setBestScore(bestScore < score ? score : bestScore);
      setScore(0);
      setGameOver(false);
    }
  }, [score, isGameOver, isShuffle, click, bestScore]);

  return (
    <div className="game">
      <div>Score:{score}</div>
      <div>Bestscore:{bestScore}</div>
      {cards.map((e) => {
        return (
          <Card
            name={e["name"]}
            setGameOver={e["setGameOver"]}
            score={e["score"]}
            src={e["src"]}
            setShuffle={e["setShuffle"]}
            click={e["click"]}
            setClick={e["setClick"]}
            id={e["id"]}
          />
        );
      })}
    </div>
  );
}
