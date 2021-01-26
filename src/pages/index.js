import React, { useState } from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import PokemonList from '../components/pokemonList';
import 'semantic-ui-css/semantic.min.css';
import { fetchPokemonData } from '../utilities';
import { Container } from 'semantic-ui-react';
import PokemonDetail from '../components/pokemonDetail';

const IndexPage = (props) => {
  const [pokemon, setPokemon] = useState();

  function handlePokemonSelect(url) {
    fetchPokemonData(url).then((res) => setPokemon(res));
  }

  return (
    <Layout>
      <SEO title="Home" />
      <Container>
        <PokemonList onSelect={(value) => handlePokemonSelect(value)} />
        {pokemon && <PokemonDetail pokemon={pokemon} />}
      </Container>
    </Layout>
  );
};

export default IndexPage;
