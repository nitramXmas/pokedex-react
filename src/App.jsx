import PokemonCard from "./components/PokemonCard";
import { useState } from "react";

function App() {

  const [pokemonIndex, setIndex] = useState(pokemonList.indexOf(pokemonList[0]));
  console.log(pokemonIndex)

  const handleClickNext = () => {
    setIndex(pokemonIndex + 1)
  }
  const handleClickPrev = () => {
    setIndex(pokemonIndex - 1)
  }

  return (
    <div>
      if()
      <button onClick={handleClickPrev}>Previous Pokemon</button>
      <button onClick={handleClickNext}>Next Pokemon</button>
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
    </div>    
  );
}

const pokemonList = [
  {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];

export default App
