import React from 'react';
import PropTypes from "prop-types";

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

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
  })
}

export default PokemonCard;