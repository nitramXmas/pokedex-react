import React from 'react';

const PokemonCard = () => {
 
const pokemon = pokemonList[0]
 
const hasImage = (pokemon) => {
  if("imgSrc" in pokemon) {
    return (
          <div>
            <figure>
              <img 
                src={pokemon.imgSrc}
                alt={pokemon.name} 
              />
              <figcaption>
                {pokemon.name}
              </figcaption>
            </figure>
          </div>
        )
  } else {
    return (
          <div>
            <figure>
              <p>???</p>
              <figcaption>
                {pokemon.name}
              </figcaption>
            </figure>
          </div>
    )
  }
}
return hasImage(pokemon)
}

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];

export default PokemonCard;