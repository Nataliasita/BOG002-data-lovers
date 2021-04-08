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

//import pokemon from './data/pokemon/pokemon.js';
import data from './data/pokemon/pokemon.js';

const infoGeneral = data.pokemon;

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

const pokemon_container_descendentes =document.getElementById("pokemon-container-descendentes");

let general_reverse =infoGeneral.reverse();

general_reverse.forEach (poke => {
    const card_pokemon =document.createElement("figure");
    card_pokemon.className ="cards";
    pokemon_container_descendentes.appendChild(card_pokemon);
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

order_pokemon();

function order_pokemon (){

    let order_general = document.getElementById("order");
    order_general.onclick =function (){
        document.querySelector(".interfazInicial").style.display="none";
        document.querySelector(".header").style.display="block"; 
        document.querySelector(".contentHome").style.display="none"; 
        document.querySelector(".footer1").style.display="none"; 
        document.querySelector(".contentPokedex").style.display="block";
        document.querySelector(".pokemon-container").style.display="grid";
        document.querySelector(".pokemon-container-descendentes").style.display="none";
        document.querySelector(".allTypes").style.display="none";
        document.querySelector(".btn-flotante").style.display="block";
    }
    let order_descendentes = document.getElementById("descendentes");
    order_descendentes.onclick =function (){
        document.querySelector(".interfazInicial").style.display="none";
        document.querySelector(".header").style.display="block"; 
        document.querySelector(".contentHome").style.display="none"; 
        document.querySelector(".footer1").style.display="none"; 
        document.querySelector(".contentPokedex").style.display="block";
        document.querySelector(".pokemon-container").style.display="none";
        document.querySelector(".pokemon-container-descendentes").style.display="grid";
        document.querySelector(".allTypes").style.display="none";
        document.querySelector(".btn-flotante").style.display="block";
    }

}

// funciones de filtro ----------------------------------------------------------

// funcion Pokemon tipo Acero
const pokemon_container_typeSteel =document.getElementById("pokemon-container-typeSteel");

const pokemon_steel =infoGeneral.filter(general_steel);
const steel_poke = pokemon_steel;

steel_poke.forEach (poke => {
    const card_pokemon =document.createElement("figure");
    card_pokemon.className ="cardsSteel";
    pokemon_container_typeSteel.appendChild(card_pokemon);
    const name_pokemon = document.createElement("h4");
    name_pokemon.textContent = poke.name;
    name_pokemon.className ="namePokeSteel";
    card_pokemon.appendChild(name_pokemon);
    const image_pokemon= document.createElement("img");
    image_pokemon.src=poke.img;
    image_pokemon.className ="imgPoke";
    card_pokemon.appendChild(image_pokemon);
    const num_pokemon = document.createElement("p");
    num_pokemon.textContent = poke.num;
    num_pokemon.className = "numPokeSteel";
    card_pokemon.appendChild(num_pokemon);
    const information_pokemon =document.createElement("figcaption");
    information_pokemon.className ="informationSteel";
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

// funcion Pokemon tipo Agua
const pokemon_container_typeWater =document.getElementById("pokemon-container-typeWater");

const pokemon_water =infoGeneral.filter(general_water);
const water_poke = pokemon_water

water_poke.forEach (poke => {
    const card_pokemon =document.createElement("figure");
    card_pokemon.className ="cardsWater";
    pokemon_container_typeWater.appendChild(card_pokemon);
    const name_pokemon = document.createElement("h4");
    name_pokemon.textContent = poke.name;
    name_pokemon.className ="namePokeWater";
    card_pokemon.appendChild(name_pokemon);
    const image_pokemon= document.createElement("img");
    image_pokemon.src=poke.img;
    image_pokemon.className ="imgPoke";
    card_pokemon.appendChild(image_pokemon);
    const num_pokemon = document.createElement("p");
    num_pokemon.textContent = poke.num;
    num_pokemon.className = "numPokeWater";
    card_pokemon.appendChild(num_pokemon);
    const information_pokemon =document.createElement("figcaption");
    information_pokemon.className ="informationWater";
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

// funcion Pokemon tipo Bicho
const pokemon_container_typeBug =document.getElementById("pokemon-container-typeBug");

const pokemon_bug =infoGeneral.filter(general_bug);
const bug_poke = pokemon_bug;

bug_poke.forEach (poke => {
    const card_pokemon =document.createElement("figure");
    card_pokemon.className ="cardsBug";
    pokemon_container_typeBug.appendChild(card_pokemon);
    const name_pokemon = document.createElement("h4");
    name_pokemon.textContent = poke.name;
    name_pokemon.className ="namePokeBug";
    card_pokemon.appendChild(name_pokemon);
    const image_pokemon= document.createElement("img");
    image_pokemon.src=poke.img;
    image_pokemon.className ="imgPoke";
    card_pokemon.appendChild(image_pokemon);
    const num_pokemon = document.createElement("p");
    num_pokemon.textContent = poke.num;
    num_pokemon.className = "numPokeBug";
    card_pokemon.appendChild(num_pokemon);
    const information_pokemon =document.createElement("figcaption");
    information_pokemon.className ="informationBug";
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

// funcion Pokemon tipo Dragon
const pokemon_container_typeDragon =document.getElementById("pokemon-container-typeDragon");

const pokemon_dragon =infoGeneral.filter(general_dragon);
const dragon_poke =pokemon_dragon;

dragon_poke.forEach (poke => {
    const card_pokemon =document.createElement("figure");
    card_pokemon.className ="cardsDragon";
    pokemon_container_typeDragon.appendChild(card_pokemon);
    const name_pokemon = document.createElement("h4");
    name_pokemon.textContent = poke.name;
    name_pokemon.className ="namePokeDragon";
    card_pokemon.appendChild(name_pokemon);
    const image_pokemon= document.createElement("img");
    image_pokemon.src=poke.img;
    image_pokemon.className ="imgPoke";
    card_pokemon.appendChild(image_pokemon);
    const num_pokemon = document.createElement("p");
    num_pokemon.textContent = poke.num;
    num_pokemon.className = "numPokeDragon";
    card_pokemon.appendChild(num_pokemon);
    const information_pokemon =document.createElement("figcaption");
    information_pokemon.className ="informationDragon";
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

// funcion Pokemon tipo Electrico
const pokemon_container_typeElectric =document.getElementById("pokemon-container-typeElectric");

const pokemon_electric =infoGeneral.filter(general_electric);
const electric_poke =pokemon_electric;

electric_poke.forEach (poke => {
    const card_pokemon =document.createElement("figure");
    card_pokemon.className ="cardsElectric";
    pokemon_container_typeElectric.appendChild(card_pokemon);
    const name_pokemon = document.createElement("h4");
    name_pokemon.textContent = poke.name;
    name_pokemon.className ="namePokeElectric";
    card_pokemon.appendChild(name_pokemon);
    const image_pokemon= document.createElement("img");
    image_pokemon.src=poke.img;
    image_pokemon.className ="imgPoke";
    card_pokemon.appendChild(image_pokemon);
    const num_pokemon = document.createElement("p");
    num_pokemon.textContent = poke.num;
    num_pokemon.className = "numPokeElectric";
    card_pokemon.appendChild(num_pokemon);
    const information_pokemon =document.createElement("figcaption");
    information_pokemon.className ="informationElectric";
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

// funcion Pokemon tipo Fantasma
const pokemon_container_typeGhost =document.getElementById("pokemon-container-typeGhost");

const pokemon_ghost =infoGeneral.filter(general_ghost);
const ghost_poke =pokemon_ghost;

ghost_poke.forEach (poke => {
    const card_pokemon =document.createElement("figure");
    card_pokemon.className ="cardsGhost";
    pokemon_container_typeGhost.appendChild(card_pokemon);
    const name_pokemon = document.createElement("h4");
    name_pokemon.textContent = poke.name;
    name_pokemon.className ="namePokeGhost";
    card_pokemon.appendChild(name_pokemon);
    const image_pokemon= document.createElement("img");
    image_pokemon.src=poke.img;
    image_pokemon.className ="imgPoke";
    card_pokemon.appendChild(image_pokemon);
    const num_pokemon = document.createElement("p");
    num_pokemon.textContent = poke.num;
    num_pokemon.className = "numPokeGhost";
    card_pokemon.appendChild(num_pokemon);
    const information_pokemon =document.createElement("figcaption");
    information_pokemon.className ="informationGhost";
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

// funcion Pokemon tipo Fire
const pokemon_container_typeFire =document.getElementById("pokemon-container-typeFire");

const pokemon_fire =infoGeneral.filter(general_fire);
const fire_poke = pokemon_fire;

fire_poke.forEach (poke => {
    const card_pokemon =document.createElement("figure");
    card_pokemon.className ="cardsFire";
    pokemon_container_typeFire.appendChild(card_pokemon);
    const name_pokemon = document.createElement("h4");
    name_pokemon.textContent = poke.name;
    name_pokemon.className ="namePokeFire";
    card_pokemon.appendChild(name_pokemon);
    const image_pokemon= document.createElement("img");
    image_pokemon.src=poke.img;
    image_pokemon.className ="imgPoke";
    card_pokemon.appendChild(image_pokemon);
    const num_pokemon = document.createElement("p");
    num_pokemon.textContent = poke.num;
    num_pokemon.className = "numPokeFire";
    card_pokemon.appendChild(num_pokemon);
    const information_pokemon =document.createElement("figcaption");
    information_pokemon.className ="informationFire";
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

// funcion Pokemon tipo Hada
const pokemon_container_typeFairy =document.getElementById("pokemon-container-typeFairy");

const pokemon_fairy =infoGeneral.filter(general_fairy);
const fairy_poke =pokemon_fairy;

fairy_poke.forEach (poke => {
    const card_pokemon =document.createElement("figure");
    card_pokemon.className ="cardsFairy";
    pokemon_container_typeFairy.appendChild(card_pokemon);
    const name_pokemon = document.createElement("h4");
    name_pokemon.textContent = poke.name;
    name_pokemon.className ="namePokeFairy";
    card_pokemon.appendChild(name_pokemon);
    const image_pokemon= document.createElement("img");
    image_pokemon.src=poke.img;
    image_pokemon.className ="imgPoke";
    card_pokemon.appendChild(image_pokemon);
    const num_pokemon = document.createElement("p");
    num_pokemon.textContent = poke.num;
    num_pokemon.className = "numPokeFairy";
    card_pokemon.appendChild(num_pokemon);
    const information_pokemon =document.createElement("figcaption");
    information_pokemon.className ="informationFairy";
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

// funcion Pokemon tipo Hielo
const pokemon_container_typeIce =document.getElementById("pokemon-container-typeIce");

const pokemon_ice =infoGeneral.filter(general_ice);
const ice_poke =pokemon_ice;

ice_poke.forEach (poke => {
    const card_pokemon =document.createElement("figure");
    card_pokemon.className ="cardsIce";
    pokemon_container_typeIce.appendChild(card_pokemon);
    const name_pokemon = document.createElement("h4");
    name_pokemon.textContent = poke.name;
    name_pokemon.className ="namePokeIce";
    card_pokemon.appendChild(name_pokemon);
    const image_pokemon= document.createElement("img");
    image_pokemon.src=poke.img;
    image_pokemon.className ="imgPoke";
    card_pokemon.appendChild(image_pokemon);
    const num_pokemon = document.createElement("p");
    num_pokemon.textContent = poke.num;
    num_pokemon.className = "numPokeIce";
    card_pokemon.appendChild(num_pokemon);
    const information_pokemon =document.createElement("figcaption");
    information_pokemon.className ="informationIce";
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

// funcion Pokemon tipo Lucha
const pokemon_container_typeFighting =document.getElementById("pokemon-container-typeFighting");

const pokemon_fighting =infoGeneral.filter(general_fighting);
const fighting_poke =pokemon_fighting;

fighting_poke.forEach (poke => {
    const card_pokemon =document.createElement("figure");
    card_pokemon.className ="cardsFighting";
    pokemon_container_typeFighting.appendChild(card_pokemon);
    const name_pokemon = document.createElement("h4");
    name_pokemon.textContent = poke.name;
    name_pokemon.className ="namePokeFighting";
    card_pokemon.appendChild(name_pokemon);
    const image_pokemon= document.createElement("img");
    image_pokemon.src=poke.img;
    image_pokemon.className ="imgPoke";
    card_pokemon.appendChild(image_pokemon);
    const num_pokemon = document.createElement("p");
    num_pokemon.textContent = poke.num;
    num_pokemon.className = "numPokeFighting";
    card_pokemon.appendChild(num_pokemon);
    const information_pokemon =document.createElement("figcaption");
    information_pokemon.className ="informationFighting";
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

// funcion Pokemon tipo Normal
const pokemon_container_typeNormal =document.getElementById("pokemon-container-typeNormal");

const pokemon_normal =infoGeneral.filter(general_normal);
const normal_poke =pokemon_normal;

normal_poke.forEach (poke => {
    const card_pokemon =document.createElement("figure");
    card_pokemon.className ="cardsNormal";
    pokemon_container_typeNormal.appendChild(card_pokemon);
    const name_pokemon = document.createElement("h4");
    name_pokemon.textContent = poke.name;
    name_pokemon.className ="namePokeNormal";
    card_pokemon.appendChild(name_pokemon);
    const image_pokemon= document.createElement("img");
    image_pokemon.src=poke.img;
    image_pokemon.className ="imgPoke";
    card_pokemon.appendChild(image_pokemon);
    const num_pokemon = document.createElement("p");
    num_pokemon.textContent = poke.num;
    num_pokemon.className = "numPokeNormal";
    card_pokemon.appendChild(num_pokemon);
    const information_pokemon =document.createElement("figcaption");
    information_pokemon.className ="informationNormal";
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

// funcion Pokemon tipo Planta
const pokemon_container_typeGrass =document.getElementById("pokemon-container-typeGrass");

const pokemon_grass =infoGeneral.filter(general_grass);
const grass_poke =pokemon_grass;

grass_poke.forEach (poke => {
    const card_pokemon =document.createElement("figure");
    card_pokemon.className ="cardsGrass";
    pokemon_container_typeGrass.appendChild(card_pokemon);
    const name_pokemon = document.createElement("h4");
    name_pokemon.textContent = poke.name;
    name_pokemon.className ="namePokeGrass";
    card_pokemon.appendChild(name_pokemon);
    const image_pokemon= document.createElement("img");
    image_pokemon.src=poke.img;
    image_pokemon.className ="imgPoke";
    card_pokemon.appendChild(image_pokemon);
    const num_pokemon = document.createElement("p");
    num_pokemon.textContent = poke.num;
    num_pokemon.className = "numPokeGrass";
    card_pokemon.appendChild(num_pokemon);
    const information_pokemon =document.createElement("figcaption");
    information_pokemon.className ="informationGrass";
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

// funcion Pokemon tipo Psiquico
const pokemon_container_typePsychic =document.getElementById("pokemon-container-typePsychic");

const pokemon_psychic =infoGeneral.filter(general_psychic);
const psychic_poke =pokemon_psychic;

psychic_poke.forEach (poke => {
    const card_pokemon =document.createElement("figure");
    card_pokemon.className ="cardsPsychic";
    pokemon_container_typePsychic.appendChild(card_pokemon);
    const name_pokemon = document.createElement("h4");
    name_pokemon.textContent = poke.name;
    name_pokemon.className ="namePokePsychic";
    card_pokemon.appendChild(name_pokemon);
    const image_pokemon= document.createElement("img");
    image_pokemon.src=poke.img;
    image_pokemon.className ="imgPoke";
    card_pokemon.appendChild(image_pokemon);
    const num_pokemon = document.createElement("p");
    num_pokemon.textContent = poke.num;
    num_pokemon.className = "numPokePsychic";
    card_pokemon.appendChild(num_pokemon);
    const information_pokemon =document.createElement("figcaption");
    information_pokemon.className ="informationPsychic";
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

// funcion Pokemon tipo Roca
const pokemon_container_typeRock =document.getElementById("pokemon-container-typeRock");

const pokemon_rock =infoGeneral.filter(general_rock);
const rock_poke =pokemon_rock;

rock_poke.forEach (poke => {
    const card_pokemon =document.createElement("figure");
    card_pokemon.className ="cardsRock";
    pokemon_container_typeRock.appendChild(card_pokemon);
    const name_pokemon = document.createElement("h4");
    name_pokemon.textContent = poke.name;
    name_pokemon.className ="namePokeRock";
    card_pokemon.appendChild(name_pokemon);
    const image_pokemon= document.createElement("img");
    image_pokemon.src=poke.img;
    image_pokemon.className ="imgPoke";
    card_pokemon.appendChild(image_pokemon);
    const num_pokemon = document.createElement("p");
    num_pokemon.textContent = poke.num;
    num_pokemon.className = "numPokeRock";
    card_pokemon.appendChild(num_pokemon);
    const information_pokemon =document.createElement("figcaption");
    information_pokemon.className ="informationRock";
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

// funcion Pokemon tipo Siniestro
const pokemon_container_typeDark =document.getElementById("pokemon-container-typeDark");

const pokemon_dark =infoGeneral.filter(general_dark);
const dark_poke =pokemon_dark;

dark_poke.forEach (poke => {
    const card_pokemon =document.createElement("figure");
    card_pokemon.className ="cardsDark";
    pokemon_container_typeDark.appendChild(card_pokemon);
    const name_pokemon = document.createElement("h4");
    name_pokemon.textContent = poke.name;
    name_pokemon.className ="namePokeDark";
    card_pokemon.appendChild(name_pokemon);
    const image_pokemon= document.createElement("img");
    image_pokemon.src=poke.img;
    image_pokemon.className ="imgPoke";
    card_pokemon.appendChild(image_pokemon);
    const num_pokemon = document.createElement("p");
    num_pokemon.textContent = poke.num;
    num_pokemon.className = "numPokeDark";
    card_pokemon.appendChild(num_pokemon);
    const information_pokemon =document.createElement("figcaption");
    information_pokemon.className ="informationDark";
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

// funcion Pokemon tipo Tierra
const pokemon_container_typeGround =document.getElementById("pokemon-container-typeGround");

const pokemon_ground =infoGeneral.filter(general_ground);
const ground_poke =pokemon_ground;

ground_poke.forEach (poke => {
    const card_pokemon =document.createElement("figure");
    card_pokemon.className ="cardsGround";
    pokemon_container_typeGround.appendChild(card_pokemon);
    const name_pokemon = document.createElement("h4");
    name_pokemon.textContent = poke.name;
    name_pokemon.className ="namePokeGround";
    card_pokemon.appendChild(name_pokemon);
    const image_pokemon= document.createElement("img");
    image_pokemon.src=poke.img;
    image_pokemon.className ="imgPoke";
    card_pokemon.appendChild(image_pokemon);
    const num_pokemon = document.createElement("p");
    num_pokemon.textContent = poke.num;
    num_pokemon.className = "numPokeGround";
    card_pokemon.appendChild(num_pokemon);
    const information_pokemon =document.createElement("figcaption");
    information_pokemon.className ="informationGround";
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

// funcion Pokemon tipo Veneno
const pokemon_container_typePoison =document.getElementById("pokemon-container-typePoison");

const pokemon_poison =infoGeneral.filter(general_poison);
const poison_poke =pokemon_poison;

poison_poke.forEach (poke => {
    const card_pokemon =document.createElement("figure");
    card_pokemon.className ="cardsPoison";
    pokemon_container_typePoison.appendChild(card_pokemon);
    const name_pokemon = document.createElement("h4");
    name_pokemon.textContent = poke.name;
    name_pokemon.className ="namePokePoison";
    card_pokemon.appendChild(name_pokemon);
    const image_pokemon= document.createElement("img");
    image_pokemon.src=poke.img;
    image_pokemon.className ="imgPoke";
    card_pokemon.appendChild(image_pokemon);
    const num_pokemon = document.createElement("p");
    num_pokemon.textContent = poke.num;
    num_pokemon.className = "numPokePoison";
    card_pokemon.appendChild(num_pokemon);
    const information_pokemon =document.createElement("figcaption");
    information_pokemon.className ="informationPoison";
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

// funcion Pokemon tipo Volador
const pokemon_container_typeFlying =document.getElementById("pokemon-container-typeFlying");

const pokemon_flying =infoGeneral.filter(general_flying);
const flying_poke =pokemon_flying;

flying_poke.forEach (poke => {
    const card_pokemon =document.createElement("figure");
    card_pokemon.className ="cardsFlying";
    pokemon_container_typeFlying.appendChild(card_pokemon);
    const name_pokemon = document.createElement("h4");
    name_pokemon.textContent = poke.name;
    name_pokemon.className ="namePokeFlying";
    card_pokemon.appendChild(name_pokemon);
    const image_pokemon= document.createElement("img");
    image_pokemon.src=poke.img;
    image_pokemon.className ="imgFlying";
    card_pokemon.appendChild(image_pokemon);
    const num_pokemon = document.createElement("p");
    num_pokemon.textContent = poke.num;
    num_pokemon.className = "numPokeFlying";
    card_pokemon.appendChild(num_pokemon);
    const information_pokemon =document.createElement("figcaption");
    information_pokemon.className ="informationFlying";
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


filter_types_pokemon ();

function filter_types_pokemon () {

    let filter_general = document.getElementById("todos");
    filter_general.onclick =function (){
        document.querySelector(".interfazInicial").style.display="none";
        document.querySelector(".header").style.display="block"; 
        document.querySelector(".contentHome").style.display="none"; 
        document.querySelector(".footer1").style.display="none"; 
        document.querySelector(".contentPokedex").style.display="block";
        document.querySelector(".pokemon-container").style.display="none";
        document.querySelector(".pokemon-container-descendentes").style.display="none";
        document.querySelector(".allTypes").style.display="grid";
        document.querySelector(".pokemon-container-typeSteel").style.display="grid";
        document.querySelector(".pokemon-container-typeWater").style.display="grid";
        document.querySelector(".pokemon-container-typeBug").style.display="grid";
        document.querySelector(".pokemon-container-typeDragon").style.display="grid";
        document.querySelector(".pokemon-container-typeElectric").style.display="grid";
        document.querySelector(".pokemon-container-typeGhost").style.display="grid";
        document.querySelector(".pokemon-container-typeFire").style.display="grid";
        document.querySelector(".pokemon-container-typeFairy").style.display="grid";
        document.querySelector(".pokemon-container-typeIce").style.display="grid";
        document.querySelector(".pokemon-container-typeFighting").style.display="grid";
        document.querySelector(".pokemon-container-typeNormal").style.display="grid";
        document.querySelector(".pokemon-container-typeGrass").style.display="grid";
        document.querySelector(".pokemon-container-typePsychic").style.display="grid";
        document.querySelector(".pokemon-container-typeRock").style.display="grid";
        document.querySelector(".pokemon-container-typeDark").style.display="grid";
        document.querySelector(".pokemon-container-typeGround").style.display="grid";
        document.querySelector(".pokemon-container-typePoison").style.display="grid";
        document.querySelector(".pokemon-container-typeFlying").style.display="grid";
        document.querySelector(".btn-flotante").style.display="block";
        document.querySelector(".footer2").style.display="block";
    }

    let filter_steel = document.getElementById("acero");
    filter_steel.onclick =function (){
        document.querySelector(".interfazInicial").style.display="none";
        document.querySelector(".header").style.display="block"; 
        document.querySelector(".contentHome").style.display="none"; 
        document.querySelector(".footer1").style.display="none"; 
        document.querySelector(".contentPokedex").style.display="block";
        document.querySelector(".pokemon-container").style.display="none";
        document.querySelector(".pokemon-container-descendentes").style.display="none";
        document.querySelector(".allTypes").style.display="grid";
        document.querySelector(".pokemon-container-typeSteel").style.display="grid";
        document.querySelector(".footer2").style.display="block";
    }
    let filter_water = document.getElementById("agua");
    filter_water.onclick =function (){
        document.querySelector(".interfazInicial").style.display="none";
        document.querySelector(".header").style.display="block"; 
        document.querySelector(".contentHome").style.display="none"; 
        document.querySelector(".footer1").style.display="none"; 
        document.querySelector(".contentPokedex").style.display="block";
        document.querySelector(".pokemon-container").style.display="none";
        document.querySelector(".pokemon-container-descendentes").style.display="none";
        document.querySelector(".allTypes").style.display="grid";
        document.querySelector(".pokemon-container-typeWater").style.display="grid";
        document.querySelector(".footer2").style.display="block";
    }

    let filter_bug = document.getElementById("bicho");
    filter_bug.onclick =function (){
        document.querySelector(".interfazInicial").style.display="none";
        document.querySelector(".header").style.display="block"; 
        document.querySelector(".contentHome").style.display="none"; 
        document.querySelector(".footer1").style.display="none"; 
        document.querySelector(".contentPokedex").style.display="block";
        document.querySelector(".pokemon-container").style.display="none";
        document.querySelector(".pokemon-container-descendentes").style.display="none";
        document.querySelector(".allTypes").style.display="grid";
        document.querySelector(".pokemon-container-typeBug").style.display="grid";
        document.querySelector(".footer2").style.display="block";
    }
    let filter_dragon = document.getElementById("dragon");
    filter_dragon.onclick =function (){
        document.querySelector(".interfazInicial").style.display="none";
        document.querySelector(".header").style.display="block"; 
        document.querySelector(".contentHome").style.display="none"; 
        document.querySelector(".footer1").style.display="none"; 
        document.querySelector(".contentPokedex").style.display="block";
        document.querySelector(".pokemon-container").style.display="none";
        document.querySelector(".pokemon-container-descendentes").style.display="none";
        document.querySelector(".allTypes").style.display="grid";
        document.querySelector(".pokemon-container-typeDragon").style.display="grid";
        document.querySelector(".footer2").style.display="block";
    }
    let filter_electric = document.getElementById("electrico");
    filter_electric.onclick =function (){
        document.querySelector(".interfazInicial").style.display="none";
        document.querySelector(".header").style.display="block"; 
        document.querySelector(".contentHome").style.display="none"; 
        document.querySelector(".footer1").style.display="none"; 
        document.querySelector(".contentPokedex").style.display="block";
        document.querySelector(".pokemon-container").style.display="none";
        document.querySelector(".pokemon-container-descendentes").style.display="none";
        document.querySelector(".allTypes").style.display="grid";
        document.querySelector(".pokemon-container-typeElectric").style.display="grid";
        document.querySelector(".footer2").style.display="block";
    }
    let filter_ghost = document.getElementById("fantasma");
    filter_ghost.onclick =function (){
        document.querySelector(".interfazInicial").style.display="none";
        document.querySelector(".header").style.display="block"; 
        document.querySelector(".contentHome").style.display="none"; 
        document.querySelector(".footer1").style.display="none"; 
        document.querySelector(".contentPokedex").style.display="block";
        document.querySelector(".pokemon-container").style.display="none";
        document.querySelector(".pokemon-container-descendentes").style.display="none";
        document.querySelector(".allTypes").style.display="grid";
        document.querySelector(".pokemon-container-typeGhost").style.display="grid";
        document.querySelector(".footer2").style.display="block";
    }
    let filter_fire = document.getElementById("fuego");
    filter_fire.onclick =function (){
        document.querySelector(".interfazInicial").style.display="none";
        document.querySelector(".header").style.display="block"; 
        document.querySelector(".contentHome").style.display="none"; 
        document.querySelector(".footer1").style.display="none"; 
        document.querySelector(".contentPokedex").style.display="block";
        document.querySelector(".pokemon-container").style.display="none";
        document.querySelector(".pokemon-container-descendentes").style.display="none";
        document.querySelector(".allTypes").style.display="grid";
        document.querySelector(".pokemon-container-typeFire").style.display="grid";
        document.querySelector(".footer2").style.display="block";
    }
    let filter_fairy = document.getElementById("hada");
    filter_fairy.onclick =function (){
        document.querySelector(".interfazInicial").style.display="none";
        document.querySelector(".header").style.display="block"; 
        document.querySelector(".contentHome").style.display="none"; 
        document.querySelector(".footer1").style.display="none"; 
        document.querySelector(".contentPokedex").style.display="block";
        document.querySelector(".pokemon-container").style.display="none";
        document.querySelector(".pokemon-container-descendentes").style.display="none";
        document.querySelector(".allTypes").style.display="grid";
        document.querySelector(".pokemon-container-typeFairy").style.display="grid";
        document.querySelector(".footer2").style.display="block";
    }
    let filter_ice = document.getElementById("hielo");
    filter_ice.onclick =function (){
        document.querySelector(".interfazInicial").style.display="none";
        document.querySelector(".header").style.display="block"; 
        document.querySelector(".contentHome").style.display="none"; 
        document.querySelector(".footer1").style.display="none"; 
        document.querySelector(".contentPokedex").style.display="block";
        document.querySelector(".pokemon-container").style.display="none";
        document.querySelector(".pokemon-container-descendentes").style.display="none";
        document.querySelector(".allTypes").style.display="grid";
        document.querySelector(".pokemon-container-typeIce").style.display="grid";
        document.querySelector(".footer2").style.display="block";
    }
    let filter_fighting = document.getElementById("lucha");
    filter_fighting.onclick =function (){
        document.querySelector(".interfazInicial").style.display="none";
        document.querySelector(".header").style.display="block"; 
        document.querySelector(".contentHome").style.display="none"; 
        document.querySelector(".footer1").style.display="none"; 
        document.querySelector(".contentPokedex").style.display="block";
        document.querySelector(".pokemon-container").style.display="none";
        document.querySelector(".pokemon-container-descendentes").style.display="none";
        document.querySelector(".allTypes").style.display="grid";
        document.querySelector(".pokemon-container-typeFighting").style.display="grid";
        document.querySelector(".footer2").style.display="block";
    }
    let filter_normal = document.getElementById("normal");
    filter_normal.onclick =function (){
        document.querySelector(".interfazInicial").style.display="none";
        document.querySelector(".header").style.display="block"; 
        document.querySelector(".contentHome").style.display="none"; 
        document.querySelector(".footer1").style.display="none"; 
        document.querySelector(".contentPokedex").style.display="block";
        document.querySelector(".pokemon-container").style.display="none";
        document.querySelector(".pokemon-container-descendentes").style.display="none";
        document.querySelector(".allTypes").style.display="grid";
        document.querySelector(".pokemon-container-typeNormal").style.display="grid";
        document.querySelector(".footer2").style.display="block";
    }
    let filter_grass = document.getElementById("planta");
    filter_grass.onclick =function (){
        document.querySelector(".interfazInicial").style.display="none";
        document.querySelector(".header").style.display="block"; 
        document.querySelector(".contentHome").style.display="none"; 
        document.querySelector(".footer1").style.display="none"; 
        document.querySelector(".contentPokedex").style.display="block";
        document.querySelector(".pokemon-container").style.display="none";
        document.querySelector(".pokemon-container-descendentes").style.display="none";
        document.querySelector(".allTypes").style.display="grid";
        document.querySelector(".pokemon-container-typeGrass").style.display="grid";
        document.querySelector(".footer2").style.display="block";
    }
    let filter_psychic = document.getElementById("psiquico");
    filter_psychic.onclick =function (){
        document.querySelector(".interfazInicial").style.display="none";
        document.querySelector(".header").style.display="block"; 
        document.querySelector(".contentHome").style.display="none"; 
        document.querySelector(".footer1").style.display="none"; 
        document.querySelector(".contentPokedex").style.display="block";
        document.querySelector(".pokemon-container").style.display="none";
        document.querySelector(".pokemon-container-descendentes").style.display="none";
        document.querySelector(".allTypes").style.display="grid";
        document.querySelector(".pokemon-container-typePsychic").style.display="grid";
        document.querySelector(".footer2").style.display="block";
    }
    let filter_rock = document.getElementById("roca");
    filter_rock.onclick =function (){
        document.querySelector(".interfazInicial").style.display="none";
        document.querySelector(".header").style.display="block"; 
        document.querySelector(".contentHome").style.display="none"; 
        document.querySelector(".footer1").style.display="none"; 
        document.querySelector(".contentPokedex").style.display="block";
        document.querySelector(".pokemon-container").style.display="none";
        document.querySelector(".pokemon-container-descendentes").style.display="none";
        document.querySelector(".allTypes").style.display="grid";
        document.querySelector(".pokemon-container-typeRock").style.display="grid";
        document.querySelector(".footer2").style.display="block";
    }
    let filter_dark = document.getElementById("siniestro");
    filter_dark.onclick =function (){
        document.querySelector(".interfazInicial").style.display="none";
        document.querySelector(".header").style.display="block"; 
        document.querySelector(".contentHome").style.display="none"; 
        document.querySelector(".footer1").style.display="none"; 
        document.querySelector(".contentPokedex").style.display="block";
        document.querySelector(".pokemon-container").style.display="none";
        document.querySelector(".pokemon-container-descendentes").style.display="none";
        document.querySelector(".allTypes").style.display="grid";
        document.querySelector(".pokemon-container-typeDark").style.display="grid";
        document.querySelector(".footer2").style.display="block";
    }
    let filter_ground = document.getElementById("tierra");
    filter_ground.onclick =function (){
        document.querySelector(".interfazInicial").style.display="none";
        document.querySelector(".header").style.display="block"; 
        document.querySelector(".contentHome").style.display="none"; 
        document.querySelector(".footer1").style.display="none"; 
        document.querySelector(".contentPokedex").style.display="block";
        document.querySelector(".pokemon-container").style.display="none";
        document.querySelector(".pokemon-container-descendentes").style.display="none";
        document.querySelector(".allTypes").style.display="grid";
        document.querySelector(".pokemon-container-typeGround").style.display="grid";
        document.querySelector(".footer2").style.display="block";
    }
    let filter_poison = document.getElementById("veneno");
    filter_poison.onclick =function (){
        document.querySelector(".interfazInicial").style.display="none";
        document.querySelector(".header").style.display="block"; 
        document.querySelector(".contentHome").style.display="none"; 
        document.querySelector(".footer1").style.display="none"; 
        document.querySelector(".contentPokedex").style.display="block";
        document.querySelector(".pokemon-container").style.display="none";
        document.querySelector(".pokemon-container-descendentes").style.display="none";
        document.querySelector(".allTypes").style.display="grid";
        document.querySelector(".pokemon-container-typePoison").style.display="grid";
        document.querySelector(".footer2").style.display="block";
    }
    let filter_flying = document.getElementById("volador");
    filter_flying.onclick =function (){
        document.querySelector(".interfazInicial").style.display="none";
        document.querySelector(".header").style.display="block"; 
        document.querySelector(".contentHome").style.display="none"; 
        document.querySelector(".footer1").style.display="none"; 
        document.querySelector(".contentPokedex").style.display="block";
        document.querySelector(".pokemon-container").style.display="none";
        document.querySelector(".pokemon-container-descendentes").style.display="none";
        document.querySelector(".allTypes").style.display="grid";
        document.querySelector(".pokemon-container-typeFlying").style.display="grid";
        document.querySelector(".footer2").style.display="block";
    }
}

//Funcion Interfaz Batalla

const pokemon_batalla =document.getElementById("pokemon-batalla");

let general_reverse1 =infoGeneral.reverse();

general_reverse1.forEach (poke => {
    const card_pokemon_batalla =document.createElement("figure");
    card_pokemon_batalla.className ="cardsBatalla";
    pokemon_batalla.appendChild(card_pokemon_batalla);
    const num_pokemon_batalla = document.createElement("p");
    num_pokemon_batalla.textContent = poke.num;
    num_pokemon_batalla.className = "numPokeBatalla";
    card_pokemon_batalla.appendChild(num_pokemon_batalla);
    const image_pokemon_batalla= document.createElement("img");
    image_pokemon_batalla.src=poke.img;
    image_pokemon_batalla.className ="imgPokeBatalla";
    card_pokemon_batalla.appendChild(image_pokemon_batalla);
    const name_pokemon_batalla = document.createElement("h4");
    name_pokemon_batalla.textContent = poke.name;
    name_pokemon_batalla.className ="namePokeBatalla";
    card_pokemon_batalla.appendChild(name_pokemon_batalla);
    const information_pokemon_batalla =document.createElement("figcaption");
    information_pokemon_batalla.className ="informationBatalla";
    card_pokemon_batalla.appendChild(information_pokemon_batalla);
    const type1_pokemon_batalla =document.createElement("p");
    type1_pokemon_batalla.textContent = "Tipo : "+ poke.type[0];
    type1_pokemon_batalla.className = "typesPokeBatalla";
    information_pokemon_batalla.appendChild(type1_pokemon_batalla);
    const type2_pokemon_batalla =document.createElement("p");
    type2_pokemon_batalla.textContent =poke.type[1];
    type2_pokemon_batalla.className = "typesPoke2Batalla";
    information_pokemon_batalla.appendChild(type2_pokemon_batalla);
    const resistant1 = document.createElement("p");
    resistant1.textContent="Resistente: "+ poke.resistant[0];
    resistant1.className = "resistant";
    information_pokemon_batalla.appendChild(resistant1);
    const resistant2 = document.createElement("p");
    resistant2.textContent=poke.resistant[1];
    resistant2.className = "resistant2";
    information_pokemon_batalla.appendChild(resistant2);
    const resistant3 = document.createElement("p");
    resistant3.textContent=poke.resistant[2];
    resistant3.className = "resistant2";
    information_pokemon_batalla.appendChild(resistant3);
    const resistant4 = document.createElement("p");
    resistant4.textContent=poke.resistant[3];
    resistant4.className = "resistant2";
    information_pokemon_batalla.appendChild(resistant4);
    const resistant5 = document.createElement("p");
    resistant5.textContent=poke.resistant[4];
    resistant5.className = "resistant2";
    information_pokemon_batalla.appendChild(resistant5);
    const weaknesses1 = document.createElement("p");
    weaknesses1.textContent="Debilidad: "+poke.weaknesses[0];
    weaknesses1.className = "weaknesses";
    information_pokemon_batalla.appendChild(weaknesses1);
    const weaknesses2 = document.createElement("p");
    weaknesses2.textContent=poke.weaknesses[1];
    weaknesses2.className = "weaknesses2";
    information_pokemon_batalla.appendChild(weaknesses2);
    const weaknesses3 = document.createElement("p");
    weaknesses3.textContent=poke.weaknesses[2];
    weaknesses3.className = "weaknesses2";
    information_pokemon_batalla.appendChild(weaknesses3);
    const weaknesses4 = document.createElement("p");
    weaknesses4.textContent=poke.weaknesses[3];
    weaknesses4.className = "weaknesses2";
    information_pokemon_batalla.appendChild(weaknesses4);
})

function_of_filter ();

function function_of_filter (){
    var checkBoxAll = document.getElementById("checkAll");
    var allTypesPokemon = document.getElementById("allTypes");

    if (checkBoxAll.checked == true){
        allTypesPokemon.style.display = "block";
    } 
    else{
        allTypesPokemon.style.display = "none";
    }
}


let texto=document.getElementById('texto');
let buscar=document.getElementById('buscar');
buscar.addEventListener("click", busqueda);


function busqueda (){
    const resultado = texto.value.toUpperCase();
    const card_battle = document.getElementsByClassName("cardsBatalla");


//    console.log(resultado)

    for (let i = 0; i < infoGeneral.length; i++){
        if (card_battle[i].textContent.toUpperCase().includes(resultado)){
            card_battle[i].style.display = "block";
        }else{
            card_battle[i].style.display = "none";
        }
    }
}



//Funcion Interfaz Evolucion

const pokemon_evolucion =document.getElementById("pokemon-evolucion");


infoGeneral.forEach (poke => {
    const card_pokemon_evolucion =document.createElement("figure");
    card_pokemon_evolucion.className ="cardsEvolucion";
    pokemon_evolucion.appendChild(card_pokemon_evolucion);
    const name_pokemon_evolucion = document.createElement("h4");
    name_pokemon_evolucion.textContent = poke.name;
    name_pokemon_evolucion.className ="namePokeEvolucion";
    card_pokemon_evolucion.appendChild(name_pokemon_evolucion);
    const region_evolucion = document.createElement("p");
    region_evolucion.textContent = poke.generation.name;
    region_evolucion.className ="regionEvolucion";
    card_pokemon_evolucion.appendChild(region_evolucion);
    const image_pokemon_evolucion= document.createElement("img");
    image_pokemon_evolucion.src=poke.img;
    image_pokemon_evolucion.className ="imgPokeEvolucion";
    card_pokemon_evolucion.appendChild(image_pokemon_evolucion);
    const num_pokemon_evolucion = document.createElement("p");
    num_pokemon_evolucion.textContent = poke.num;
    num_pokemon_evolucion.className = "numPokeEvolucion";
    card_pokemon_evolucion.appendChild(num_pokemon_evolucion);
    const information_pokemon_evolucion =document.createElement("figcaption");
    information_pokemon_evolucion.className ="informationEvolucion";
    card_pokemon_evolucion.appendChild(information_pokemon_evolucion);
    const type1_pokemon_evolucion =document.createElement("p");
    type1_pokemon_evolucion.textContent = "Tipo : "+ poke.type[0];
    type1_pokemon_evolucion.className = "typesPokeEvolucion";
    information_pokemon_evolucion.appendChild(type1_pokemon_evolucion);
    const atributes_evolucion_candy =document.createElement("p");
    atributes_evolucion_candy.textContent = "Caramelos : "+ poke.evolution.candy;
    atributes_evolucion_candy.className = "atributesCandy";
    information_pokemon_evolucion.appendChild(atributes_evolucion_candy);

})

//Funcion cambio de paginas internas FanPage

pages ();

function pages () {

    let botonInicio = document.getElementById("btnInicio");
    botonInicio.onclick = function (){
        document.querySelector(".interfazInicial").style.display="none";
        document.querySelector(".header").style.display="block"; 
        document.querySelector(".contentHome").style.display="block"; 
        document.querySelector(".footer1").style.display="block"; 
        document.querySelector(".contentPokedex").style.display="none";
        document.querySelector(".contentEvolucion").style.display="none";
        document.querySelector(".contentBatalla").style.display="none";

    }

    let mainHome = document.getElementById("home");
    mainHome.onclick = function(){
        document.querySelector(".header").style.display="block"; 
        document.querySelector(".contentHome").style.display="block"; 
        document.querySelector(".footer1").style.display="block"; 
        document.querySelector(".contentPokedex").style.display="none";
        document.querySelector(".contentBatalla").style.display="none";
        document.querySelector(".footer3").style.display="none"; 
        document.querySelector(".contentEvolucion").style.display="none";
        document.querySelector(".footer4").style.display="none"; 
    }

    let mainPokedex = document.getElementById("pokedex");
    mainPokedex.onclick = function(){
        document.querySelector(".interfazInicial").style.display="none";
        document.querySelector(".header").style.display="block"; 
        document.querySelector(".contentHome").style.display="none"; 
        document.querySelector(".footer1").style.display="none"; 
        document.querySelector(".contentPokedex").style.display="block";
        document.querySelector(".footer2").style.display="block"; 
        document.querySelector(".contentBatalla").style.display="none";
        document.querySelector(".footer3").style.display="none"; 
        document.querySelector(".contentEvolucion").style.display="none";
        document.querySelector(".footer4").style.display="none"; 
    }
    let mainBatalla = document.getElementById("batalla");
    mainBatalla.onclick = function(){
        document.querySelector(".interfazInicial").style.display="none";
        document.querySelector(".header").style.display="block"; 
        document.querySelector(".contentHome").style.display="none"; 
        document.querySelector(".footer1").style.display="none"; 
        document.querySelector(".contentPokedex").style.display="none";
        document.querySelector(".footer2").style.display="none"; 
        document.querySelector(".contentBatalla").style.display="block";
        document.querySelector(".footer3").style.display="block"; 
        document.querySelector(".contentEvolucion").style.display="none";
        document.querySelector(".btn-flotante2").style.display="block";
        document.querySelector(".footer4").style.display="none"; 
    }
    let mainEvolucion = document.getElementById("evolucion");
    mainEvolucion.onclick = function(){
        document.querySelector(".interfazInicial").style.display="none";
        document.querySelector(".header").style.display="block"; 
        document.querySelector(".contentHome").style.display="none"; 
        document.querySelector(".footer1").style.display="none"; 
        document.querySelector(".contentPokedex").style.display="none";
        document.querySelector(".footer2").style.display="none"; 
        document.querySelector(".contentBatalla").style.display="none";
        document.querySelector(".footer3").style.display="none"; 
        document.querySelector(".contentEvolucion").style.display="block";
        document.querySelector(".btn-flotante3").style.display="block";
        document.querySelector(".footer4").style.display="block"; 
    }

}
