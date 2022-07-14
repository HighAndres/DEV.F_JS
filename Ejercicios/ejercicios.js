
//<h3>1</h3>

//Paco hizo travesuras en el salón y la maestra lo castigó, para poder salir tiene escribir en el pizarrón todos los números pares  del 1 al 100, ¿puedes ayudarle a Paco a hacer un algoritmo que haga esto por el?

/*
 function imprimirNumeros(){
   for (let i = 2; i <= 100; i+=2)
     console.log(i)
 }

 imprimirNumeros()
 
let numeroPar = 1;

for(i = 0; i <= 100; i++){
//usar siempre el triple igual
if (numeroPar % 2 === 0){
     console.log(numeroPar)
 }
   numeroPar++
}
*/

//<h3>2</h3>
//Escribir todos los números que terminan en 0 y estén entre 2 y 121

//<h3>3</h3>
//<h4>Extra</h4>
//Joel lleva 5 materias, el quiere saber su promedio al recibir sus calificaciones,
// ¿podrías ayudarle a crear un algoritmo que haga eso por el?
/*
let calificaciones = [10, 8 , 9, 7, 7];

let sumaCalificaciones = 0;  
//AQUI SE SUMA Y SIN EL LENGTH NO FUNCIONA PORQUE "i" DEBE DE SER MENOR AL LARGO DEL ARREGLO 
for(let i = 0; i < calificaciones.length; i ++){
    sumaCalificaciones = sumaCalificaciones + calificaciones[i]
}
 console.log(sumaCalificaciones);


 console.log(`las calificacion es: ${sumaCalificaciones/calificaciones.length}`)

*/


//### Ejercicios de Funciones
//<h3>1</h3>
 //Hacer una función que convierta pesos a dólares
/*
let pesos = 400;

function cambio(a){
    let dolar = 19.59;
    let convert = a/dolar;
    return convert;
}

console.log(cambio(pesos));
 
*/


/*

//<h3>2</h3>
//Hacer una función que cuente el número de caracteres de una palabra

function contador(palabra){
    if (typeof palabra !== "string"){
        return "Tiene que ser una palabra"
    }
    let numeroPalabras = palabra.length
    return numeroPalabras
}
console.log(`El numero de caracteres  es ${contador("AndresCelis")} ` );


*/

 
//<h3>3</h3>
//Hacer una función que halle el máximo entre dos números
/*
function maximo2Num(a,b){
    let respuesta
    if(a < b){
        respuesta = a + 'Es menor que' + b;
        return respuesta;
    }else if(a > b){
        respuesta = a + 'Es mayor que' + b;
        return respuesta
    }else if (a === b){
        respuesta = a+ 'Es igual que' + b;
        return respuesta;
    }
}

console.log(maximo2Num('8','7'));
 */
/*
 //Hacer una función que halle el máximo entre tres números
let numeros = [3,4,5,6];

Math.max(...numeros);
console.log(numeros);

Hacer una función que calcule el IVA de una cantidad (16%)
*/

/*
//<h3>4</h3>
 //Hacer una función para ingresar cualquier letra del alfabeto  
 //y verifique si es vocal o consonante

 function verificadorLetra(letra){
    let vocales = ['a','e','i','o','u']
    let letraMinuscula = letra.toLowerCase() //es para convertir si ul usuario pone una letra en mayuscula se pase a minuscula
     if(vocales.includes(letraMinuscula)){
        return'es vocal'
     }else{
        return 'es una consonante'
    
     }
     
 }
  
console.log(verificadorLetra('a'));
*/
 
/*
//<h3>5</h3>
//Hacer una función que verifique si un número es positivo o negativo
function VerificadorNumero(a){
    if(a > 0){
        return 'positivo'
    }else if(a === 0){
        return 'Es igual a 0'
    }else{
        return 'negativo'
    }
}
let numero = prompt('Ingresa un numero');
console.log(VerificadorNumero(numero));


*/
 

