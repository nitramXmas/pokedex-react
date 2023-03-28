import React from 'react';

const PokemonCard = ({pokemon}) => {
 
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

export default PokemonCard;