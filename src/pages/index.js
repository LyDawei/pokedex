import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import PokemonList from '../components/pokemonList';
import 'semantic-ui-css/semantic.min.css';
import { fetchPokemonData } from '../utilities';

const IndexPage = (props) => {
  window.print();

  function handlePokemonSelect(url) {
    fetchPokemonData(url).then((res) => console.log(res));
  }

  return (
    <Layout>
      <SEO title="Home" />
      <PokemonList onSelect={(value) => handlePokemonSelect(value)} />
    </Layout>
  );
};

export default IndexPage;
