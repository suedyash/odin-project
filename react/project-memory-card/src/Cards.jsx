import { useState, useEffect } from "react";

function Cards({ onClick }) {
  const [gridSize, setGridSize] = useState(4);
  const [pokemons, setPokemons] = useState([]);  
  const [loading, setLoading] = useState(true);

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
  }, []);

  function handleGridChange(size) {
    setGridSize((prevGridSize) => prevGridSize = size);
  } 

  function createGridElements() {
    const totalElements = gridSize * gridSize;

    const selectedPokemons = pokemons.sort(() => 0.5 - Math.random()).slice(0, totalElements);

    if (loading) {
      return (
        <div className="loading-text">
          <span>Loading...</span>
        </div>
      );
    } else {
      return selectedPokemons.map((pokemon, index) => {
        return (
          <div 
            key={index} 
            className="grid-element"
            onClick={onClick}
          >
            <img src={pokemon.sprites.front_default} alt="Poke Card" />
            <h4>{pokemon.name}</h4>
          </div>
        );
      });
    }
  }

  return (
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
        {createGridElements()}
      </div>
    </div>
  );
}

export default Cards;