import { useState, useEffect, useRef } from "react";

import Header from "./Header.jsx";
import Scoreboard from "./Scoreboard.jsx";
import Cards from "./Cards.jsx";
import Footer from "./Footer.jsx";

function App() {
  let scoreRef = useRef(0);
  let highScoreRef = useRef(0);
  
  useEffect(() => {
    if (scoreRef.current > highScoreRef.current) {
      highScoreRef.current = scoreRef.current;
    }
  }, [scoreRef.current]);

  const handleCards = () => {
    scoreRef.current++;
    console.log("score: ", scoreRef.current);
  }

  return (
    <>
      <Header />
      <Scoreboard scoreRef={scoreRef.current} highScoreRef={highScoreRef.current} />
      <Cards onClick={handleCards} />
      <Footer />
    </>
  );
}

export default App;
