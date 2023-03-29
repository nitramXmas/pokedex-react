import PokemonCard from "./components/PokemonCard";
import { useState } from "react";
import "./App.css"

function App() {

  const [pokemonIndex, setIndex] = useState(0);

  const handleClickNext = () => {
    setIndex(pokemonIndex + 1)
  }
  const handleClickPrev = () => {
    setIndex(pokemonIndex - 1)
  }

  return (
    <div className="card">
      {pokemonIndex > 0 ? <button onClick={handleClickPrev}>Previous Pokemon</button> : ""}
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      {pokemonIndex < pokemonList.length -1 ? <button onClick={handleClickNext}>Next Pokemon</button> : ""}
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
