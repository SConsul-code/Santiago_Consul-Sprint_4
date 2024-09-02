// Parte 1
/**
 * ### Challenge `sayGoodbye`
 *
 * //@instrucciones
 * Esta función debe tomar un nombre como argumento,
 * y devolver una cadena que diga `Adiós, {nombre}. Que tengas un buen día'.
 *
 * Por ejemplo, si invocamos `sayGoodbye`
 * pasando 'Andy' como argumento,
 * el valor devuelto debería parecerse a: 'Adiós, Andy. Que tengas un buen día'.
 *
 */


function sayGoodbye(nombre) {

    return `Adios, ${nombre}. Que tengas un buen dia`;

}

console.log(sayGoodbye('Andy'));

/**
 * ### Challenge `temperatureInC`
 *
 * @instrucciones
 * Esta función debe tomar una temperatura y una unidad (ya sea 'F' o 'C') como argumentos,
 * y devolver la temperatura en grados Celcius, redondeada al número entero más cercano.
 *
 * Por ejemplo, si invocamos temperatureInC
 * pasando 88, 'F' como argumentos,
 * el valor devuelto debe ser: '24C'
 *
 * Si invocamos `temperatureInC`
 * pasando 24, 'C' como argumentos,
 * el valor devuelto debe ser: '24F'
 *
 * Sugerencia: Puedes crear otra función para convertir F a C.
 */

function auxiliaryFunction (temperature){
    return Math.round((temperature -32)* 5/9)+ 'C';
}
function temperatureInC( temperature, value ) {
    if (value === 'F'){ 

        console.log(auxiliaryFunction(temperature))

    } else if(value=== 'C'){
        console.log (Math.round(temperature)+'F')

    }else{
        console.log("Invalid temperature")
    }

}

temperatureInC(28, 'F');
temperatureInC(90, 'C');
temperatureInC('prueba invalid');


/* console.log(temperatureInC(24, 'C'));
console.log(temperatureInC(88, 'F'));
console.log(temperatureInC(33, 'L')); */

/* * ### Challenge `makePersonObject`
*
* @instrucciones
* Esta función debe tomar un id, un nombre y un email como argumentos,
* y devolver un objeto con las propiedades `id`, `name` y `email`.
*
* Por ejemplo, si invocamos `makePersonObject`
* pasando 1, 'Alguien' y 'alguien@alguien.com' como argumentos,
* el valor devuelto deberia parecerse a:
* {
* id: 1,
* name: Alguien,
* email: alguien@alguien.com»,
* }
 */

function makePersonObject(id, name, email){
    return {
        id:id,
        name:name,
        email:email
        
    };
}

const personDescription = makePersonObject(1, 'Santiago', 'Santiago@alguien.com');
console.log(personDescription);

/**
 * ### Challenge `getName`
 *
 * @instrucciones
 * Esta función toma como único argumento
 * un objeto que contiene una propiedad `name`,
 * y devuelve una cadena que dice `Hola, mi nombre es {name}`,
 * donde `{nombre}` es el nombre almacenado en el objeto.
 *
 * Por ejemplo, si invocamos a `getName
 * pasando { id: 1, name: 'Alguien', email: 'alguien@alguien.com` } como argumento,
 * el valor devuelto debería parecerse a `Hola, mi nombre es Alguien`.
 */

function getName(){
    return `Hola, mi nombre es ${peopleName.name}`;
}

const peopleName = {
    id:1, 
    name: 'Santiago', 
    email: 'roberto@gmail.com'
};

console.log(getName(peopleName));

/**
 * ### Challenge `appleIndex`
 *
 * @instrucciones
 * Esta función toma como único argumento un array
 * que contiene cadenas,
 * y devuelve el índice en el array de la cadena `manzana`.
 *
 * Puedes asumir que la cadena 'manzana' aparecerá exactamente
 * una vez en la matriz.
 *
 * Por ejemplo, si invocamos a appleIndex
 * pasando [ 'naranja', 'uva', 'manzana', 'plátano', 'mango' ] como argumento,
 * el valor devuelto debería ser: 2.
 */




function appleIndex(arr){
    return arr.indexOf('manzana');
}
                        //0     1          2          3          4
const arrayFruits=['naranja','banana', 'manzana', 'platano', 'mango'];
console.log(appleIndex(arrayFruits));

/**
 * ### Challenge `isItAnApple`
 *
 * @instrucciones
 * Esta función toma como único argumento un array
 * que contiene cadenas
 * y devuelve un array de igual longitud que contiene `true`
 * si la entrada correspondiente en el array original es `manzana`
 * y `false` si es cualquier otra cosa.
 *
 *
 * Por ejemplo, si invocamos a `isItAnApple`
 * pasando [ 'orange', 'apple', 'banana', 'apples', 'apple', 'mango' ] como argumento,
 * el valor devuelto debería ser: [ false, true, false, false, true, false ].
 */


const Frutas = ['Banana','manzana','uva','manzana'];

function isItAnApple(array){
    return array.map(item => item === 'manzana');
}

console.log(isItAnApple(Frutas));








