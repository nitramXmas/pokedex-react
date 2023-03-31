import NavBar from './components/NavBar';
import PokemonCard from './components/PokemonCard';
import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';

const pokemonList = [
  {
    name: 'bulbasaur',
    imgSrc:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
  },
  {
    name: 'charmander',
    imgSrc:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png',
  },
  {
    name: 'squirtle',
    imgSrc:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png',
  },
  {
    name: 'pikachu',
    imgSrc:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
  },
  {
    name: 'mew',
  },
];

export default function App() {
  const [pokemonIndex, setIndex] = useState(0);
  useEffect(() => {
    alert('hello pokemon trainer :)');
  }, []);
  return (
    <div className="pokemonCard">
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />

      {pokemonList.map((poke, index) => (
        <NavBar
          key={poke.name}
          poke={pokemonList[index].name}
          pokemonIndex={index}
          setIndex={setIndex}
        />
      ))}
    </div>
  );
}
