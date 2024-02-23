const ISOK = 200;
const MAX_ID = 150;
const MIN_ID = 1;
var idField;

var jsObject;
var id = 0;

function assignText(id){
    let arrId = id - 1;
    //Assigning
    const infoDiv = document.getElementById("infoDiv");
    const pokeNum = document.getElementById("pokemonNumText");
    const pokeName = document.getElementById("pokemonNameText");
    const pokeHeight = document.getElementById("pokemonHeightText");
    const pokeWeight = document.getElementById("pokemonWeightText");
    const pokePic = document.getElementById("pokemonPic");

    //Creating
    const pokeStats = document.getElementById("pokeStats");
    let type = "";
    for(let i = 0; i < jsObject.pokemon[arrId].type.length; i++){
        if (i === jsObject.pokemon[arrId].type.length - 1){
            type += jsObject.pokemon[arrId].type[i] + "<br>";
        }else{
            type += jsObject.pokemon[arrId].type[i] + ", ";
        }
    }

    let weakness = "";
    //Adds weaknesses
    for(let i = 0; i < jsObject.pokemon[arrId].weaknesses.length; i++){
        if (i === jsObject.pokemon[arrId].weaknesses.length - 1){
            weakness += jsObject.pokemon[arrId].weaknesses[i] + "<br>";
        }else{
            weakness += jsObject.pokemon[arrId].weaknesses[i] + ", ";
        }
    }

    pokeStats.innerHTML = `Type: ${type} <br>Weakness: ${weakness} <br> `

    pokeNum.value = jsObject.pokemon[arrId].num;
    pokeName.value = jsObject.pokemon[arrId].name;
    pokeHeight.value = jsObject.pokemon[arrId].height;
    pokeWeight.value = jsObject.pokemon[arrId].weight;
    pokePic.src = jsObject.pokemon[arrId].img;
}

function searchID(){
    id = parseInt(idField.value);
    if(id >= MIN_ID && id <= MAX_ID){
        assignText(id);
    }else{
        idField.value = "";
    }
}

function previousP(){
    if((id) - 1 >= MIN_ID){
        idField.value = id - 1; 
        assignText(--id);
    }
}

function nextP(){
    if((id - 1) + 1 <= MAX_ID){
        idField.value = id + 1;
        assignText(++id);
    }
}

function getJSONAsync(url){
    var request = new XMLHttpRequest(); //Not actually XML like it says
    request.onload = function(){
        if (request.status === 200){
            console.log(request.responseTest);
            jsObject = JSON.parse(request.responseText);
        }
    }
    request.open("GET", url, true);
    request.send();
}

function getDataAsync(){
    idField = document.getElementById("pokemonIDText");
    var url = "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json";
    getJSONAsync(url);
}