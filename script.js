// https://github.com/MAGGIx1404/pokemon-pictures-collection.git

const container = document.querySelector("#container");

const baseImageURL = "/E:Folder BelajarPHPBootcamp CodepolitanJS DOMLatihan memanggil pokemanon dengan DOMpokemon-pictures-collection-masterpokemon-pictures-collection-master";

for (let i = 1; i <= 50; i++) {
  const pokeBall = document.createElement("div");
  pokeBall.classList.add("pokemon");

  const imgPokemon = document.createElement("img");
  imgPokemon.src = `${baseImageURL}${i}.png`;

  pokeBall.appendChild(imgPokemon);
  container.appendChild(pokeBall);
}
