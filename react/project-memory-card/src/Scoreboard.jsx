import { useState, useEffect } from "react";

function Scoreboard({ scoreRef, highScoreRef }) {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);


  console.log('score b: ', score);
  console.log('highScore b: ', highScore); 
 
  return (
    <div className="scoreboard">
      <span>Score: {score}</span>
      <span>High Score: {highScore}</span>
    </div>
  );
}

export default Scoreboard;