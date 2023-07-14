import React, { useState, useEffect } from "react";
import Card from "./Card";

export default function Game() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [isGameOver, setGameOver] = useState(false);
  const [cards, setcards] = useState([
    <Card
      name="Deer"
      isGameOver={isGameOver}
      setGameOver={setGameOver}
      score={score}
      setScore={setScore}
      src="https://images.unsplash.com/photo-1484406566174-9da000fda645?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YW5pbWFsfGVufDB8MXwwfHx8Mg%3D%3D&auto=format&fit=crop&w=500&q=60"
    />,
    <Card
      name="Parrot"
      isGameOver={isGameOver}
      setGameOver={setGameOver}
      score={score}
      setScore={setScore}
      src="https://images.unsplash.com/photo-1555169062-013468b47731?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YW5pbWFsfGVufDB8MXwwfHx8Mg%3D%3D&auto=format&fit=crop&w=500&q=60"
    />,
    <Card
      name="Tiger"
      isGameOver={isGameOver}
      setGameOver={setGameOver}
      score={score}
      setScore={setScore}
      src="https://images.unsplash.com/photo-1602491453631-e2a5ad90a131?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YW5pbWFsfGVufDB8MXwwfHx8Mg%3D%3D&auto=format&fit=crop&w=500&q=60"
    />,
    <Card
      name="Pug"
      isGameOver={isGameOver}
      setGameOver={setGameOver}
      score={score}
      setScore={setScore}
      src="https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YW5pbWFsfGVufDB8MXwwfHx8Mg%3D%3D&auto=format&fit=crop&w=500&q=60"
    />,
    <Card
      name="Rabbit"
      isGameOver={isGameOver}
      setGameOver={setGameOver}
      score={score}
      setScore={setScore}
      src="https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YW5pbWFsfGVufDB8MXwwfHx8Mg%3D%3D&auto=format&fit=crop&w=500&q=60"
    />,
    <Card
      name="Gold Fish"
      isGameOver={isGameOver}
      setGameOver={setGameOver}
      score={score}
      setScore={setScore}
      src="https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YW5pbWFsfGVufDB8MXwwfHx8Mg%3D%3D&auto=format&fit=crop&w=500&q=60"
    />,
    <Card
      name="Eagle"
      isGameOver={isGameOver}
      setGameOver={setGameOver}
      score={score}
      setScore={setScore}
      src="https://images.unsplash.com/photo-1611689342806-0863700ce1e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFuaW1hbHxlbnwwfDF8MHx8fDI%3D&auto=format&fit=crop&w=500&q=60"
    />,
    <Card
      name="Frog"
      isGameOver={isGameOver}
      setGameOver={setGameOver}
      score={score}
      setScore={setScore}
      src="https://images.unsplash.com/photo-1579380656108-f98e4df8ea62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YW5pbWFsfGVufDB8MXwwfHx8Mg%3D%3D&auto=format&fit=crop&w=500&q=60"
    />,
    <Card
      name="Meerkat"
      isGameOver={isGameOver}
      setGameOver={setGameOver}
      score={score}
      setScore={setScore}
      src="https://images.unsplash.com/photo-1586959140255-aab0163e21cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFuaW1hbHxlbnwwfDF8MHx8fDI%3D&auto=format&fit=crop&w=500&q=60"
    />,
    <Card
      name="Iguana"
      isGameOver={isGameOver}
      setGameOver={setGameOver}
      score={score}
      setScore={setScore}
      src="https://images.unsplash.com/photo-1610629651605-0b181ad69aab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFuaW1hbHxlbnwwfDF8MHx8fDI%3D&auto=format&fit=crop&w=500&q=60"
    />,
    <Card
      name="Cat"
      isGameOver={isGameOver}
      setGameOver={setGameOver}
      score={score}
      setScore={setScore}
      src="https://images.unsplash.com/photo-1581300134629-4c3a06a31948?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGFuaW1hbHxlbnwwfDF8MHx8fDI%3D&auto=format&fit=crop&w=500&q=60"
    />,
  ]);

  return <div className="game">{cards.map((e) => e)}</div>;
}
