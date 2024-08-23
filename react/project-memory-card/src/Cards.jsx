import { useState, useEffect, useRef, useCallback, useMemo } from "react";

function Scoreboard({ score, highScore }) {
  return (
    <div className="scoreboard">
      <span>Score: {score}</span>
      <span>High Score: {highScore}</span>
    </div>
  );
}

function Cards() {
  const [gridSize, setGridSize] = useState(4);
  const [pokemons, setPokemons] = useState([]);  
  const displayedPokemonsRef = useRef([]);
  const selectedPokemonsRef = useRef([]);
  const [loading, setLoading] = useState(true);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const lastScoreRef = useRef(0);
  const highScoreRef = useRef(0);

  useEffect(() => {
    async function fetchPokemons() {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=1025');
        const data = await response.json();

        const detailedPokemons = await Promise.all(
          data.results.map(async (pokemon) => {
            const pokemonDetailsResponse = await fetch(pokemon.url);
            return await pokemonDetailsResponse.json();
          })
        );

        setPokemons(detailedPokemons);
      } 
      catch (error) {
        console.error('Error fetching from Pokemon API:', error);
      }
      finally {
        setLoading(false);
      }
    }

    fetchPokemons();
  }, [gridSize]);

  const handleGridChange = useCallback((size) => {
    setScore(0);
    setGridSize((prevGridSize) => prevGridSize = size);
  }, []);

  const handleCardClick = useCallback((pokemon) => {
    if (selectedPokemonsRef.current.includes(pokemon)) {
      selectedPokemonsRef.current = [];
      
      if (lastScoreRef.current > highScoreRef.current) {
        setHighScore(lastScoreRef.current);
        highScoreRef.current = lastScoreRef.current;
      }
      setScore(0);
      lastScoreRef.current = 0;

    } else {
      selectedPokemonsRef.current.push(pokemon);

      setScore((prevScore) => {
        const newScore = prevScore + 1;
        lastScoreRef.current = newScore;

        return newScore;
      });

      setPokemons(displayedPokemonsRef.current);
    }
  }, []); 

  const createGridElements = useMemo(() => {
    if (loading) {
      return (
        <div className="loading-text">
          <span>Loading...</span>
        </div>
      );
    }

    const gridElements = pokemons.sort(() => 0.5 - Math.random()).slice(0, gridSize * gridSize);
    displayedPokemonsRef.current = [];

    return gridElements.map((pokemon, index) => {
      displayedPokemonsRef.current.push(pokemon); 

      return (
        <div 
          key={index} 
          className="grid-element"
          onClick={() => handleCardClick(pokemon)}
        >
          <img src={pokemon.sprites.front_default} alt="Poke Card" />
          <h4>{pokemon.name}</h4>
        </div>
      );
    });
  }, [loading, gridSize, pokemons]); 

  return (
    <>
      <Scoreboard score={score} highScore={highScore} /> 
      <div className="cards">
        <div className="grid-selector">
          Choose grid size...
          <button
            className={gridSize === 2 ? "selected-btn" : ""}
            onClick={() => handleGridChange(2)}
          >
            2x2
          </button>
          <button
            className={gridSize === 4 ? "selected-btn" : ""}
            onClick={() => handleGridChange(4)}
          >
            4x4
          </button>
          <button
            className={gridSize === 8 ? "selected-btn" : ""}
            onClick={() => handleGridChange(8)}
          >
            8x8
          </button>
          <span>Grid Selected: {gridSize}x{gridSize}</span>
        </div>
        <div 
          className="cards-container"
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
            gridTemplateRows: `repeat(${gridSize}, 1fr)`
          }}
        >
          {createGridElements}
        </div>
      </div>
    </>
  );
}

export default Cards;