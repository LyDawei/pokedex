import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import PokemonList from '../components/pokemonList';
import 'semantic-ui-css/semantic.min.css';

const IndexPage = (props) => {
  return (
    <Layout>
      <SEO title="Home" />
      <PokemonList />
    </Layout>
  );
};

export default IndexPage;
