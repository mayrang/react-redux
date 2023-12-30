import React from "react";

export default function Header({ score }) {
  return (
    <div className="heading">
      <h1 className="title">2048</h1>
      <div className="scores-container">
        <div className="score-container">{score}</div>
        <div className="best-container">2448</div>
      </div>
    </div>
  );
}