//<h3>7</h3>
//Hacer una función que halle la suma de todos los números naturales entre 1 y n
/*
function factorial(a){
if(typeof Number(a) !== 'number'){ //el number espara cotrolar el tipo de datos que entra osea number
    return 'esto es un'
}

    let resul = 0

    for(let i = 1; i <= a; i++){
        resul = resul +i
    }
  return resul
}

var num = prompt('Numeros ha sumar')
console.log(factorial(num))

*/



 /*
<h3>8</h3>
 Hacer una función que imprima una pirámide de asteriscos como la siguiente:

'*'
'**'
'***'
'****'
'*****'
'******'
'*******'
'********'

EXTRA pasando una altura a la funcion crea la piramide segun ese alto: 
       
//              0        *        vuelta * 2 + 1
//              1       ***
//              2      *****
//              3     *******
//              4    *********

*/
//<h3>9</h3>
//Crea un programa que pregunte al usuario un número. Usando el archivo de arreglo de Pokémons, mostrar solo los nombres de los Pokémons cuyos números que son múltiplos de 5 desde 1 hasta el número introducido por el usuario. 
//https://pastebin.com/Zzk8g7Z6
/*
console.log(typeofArrego(randomArreglo))
let pokemonesArray = [
    'bulbasaur',
    'ivysaur',
    'venusaur',
    'charmander',
    'charmeleon',
    'charizard',
    'squirtle',
    'wartortle',
    'blastoise',
    'caterpie',
    'metapod',
    'butterfree',
    'weedle',
    'kakuna',
    'beedrill',
    'pidgey',
    'pidgeotto',
    'pidgeot',
    'rattata',
    'raticate',
    'spearow',
    'fearow',
    'ekans',
    'arbok',
    'pikachu',
    'raichu',
    'sandshrew',
    'sandslash',
    'nidoran-f',
    'nidorina',
    'nidoqueen',
    'nidoran-m',
    'nidorino',
    'nidoking',
    'clefairy',
    'clefable',
    'vulpix',
    'ninetales',
    'jigglypuff',
    'wigglytuff',
    'zubat',
    'golbat',
    'oddish',
    'gloom',
    'vileplume',
    'paras',
    'parasect',
    'venonat',
    'venomoth',
    'diglett',
    'dugtrio',
    'meowth',
    'persian',
    'psyduck',
    'golduck',
    'mankey',
    'primeape',
    'growlithe',
    'arcanine',
    'poliwag',
    'poliwhirl',
    'poliwrath',
    'abra',
    'kadabra',
    'alakazam',
    'machop',
    'machoke',
    'machamp',
    'bellsprout',
    'weepinbell',
    'victreebel',
    'tentacool',
    'tentacruel',
    'geodude',
    'graveler',
    'golem',
    'ponyta',
    'rapidash',
    'slowpoke',
    'slowbro',
    'magnemite',
    'magneton',
    'farfetchd',
    'doduo',
    'dodrio',
    'seel',
    'dewgong',
    'grimer',
    'muk',
    'shellder',
    'cloyster',
    'gastly',
    'haunter',
    'gengar',
    'onix',
    'drowzee',
    'hypno',
    'krabby',
    'kingler',
    'voltorb'
  ]
  
    function pokemonesNumero(n) {
  
      // el numero ingresado por el usuario no debe ser mayor al array 
  
      // guardar los resultados en otro array y retornarlo
  
  
      for (let i = 1; i <= n; i++ ){
        if (i % 5 === 0) {
          console.log(pokemonesArray[i])
        }
      }
    }
  
    console.log(pokemonesNumero(100))


*/


//<h3>10</h3>
//Crea un programa que recorra el arreglo [4,”dos”,8,”tres”,5,9,1,”cero”] y muestre en consola solo los elementos que son tipo número.
/*

let randomArreglo = [4,'dos',8,'tres',5,9,1,'cero']

function typeofArrego(arreglo) {

  let numeros = []

  for (let i = 0; i < arreglo.length; i++){    
      if (typeof arreglo[i] === 'number') {
        numeros.push(arreglo[i])
      }
    }   
     return numeros
  }


*/