import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

// eslint-disable-next-line no-console
console.log(example,data);

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