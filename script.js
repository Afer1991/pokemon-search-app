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


const returnPokeStats = (pokemon) => {
  fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${pokemon}`)
  .then((res) => res.json())
  .then((data) => {
    pokeName.innerText = data.name.toUpperCase();
    pokeId.innerText = `#${data.id}`;
    pokeWgt.innerText = `Weight: ${data.weight}`;
    pokeHgt.innerText = `Height: ${data.height}`;
    imgContainer.innerHTML = `<img src="${data.sprites.front_default}" alt="${data.name}">`;
    pokeTypes.innerHTML = `<div class="type ${data.types[0].type.name}">${data.types[0].type.name}</div>
                           ${data.types[1] != undefined ? `<div class=\"type ${data.types[1].type.name}\">${data.types[1].type.name}</div>`
                                                        : ""}`;
    pokeHp.innerText = data.stats[0].base_stat;
    pokeAttack.innerText = data.stats[1].base_stat;
    pokeDefense.innerText = data.stats[2].base_stat;
    pokeSpAttack.innerText = data.stats[3].base_stat;
    pokeSpDefense.innerText = data.stats[4].base_stat;
    pokeSpeed.innerText = data.stats[5].base_stat;                    
});  
};
