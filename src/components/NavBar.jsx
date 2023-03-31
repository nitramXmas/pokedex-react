import React from 'react';

const NavBar = ({ poke, pokemonIndex, setIndex }) => {
  const handleClickButton = () => {
    setIndex(pokemonIndex);
    {
      poke === 'pikachu' ? alert('pika pika') : '';
    }
  };

  return <>{<button onClick={handleClickButton}>{poke}</button>}</>;
};

export default NavBar;
