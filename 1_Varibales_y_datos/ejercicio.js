// Variables

// Guarda en variables el nombre de las siguientes mascotas:

// 1. Pedrito
// 2. Rufo
// 3. Chancla

// Muestra en consola, accediendo a las variables, un mensaje como el siguiente:
// "Mis mascotas son Pedrito, Rufo y Chancla. Les quiero mucho"

// Input y Output

// Pedir mediante prompts el nombre de dos mascotas y mostrar en consola un mensaje como el siguiente:

// "Quiero mucho a mis mascotas mascota1 y mascota2"

// NOTA: mascota1 y mascota2 corresponden a los nombres introducidos mediante prompts

// Conversión de Tipos de Datos

// Guarda la cadena de texto "100" en una variable
// Muestra el contenido de esta variable en consola
// Muestra el TIPO DE DATO de esta variable en consola
// Transforma la variable de string a number
// Muestra nuevamente el contenido de esta variable en consola
// ¿Qué diferencias notas al mostrar en consola la variable antes y después de transformarla? ¿Qué es entonces un tipo de dato?


//variables 

var mascota1 = 'Pedrito';
var mascota2 = 'Rufo';
var mascota3 = 'Chancla';


//2

var text = 'Mis mascotas son ' + mascota1 + ',' + mascota2 + ',' + mascota3 + '.Les quiero mucho';

console.log(text);


//Pedir nombre apartir de prompt

//var masc1 = prompt('Escribe el nombre de la primera mascota');

//var masc2 = prompt('Escribe el nombre de la segunda mascota');

//var masc3 = prompt('Escribe el nombre de la tercera mascota');


//console.log('Quiero mucho a mis mascotas ' + masc1 + masc2 + y +masc3);


//3

var numero = '100';
console.log(numero);

//typeof muestra el tipo de variable
console.log(typeof numero);

//Trsanformar la variable de string a number

var numerotrans = parseInt(numero);
console.log(numerotrans);
console.log(typeof numerotrans);




