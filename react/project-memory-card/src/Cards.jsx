import { useState, useEffect } from "react";

function Cards() {
  const [gridSize, setGridSize] = useState(2);
  const [pokemons, setPokemons] = useState([]);  
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPokemons() {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=1025');
        const data = await response.json();
        setPokemons(data.results);
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

  console.log(pokemons);

  function handleGridChange(size) {
    setGridSize((prevGridSize) => prevGridSize = size);
  } 

  function createGridElements() {
    const totalElements = gridSize * gridSize;

    return Array.from({ length: totalElements }).map((_, index) => (
      <div key={index} className="grid-element">
        <div>
          <img src="" alt={loading === true ? "Loading..." : "Poke Card"} />
          <h4></h4>
        </div>
      </div>
    ));
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