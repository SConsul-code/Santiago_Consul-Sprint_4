/**
 * ### Challenge `getCharacterNameByIndex`
 *
 * @instrucciones
 * getCharacterNameByIndex toma dos argumentos:
 * (1) un array de personajes como el de la vista previa de arriba
 * (2) un número que es el índice deseado en el array.
 * getCharacterNameByIndex devuelve una cadena con el formato `El personaje es: {name}`
 *
 * Por ejemplo, si getCharacterNameByIndex se invoca con el inventario y el número 0. * devolverá
 * devolverá «El personaje es Luke Skywalker».
 */
/**
 * Filter
 * 1 Obtener caracteres con masa superior a 100
 * 2 Obtener personajes con altura inferior a 200
 * 3 Obtener una matriz con todos los nombres
 * 4 Obtener un array de objetos con sólo las propiedades nombre y altura
 * 5 Encontrar el primer personaje con ojos marrones.
 * 6 Obtener todos los personajes masculinos
 * 7 Obtener todos los personajes femeninos
 * 9 Obtener una matriz con todas las alturas
 * 10 Imprimir en la consola los nombres de todos los personajes.
 * 11 Encontrar el primer personaje que tenga ojos de color azul y que su peso sea mayor a 80
 * 12 Verificar si todos los personajes con ojos azules tienen una altura mayor a 170.
 * En este ejercicio no es necesario escribir función, pueden resolverse los ejercicios
 * en forma simultánea con un comentario previo indicando el número. Ejemplo abajo:
 */

// 1 Obtener caracteres con masa superior a 100



const characters = [
    {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    eye_color: "blue",
    gender: "male",
    },
    {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    eye_color: "yellow",
    gender: "male",
    },
    {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    eye_color: "brown",
    gender: "female",
    },
    {
    name: "Anakin Skywalker",
    height: "188",
    mass: "84",
    eye_color: "blue",
    gender: "male",
    },
];

// 1 Obtener caracteres con masa superior a 100

function getCharacter100(characters) {
    return characters.filter(character => character.mass>100);
}

const characters100 = getCharacter100(characters);

console.log(characters100);
//2 Obtener personajes con altura inferior a 200

function getCharacterHeight(characters) {
    return characters.filter(character => character.height<200);
}

const charactertsLow200=getCharacterHeight(characters);

console.log(charactertsLow200);

//3 Obtener una matriz con todos los nombres

function getCharactersNames(characters){
    return characters.map(character => character.name)
}

const charactersNames = getCharactersNames(characters);

console.log(charactersNames);

// 4 Obtener un array de objetos con sólo las propiedades nombre y altura

function getCharacterHeightAndName (characters){
    return characters.map(character => ({
        name: character.name,
        height: character.height
    }));
    
}

const charactersHeightAndName=getCharacterHeightAndName(characters);

console.log(charactersHeightAndName);

// 5 Encontrar el primer personaje con ojos marrones.

function getCharacterColor(eye_color){
    return characters.find(character=> character.eye_color==='brown')
}

const characterBrown = getCharacterColor();

console.log(characterBrown); 

//6 Obtener todos los personajes masculinos

function getCharacterGenderMale(characters){
    return characters.filter(character=> character.gender==='male')
}

const characterMale = getCharacterGenderMale(characters);

console.log(characterMale);

//7 Obtener todos los personajes femeninos

function getCharacterGenderFemale(characters){
    return characters.filter(character=> character.gender==='female')
}

const characterFemale = getCharacterGenderFemale(characters);

console.log(characterFemale);

//9  Obtener una matriz con todas las alturas

function getCharactersHeights(characters){
    return characters.map(character => character.height)
}

const charactersHeightList = getCharactersHeights(characters);

console.log(charactersHeightList);

//10 Imprimir en la consola los nombres de todos los personajes

characters.forEach((character => console.log(character.name))); 

//11 Encontrar el primer personaje que tenga ojos de color azul y que su peso sea mayor a 80

function getCharacterBlueAndMass(characters){           // Usamos "&&" para verificar que que se cumpla la conidicion mass>80
    return characters.find(character=> character.eye_color==='blue' && character.mass>80)
}

const characterBlueAndMass = getCharacterBlueAndMass(characters);

console.log(characterBlueAndMass);

//12 Verificar si todos los personajes con ojos azules tienen una altura mayor a 170

function verifyBlueAndHeight(characters){
    return characters.every(character=> character.eye_color==='blue' && character.height>170)
}

const blueHeightVerify = verifyBlueAndHeight(characters);

console.log(blueHeightVerify);