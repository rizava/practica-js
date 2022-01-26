//entradaj
//let nombre = 'ricardo'
//let apellido = 'zarate varela'



//console.log(`${nombre} ${apellido}`)
//let num1 = 1;
//let num2 = -10;

// if else - si - entonces

// es igual y del mismo tipo ===
// es igual ==
// menor o igual <=
// mayor o igual >=
// no es igual (incluyendo el tipo) !==
// no es (no toma en cuenta el tipo) !=


/*

let num = 5

if(num % 2 == 0) {
  console.log('es par');
} else {
   console.log('es impar');
}*/

//numero primo
/*
function isPrimeNum(num){
  for (var i = 2; i < num; i++) {
      if (num%i==0){
          return false;
      }
  };
  return true;
}
*/


//1. Debe construir un algoritmo que me diga si un numero es positivo o negativo
let numero = -0;

if(numero === 0){
    
  console.log("Cero");
  
}else if(numero > 0) {
    
  console.log("Positivo");
  
}else{
    
  console.log("Negativo");
  
}

/*2. Debe construir un algoritmo que me imprima cuando el numero cumpla una de las siguientes condiciones

Si el numero es mayor que 5
Si el numero es 0
Si el numero es menor que 5 y mayor a 3
Si el numero es mayor que 10 y menor que 60
Si el numero es menor a
si el numero es menor a 3 y no es 0
si el numero es menor que 0 */

let num = 0;

if (num > 5){
  console.log(`El numero ${num} es mayor que 5.`)
}
if  (num === 0){
  console.log(`El numero ${num} es igual a cero.`)
}
if (num < 5 && num > 3){
  console.log(`El numero ${num} es menor que 5 y mayor 3.`)
}
if (num > 10 && num < 60){
  console.log(`El numero ${num} es mayor que 10 y menor que 60.`)
}
if (num > 3 && num == 0){
  console.log(`El numero ${num} es menor a 3 y no es 0.`)
}
if (num > 0){
  console.log(`El numero ${num} el numero es menor que 0.`)
}else{'El numero no cumple ninguna de las condiciones anteriores'}


let numero = 12345;
if (numero != integer){
  console.log('El caracter ingresado no es valido')
}


/* 3. Debe construir un algoritmo que permita identificar cual es el ultimo digito de cualquier numero */
let nume = 1234;
let dos = nume %10;
console.log(`El ultimo numero de ${nume} es ${dos}. `)

