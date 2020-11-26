import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import pokemonListStyle from './pokemonList.module.scss';

const PokemonList = (props) => {
  const { onSelect } = props;
  const data = useStaticQuery(graphql`
    {
      allPokemon {
        nodes {
          sprite
          name
          url
        }
      }
    }
  `);
  const pokemon = data?.allPokemon.nodes;
  return (
    <div>
      <Dropdown
        clearable
        placeholder="Select a pokemon"
        search
        selection
        onChange={(e, data) => onSelect(data.value)}
        options={pokemon.map((p) => ({
          className: pokemonListStyle.pokemonOption,
          key: `pokemon-${p.name}`,
          text: p.name,
          value: p.url,
          image: { avatar: true, src: p.sprite },
        }))}
      />
    </div>
  );
};

export default PokemonList;
