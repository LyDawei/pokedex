import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { List } from 'semantic-ui-react';
import listStyle from './pokemonList.module.scss';

const PokemonList = (props) => {
  const pokemon = useStaticQuery(graphql`
    {
      allPokemon {
        nodes {
          name
          url
        }
      }
    }
  `).allPokemon.nodes;

  return (
    <div>
      <List selection>
        {pokemon.map((p, i) => (
          <List.Item>
            <List.Content>
              <List.Header>
                #{i + 1} {p.name}
              </List.Header>
            </List.Content>
          </List.Item>
        ))}
      </List>
    </div>
  );
};

export default PokemonList;
