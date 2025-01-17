const pokemonInput = document.getElementById("pokemon-input");
const searchBtn = document.getElementById("search-btn");
const pokemonName = document.getElementById("pokemon-name");
const pokemonBody = document.getElementById("pokemon-body-info");
const pokemonImg = document.getElementById("pokemon-image");
const pokemonType = document.getElementById("types")
const statsTable = document.querySelector(".pokemon-stats");


const renderPokemon = (pokemon) => {
  pokemonName.innerHTML = `${pokemon.name.toUpperCase()}
  <span id="pokemon-id">#${pokemon.id}</span>`;
  pokemonBody.innerHTML = `
    <span id="weight">Weight: ${pokemon.weight}</span> &nbsp; <span id="height">Height: ${pokemon.height}</span>
  `;
  pokemonImg.src = `${pokemon.sprites.front_default}`;
  pokemonImg.style.display = "block";

  if(pokemon.types.length > 1) {
    pokemonType.innerHTML = `
      <span class="pokemon-type ${pokemon.types[0].type.name}">${pokemon.types[0].type.name}</span>
      <span class="pokemon-type ${pokemon.types[1].type.name}">${pokemon.types[1].type.name}</span>
    `
  } else {
    pokemonType.innerHTML = `
      <span class="pokemon-type ${pokemon.types[0].type.name}">${pokemon.types[0].type.name}</span>
    `
  }

  statsTable.style.display = '';

  pokemon.stats.forEach(statItem => {
    const statName = statItem.stat.name;  
    const statValue = statItem.base_stat; 

    const element = document.getElementById(statName);

    if (element) {
      element.textContent = statValue;
    }
  });

  pokemonInput.value = '';
}

const getPokemon = async (input) => {
  try {
    const res = await fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${input.toLowerCase()}`);
    const data = await res.json();
    renderPokemon(data);
  } catch (err) {
    console.log(err);
  }
}





searchBtn.addEventListener('click', () => {
  getPokemon(pokemonInput.value)
})
pokemonInput.addEventListener('keydown', (e) => {
  if(e.key === 'Enter') {
    getPokemon(pokemonInput.value)
  }
})