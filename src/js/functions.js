const POKE_API = "https://pokeapi.co/api/v2/pokemon/";

function saludoPersona(nombreP) {
  return `Hola ${nombreP}!`;
}

const ejecutarSaludo = saludoPersona("Jhoe Doe");
console.log("Saludo Ejecutado");

async function obtenerPokemons(cantidad) {
  console.log(`${POKE_API}?limit=${cantidad}`);
  const pokemon_response = [];
  const response = await fetch(`${POKE_API}?limit=${cantidad}`);
  console.log(response);
  const pokemon = await response.json();
  console.log(pokemon);

  /* Recorrer los pokemons que devuelve la API */
  for (let index = 0; index < cantidad; index++) {
    pokemon_response.push(pokemon.results[index]);
  }
  return pokemon_response;
}
async function obtenerPokemon(id) {

    const response= await fetch(`${POKE_API}/${id}`)
    const pokemon = await response.json();
    console.log(pokemon);
    console.log(pokemon.name);
    console.log(pokemon.abilities[0].ability.name);
    
    
    
    /* return pokemon; */
}
