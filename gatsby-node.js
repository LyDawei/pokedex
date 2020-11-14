/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const fetch = require("node-fetch");

exports.sourceNodes = async ({
  actions,
  createContentDigest,
  createNodeId,
}) => {
  const result = await fetch("https://pokeapi.co/api/v2/pokemon?limit=5000");
  const { results } = await result.json();

  results.forEach((pokemon) => {
    actions.createNode({
      id: createNodeId(`Pokemon-${pokemon.name}`),
      type: "pokemonType",
      name: pokemon.name,
      url: pokemon.url,
      internal: {
        type: "Pokemon",
        contentDigest: createContentDigest(pokemon),
      },
    });
  });
};
