const input = document.getElementById("search-input");
const srcBtn = document.getElementById("search-button");
const pokeName = document.getElementById("pokemon-name");
const pokeId = document.getElementById("pokemon-id");
const pokeWgt = document.getElementById("weight");
const pokeHgt = document.getElementById("height");
const imgContainer = document.querySelector(".pokemon-img-container");
const pokeTypes = document.getElementById("types");
const pokeHp = document.getElementById("hp");
const pokeAttack = document.getElementById("attack");
const pokeDefense = document.getElementById("defense");
const pokeSpAttack = document.getElementById("special-attack");
const pokeSpDefense = document.getElementById("special-defense");
const pokeSpeed = document.getElementById("speed");


const fetchPokeStats = async (pokemon) => {
  try {
    const res = await fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${pokemon}`);
    const data = await res.json();
    returnPokeStats(data);
  } catch {
    alert("Pokémon not found");
  }
};

const returnPokeStats = (pokemon) => {
  pokeName.innerText = pokemon.name.toUpperCase();
  pokeId.innerText = `#${pokemon.id}`;
  pokeWgt.innerText = `Weight: ${pokemon.weight}`;
  pokeHgt.innerText = `Height: ${pokemon.height}`;
  imgContainer.innerHTML = `<img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">`;
  pokeTypes.innerHTML = `<div class="type ${pokemon.types[0].type.name}">${pokemon.types[0].type.name}</div>
                           ${pokemon.types[1] != undefined ? `<div class=\"type ${pokemon.types[1].type.name}\">${pokemon.types[1].type.name}</div>`
                                                        : ""}`;
  pokeHp.innerText = pokemon.stats[0].base_stat;
  pokeAttack.innerText = pokemon.stats[1].base_stat;
  pokeDefense.innerText = pokemon.stats[2].base_stat;
  pokeSpAttack.innerText = pokemon.stats[3].base_stat;
  pokeSpDefense.innerText = pokemon.stats[4].base_stat;
  pokeSpeed.innerText = pokemon.stats[5].base_stat;   
};

srcBtn.addEventListener("click", () => {
  userInput = input.value.toLowerCase();
  fetchPokeStats(userInput);
});

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    userInput = input.value.toLowerCase();
    fetchPokeStats(userInput);
  };
});