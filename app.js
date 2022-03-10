const pokemonContainer = document.querySelector("#pokemon-container");

const getPokemon = async () => {
  const url = `https://pokeapi.co/api/v2/pokemon/`;
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);

  // console.log(data.name);
  // console.log(data.sprites.front_default);

  createPokemonCard();
};

getPokemon();

const createPokemonCard = (aPokemon) => {
  const pokemonEl = document.createElement("div");
  pokemonEl.classList.add("pokemon");

  const pokemonHTML = `
  <div class="pokemon-card">
  <div class="img-container">
    <img
      src=""
      alt=""
    />
  </div>
  <div class="info">
    <h3 class="pokemon-name">${name}</h3>
  </div>
</div>
`;

  pokemonEl.innerHTML = pokemonHTML;

  pokemonContainer.appendChild(pokemonEl);
};
