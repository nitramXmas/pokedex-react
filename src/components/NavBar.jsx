import React from 'react';


const NavBar = ({pokemonIndex, setIndex, list}) => {

  const handleClickNext = () => {
    setIndex(pokemonIndex + 1)
  }
  const handleClickPrev = () => {
    setIndex(pokemonIndex - 1)
  }

  return (
    <>
      {pokemonIndex > 0 ? <button onClick={handleClickPrev}>Previous Pokemon</button> : <button>First pokemon</button> }
      {pokemonIndex < list.length -1 ? <button onClick={handleClickNext}>Next Pokemon</button> : <button>Last Pokemon</button> }
      {list[pokemonIndex].name === "pikachu" ? alert("pika pikachu !!!") : ""}
    </>
  );
};

export default NavBar;