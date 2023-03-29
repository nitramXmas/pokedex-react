import React from 'react';

const NavBar = ({pokemonIndex, setIndex, listLength}) => {

  const handleClickNext = () => {
    setIndex(pokemonIndex + 1)
  }
  const handleClickPrev = () => {
    setIndex(pokemonIndex - 1)
  }

  return (
    <>
      {pokemonIndex > 0 ? <button onClick={handleClickPrev}>Previous Pokemon</button> : <button>Previous Pokemon</button> }
      {pokemonIndex < listLength -1 ? <button onClick={handleClickNext}>Next Pokemon</button> : <button>Next Pokemon</button> }
    </>
  );
};

export default NavBar;