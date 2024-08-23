export async function fetchPokemons() {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=1025');
    const data = await response.json();

    const detailedPokemons = await Promise.all(
      data.results.map(async (pokemon) => {
        const pokemonDetailsResponse = await fetch(pokemon.url);
        return await pokemonDetailsResponse.json();
      })
    );

    return(detailedPokemons);
  } 
  catch (error) {
    console.error('Error fetching from Pokemon API:', error);
    return [];
  }
}

function FetchPokemons() {
  return null;
}

export default FetchPokemons;