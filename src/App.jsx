import { useState } from "react";
import { useEffect } from 'react';
import "./App.css"
import NavBar from "./components/NavBar";
import PokemonCard from "./components/PokemonCard";

export default function App() {

  const [pokemonIndex, setIndex] = useState(0);
  useEffect(
    () => {
      alert("hello pokemon trainer :)")
    },
    []
  );
  return (
    <div className="pokemonCard">
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      <NavBar pokemonIndex={pokemonIndex} setIndex={setIndex} list={pokemonList}/>
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