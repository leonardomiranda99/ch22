console.log("Sesión JS02");
/*
funciones declaradas    / funciones definidas
(function declaration   / function statment) 
una caracteristica de la funciones declaradas es que tienen hoisting (elevación).

*/
function multiplica (a,b){
    return a* b;
}
console.log("El resultado de 5 * 10= " + multiplica(5,10));

/*
Funciones expresadas

Las dunciones expresadas (function expressions) son funciones que son declaradas dentro de la asignación de una variable

Estas funciones pueden ser anonimas ( no tienen nombre).
Las funciones epresadas no tienen hosting.

*/

/**
 * suma dos valores
 * @param {number} a primero operador para sumar
 * @param {number} b segundo operador para sumar
 * @returns resultado de a + b; 
 */
const suma = function (a , b) {
    const result = a + b;
    return result;
};
console.log("La sumatoria de 4 + 6 = " + suma(4 , 6));

/*
Funciones autoinvocadas ( self-invoking functions)
Son funciones que se ejecutan en su definicion 
Pueden ser anonimas. 

*/

( function saludo (){
    console.log("Hola, me estoy autoinvocando");
})();

/*
funcion flecha 

Una funcion flecha (arrow functions) son similares a la funciones expresadas, pero no requiere la palabra
function. ademas, si solo tiene una instrucción y es el retorno, n requiere la instruccion return y las llaves {}

Las funciones flechas no tienen hosting
*/

const restaExpresada = function (a  ,b){
    return a-b
} 
const resta = (a , b) => a -b;
console.log("La resta de 20 - 2 = " + resta(20,2));
 
const exponente = (a , b) =>{
    const result = a ** b;
    return result;
}
console.log("El numero 4^2 = " + exponente(4,3));

const exponenteAlCuadrado = a => a ** 2;
console.log("El número 4^2 = " + exponenteAlCuadrado(4));

const imprimeSaludo =() => console.log("holi crayoli");
imprimeSaludo();
/*
Funciones con parametros inicializados

*/
function divide (a=1 , b=1){
    return a/b;
}
console.log("la división de 3/1 = " + divide ());
/* Rest Parameters 
El parámetro rest nos permite represtentar una serie de valores indefinidos en los argumentos como un arrat

El parámetro rest siempre debe ir al final de todoa los parametros

*/
function sumatoriaIndefinida (a, b, ...restoDatos){
    let sumatoria = a + b;
    for(let i = 0;i < restoDatos.length; i++){
        sumatoria += restoDatos[i]; //SUMATORIA = SUMATORIA + RESTOdATOS[1];
    }
    return sumatoria;
}
console.log("sumar varios numeros: " + sumatoriaIndefinida(2, 3, 5, 10, 11));

/*
Funciones recursivas
función recursiva es una función que se llama a si misma.
*/
 // factorial de 0 = 1
 // factorial de 3 = 3 *2 *1;
 //Factorial de 5 = 5 * 4 * 3 * 2 * 1;

 function factorialConCicloFor (a,b, ...restoDatos){
   let total = 1
   for(i = 1; i <= a; i++){
    total *= i;
   }
   return total
}
function factorialConRecursion (a){
    if(a < 1) return 1;
    return a * factorialConRecursion (a - 1)
}
console.log("Factorial 3 = " + factorialConCicloFor(3));
console.log("Factorial 3 = " + factorialConCicloFor(5));
console.log("Factorial 3 = " + factorialConRecursion(3));
console.log("Factorial 3 = " + factorialConRecursion(5));