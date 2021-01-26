import React from 'react';

const PokemonDetail = (props) => {
  const { pokemon } = props;

  return (
    <div>
      {pokemon.name} <br />
      type: {pokemon.types.map((t) => t.type.name)}
    </div>
  );
};

export default PokemonDetail;
