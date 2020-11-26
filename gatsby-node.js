/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const fetch = require('node-fetch');

exports.sourceNodes = async ({
  actions,
  createContentDigest,
  createNodeId,
}) => {
  const result = await fetch('https://pokeapi.co/api/v2/pokemon?limit=5000');
  let { results } = await result.json();

  const promises = results.map((pkmn) => fetch(pkmn.url));
  return Promise.all(promises)
    .then((resultData) =>
      Promise.all(resultData.map(async (res) => res.json()))
    )
    .then((resultSet) =>
      resultSet.map((pokemon) => ({
        name: pokemon.name,
        sprite: pokemon.sprites.front_default,
      }))
    )
    .then(
      (defaultSprite) =>
        (results = results.map((r) => ({
          ...r,
          sprite: defaultSprite.find((d) => d.name === r.name).sprite,
        })))
    )
    .then(() => {
      results.forEach((pokemon) => {
        actions.createNode({
          id: createNodeId(`Pokemon-${pokemon.name}`),
          type: 'pokemonType',
          name: pokemon.name,
          url: pokemon.url,
          sprite: pokemon.sprite,
          internal: {
            type: 'Pokemon',
            contentDigest: createContentDigest(pokemon),
          },
        });
      });
    });
};
