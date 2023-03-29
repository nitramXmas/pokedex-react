import { useState } from "react";
import "./App.css"
import NavBar from "./components/NavBar";
import PokemonCard from "./components/PokemonCard";

function App() {

  const [pokemonIndex, setIndex] = useState(0);

  return (
    <div className="card">
      <NavBar pokemonIndex={pokemonIndex} setIndex={setIndex} listLength={pokemonList.length}/>
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
