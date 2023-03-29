import React from 'react';

const NavBar = ({poke, pokemonIndex, setIndex}) => {

  // const handleClickNext = () => {
  //   setIndex(pokemonIndex + 1)
  // }
  // const handleClickPrev = () => {
  //   setIndex(pokemonIndex - 1)
  // }

  const handleClickButton = () => {
    setIndex(pokemonIndex)
    {poke === "pikachu" ? alert("pika pika") : ""}
  }

  return (
    <>
      {<button onClick={handleClickButton}>{poke}</button>}
    </>
  );
};

export default NavBar;