function fetchPokemonData(url) {
  return fetch(url).then((result) => result.json());
}

export { fetchPokemonData };
