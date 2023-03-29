import React from 'react';
import PropTypes from "prop-types";

const PokemonCard = ({pokemon}) => {
  return (
    <figure>
      <figcaption>
        {pokemon.name}
      </figcaption>
      {pokemon.imgSrc ? <img src={pokemon.imgSrc} alt={pokemon.name} className="pokemonCardImg" />  : <p>???</p>}
    </figure>
  )
}

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
  })
}

export default PokemonCard;