//Trabajo Practico 1 CJS Avanzado 
/*
1) SUMA DE ELEMENTOS DE UN ARRREGLO: Escribir una funcion que utilice reduce() para multriplicar
 todos los elementos de un arrelgo de numeros.
*/

function sumar(array) {

    let suma = array.reduce((numeros, total) => numeros + total, 0);

    return suma;

}

let numeros = [4, 8, 1, 2, 5, 6];
let resultado = sumar(numeros);
console.log(resultado);

/* 2.Multiplicacion de elementos en un arreglo:
Crea una funcion que utilice reduce() para multiplicar todos los elementos de un arreglo de
npmeros.
 */

function multiplicar(array) {

    return array.reduce((resultado, numero) => resultado * numero, 1);
  }
  
  let numeros2 = [1, 2, 3, 4, 5];
  let resultado2 = multiplicar(numeros2);
  console.log( resultado2);

  /* 3.Concatenacion de cadenas:
Implementa una funcion que use reduce() para concatenar todos los elementos de un
arreglo de cadenas en una sola cadena. */

function concatenarCadenas(array) {
    // Utiliza reduce para concatenar las cadenas del arreglo
    return array.reduce((resultado3, cadenas) => resultado3 + cadenas, '');
  }
  let cadenas = ["Hola, ", "esto es ", "una ", "concatenación."];
  let resultado3 = concatenarCadenas(cadenas);
  console.log(resultado3);
  
  /* 4.Calcular el promedio:
Escribe una funcion que use reduce() para calcular el promedio de un arreglo de numeros */

function calcularPromedio(array) {
    // Utiliza reduce para sumar todos los numeros en el arreglo
    const suma = array.reduce((total, numero) => total + numero, 0);
  
    // Calcula el promedio dividiendo la suma por la cantidad de elementos en el arreglo
    const promedio = suma / array.length;
  
    return promedio;
  }
  let numeros4 = [3, 5, 7, 9, 11];
  let resultado4 = calcularPromedio(numeros4);
  console.log(resultado4);

  /* 5.Encontrar el valor maximo:
Crea una funcion que utilice reduce() para encontrar el valor maximo en un arreglo de
numeros.
*/

function encontrarValorMaximo(arreglo) {
    // Utiliza reduce para encontrar el valor máximo en el arreglo
    const maximo = arreglo.reduce((max, numero) => (numero > max ? numero : max), arreglo[0]);
  
    return maximo;
  }
 
  let numeros5 = [3, 8, 2, 10, 5];
  let resultado5 = encontrarValorMaximo(numeros5);
  console.log(resultado5);
  
  /* 6.Contar ocurrencias:
Escribe una funcion que cuente cuantas veces aparece un elemento especifico en un
arreglo utilizando reduce().
 */

function contarOcurrencias(arreglo, elemento) {
    // Utiliza reduce para contar las ocurrencias del elemento en el arreglo
    const conteo = arreglo.reduce((contador, valor) => (valor === elemento ? contador + 1 : contador), 0);
  
    return conteo;
  }

  let numeros6 = [2, 4, 2, 6, 2, 8, 2, 10];
  let elementoBuscado6 = 2;
  let resultado6 = contarOcurrencias(numeros6, elementoBuscado6);
  console.log(`El elemento ${elementoBuscado6} aparece ${resultado6} veces en el arreglo.`);
  
  /* 7. Ordenar palabras por longitud:
Crea una funcion que ordene un arreglo de palabras por su longitud, es decir, la cantidad de
caracteres.
EJEMPLO :
[CASA, OSO, PELOTA] el resultado deberia ser [oso, casa, pelota]
*/ 

function ordenarPorLongitud(arreglo) {
    // Utiliza sort() para ordenar el arreglo por longitud de palabras
    arreglo.sort((a, b) => a.length - b.length);
  
    return arreglo;
  }
  let palabras7 = ["CASA", "OSO", "PELOTA"];
  let resultado7 = ordenarPorLongitud(palabras7);
  console.log(resultado7); // Resultado: ["OSO", "CASA", "PELOTA"]

/*  8. Busqueda de un elemento en un arreglo:
Escribe una funcion que busque un elemento especifico en un arreglo y devuelva true si se
encuentra o false si no se encuentra.
*/

function buscarElemento(arreglo, elemento) {
    // Utiliza el método includes() para verificar si el elemento está en el arreglo
    return arreglo.includes(elemento);
  }
  
  let miArreglo = [1, 2, 3, 4, 5];
  let elementoBuscado8 = 3;
  let resultado8 = buscarElemento(miArreglo, elementoBuscado8);
  
  if (resultado8) {
    console.log("El elemento se encuentra en el arreglo.");
  } else {
    console.log("El elemento no se encuentra en el arreglo.");
  }

  /* 9. Busqueda de la primera coincidencia:
Implementa una funcion que busque la primera instancia de un elemento en un arreglo y
devuelva su indice. Si el elemento no esta en el arreglo, devuelve -1.
*/

function buscarPrimeraCoincidencia(arreglo, elemento) {
    // Utiliza el método indexOf() para buscar la primera instancia del elemento
    const indice = arreglo.indexOf(elemento);
    return indice;
  }
  let miArreglo9 = [10, 20, 30, 40, 50];
  let elementoBuscado9 = 30;
  let indiceEncontrado = buscarPrimeraCoincidencia(miArreglo9, elementoBuscado9);
  
  if (indiceEncontrado !== -1) {
    console.log(`El elemento se encuentra en el índice ${indiceEncontrado}.`);
  } else {
    console.log("El elemento no se encuentra en el arreglo.");
  }

/* 10. Búsqueda de la última coincidencia:
Crea una función que busque la última instancia de un elemento en un arreglo y devuelva
su índice. Si el elemento no está en el arreglo, devuelve -1. */ 

function buscarUltimaCoincidencia(arreglo, elemento) {
    // Utiliza el método lastIndexOf() para buscar la última instancia del elemento
    const indice = arreglo.lastIndexOf(elemento);
    return indice;
  }
  
  let miArreglo10 = [10, 20, 30, 20, 40, 50];
  let elementoBuscado10 = 20;
  let indiceEncontrado10 = buscarUltimaCoincidencia(miArreglo, elementoBuscado10);
  
  if (indiceEncontrado10 !== -1) {
    console.log(`El elemento se encuentra en el indice ${indiceEncontrado10}.`);
  } else {
    console.log("El elemento no se encuentra en el arreglo.");
  }
  