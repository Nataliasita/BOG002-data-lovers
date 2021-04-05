import { general_fire } from './data.js';
import { general_grass } from './data.js';
import { general_water } from './data.js';
import { general_bug } from './data.js';
import { general_normal } from './data.js';
import { general_poison } from './data.js';
import { general_flying } from './data.js';
import { general_electric } from './data.js';
import { general_ground } from './data.js';
import { general_fighting } from './data.js';
import { general_psychic } from './data.js';
import { general_rock } from './data.js';
import { general_ghost } from './data.js';
import { general_dragon } from './data.js';
import { general_fairy } from './data.js';
import { general_dark } from './data.js';
import { general_steel } from './data.js';
import { general_ice } from './data.js';

import pokemon from './data/pokemon/pokemon.js';
import data from './data/pokemon/pokemon.js';

const infoGeneral = data.pokemon;
// eslint-disable-next-line no-console
//console.log(example,data);


//console.log("data: ",data)

//console.log("data.pokemon: ",data.pokemon)

//console.log("data.pokemon[0]: ",data.pokemon[0])

//console.log("data.pokemon[0].name: ",data.pokemon[0].name)


//const general= [data.pokemon];
//for (let i = 0; i < general.length; i++){
//  console.log(general[i]);
//}


//let tipo = [];

//for (let i = 0; i < infoPokemon.length; i++){
//    var pokemontype = infoPokemon [i];
//   if () {
//      tipo.push(pokemontype)
//    }
//}
    
const pokemon_container =document.getElementById("pokemon-container");
//const card =document.getElementById("card");

infoGeneral.forEach (poke => {
    const card_pokemon =document.createElement("figure");
    card_pokemon.className ="cards";
    pokemon_container.appendChild(card_pokemon);
    const name_pokemon = document.createElement("h4");
    name_pokemon.textContent = poke.name;
    name_pokemon.className ="namePoke";
    card_pokemon.appendChild(name_pokemon);
    const image_pokemon= document.createElement("img");
    image_pokemon.src=poke.img;
    image_pokemon.className ="imgPoke";
    card_pokemon.appendChild(image_pokemon);
    const num_pokemon = document.createElement("p");
    num_pokemon.textContent = poke.num;
    num_pokemon.className = "numPoke";
    card_pokemon.appendChild(num_pokemon);
    const information_pokemon =document.createElement("figcaption");
    information_pokemon.className ="information";
    card_pokemon.appendChild(information_pokemon);
    const type1_pokemon =document.createElement("p");
    type1_pokemon.textContent = "Tipo : "+ poke.type[0];
    type1_pokemon.className = "typesPoke";
    information_pokemon.appendChild(type1_pokemon);
    const type2_pokemon =document.createElement("p");
    type2_pokemon.textContent =poke.type[1];
    type2_pokemon.className = "typesPoke2";
    information_pokemon.appendChild(type2_pokemon);
    const atributes_pokemon_height =document.createElement("p");
    atributes_pokemon_height.textContent = "Altura : "+ poke.size.height;
    atributes_pokemon_height.className = "atributes";
    information_pokemon.appendChild(atributes_pokemon_height);
    const atributes_pokemon_weight =document.createElement("p");
    atributes_pokemon_weight.textContent ="Peso : "+ poke.size.weight;
    atributes_pokemon_weight.className = "atributes";
    information_pokemon.appendChild(atributes_pokemon_weight);
    
})


// funciones de filtro

const pokemon_fire =infoGeneral.filter(general_fire).toLowerCase;
//console.log(pokemon_fire)

const pokemon_grass =infoGeneral.filter(general_grass);
//console.log(pokemon_grass)

const pokemon_water =infoGeneral.filter(general_water);
//console.log(pokemon_water)

const pokemon_bug =infoGeneral.filter(general_bug);
//console.log(pokemon_bug)

const pokemon_normal =infoGeneral.filter(general_normal);
//console.log(pokemon_normal)

const pokemon_poison =infoGeneral.filter(general_poison);
//console.log(pokemon_poison)

const pokemon_flying =infoGeneral.filter(general_flying);
//console.log(pokemon_flying)

const pokemon_electric =infoGeneral.filter(general_electric);
//console.log(pokemon_electric)

const pokemon_ground =infoGeneral.filter(general_ground);
//console.log(pokemon_ground)

const pokemon_fighting =infoGeneral.filter(general_fighting);
//console.log(pokemon_fighting)

const pokemon_psychic =infoGeneral.filter(general_psychic);
//console.log(pokemon_psychic)

const pokemon_rock =infoGeneral.filter(general_rock);
//console.log(pokemon_rock)

const pokemon_ghost =infoGeneral.filter(general_ghost);
//console.log(pokemon_ghost)

const pokemon_dragon =infoGeneral.filter(general_dragon);
//console.log(pokemon_dragon)

const pokemon_fairy =infoGeneral.filter(general_fairy);
//console.log(pokemon_fairy)

const pokemon_dark =infoGeneral.filter(general_dark);
//console.log(pokemon_dark)

const pokemon_steel =infoGeneral.filter(general_steel);
//console.log(pokemon_steel)

const pokemon_ice =infoGeneral.filter(general_ice);
//console.log(pokemon_ice)

pages ();

function pages () {

    let botonInicio = document.getElementById("btnInicio");
    botonInicio.onclick = function (){
        document.querySelector(".interfazInicial").style.display="none";
        document.querySelector(".header").style.display="block"; 
        document.querySelector(".contentHome").style.display="block"; 
        document.querySelector(".footer1").style.display="block"; 
        document.querySelector(".contentPokedex").style.display="none";
    }

    let mainHome = document.getElementById("home");
    mainHome.onclick = function(){
        document.querySelector(".header").style.display="block"; 
        document.querySelector(".contentHome").style.display="block"; 
        document.querySelector(".footer1").style.display="block"; 
        document.querySelector(".contentPokedex").style.display="none";
    }

    let mainPokedex = document.getElementById("pokedex");
    mainPokedex.onclick = function(){
        document.querySelector(".interfazInicial").style.display="none";
        document.querySelector(".header").style.display="block"; 
        document.querySelector(".contentHome").style.display="none"; 
        document.querySelector(".footer1").style.display="none"; 
        document.querySelector(".contentPokedex").style.display="block";
        document.querySelector(".footer2").style.display="block"; 
    }
}


//generalpoke();
//function generalpoke() {
//    const pokemon_container =document.getElementById("pokemon-container");
//    const poke_name = document.querySelector(".poke_name");
//}




//for (let i = 0; i < infoGeneral.length; i++){
//    let pokeName = infoGeneral[i].name;
//    let pokeNum = infoGeneral[i].num;
//    let pokeImg = infoGeneral[i].img;
//    let poketype1 = infoGeneral[i].type[0];
//    let poketype2 = infoGeneral[i].type[1];
//}
