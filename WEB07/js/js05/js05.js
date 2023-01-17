console.log("conectado")

//Operador de asignacón
let estadoDiminutoDeMexico = "tlaxcala";
{
    {
        let espaniol = ingles = rumano = turco = vasco = chino = true;
    
    }
    console.log("Francisco habla ingles = " + ingles);
    console.log("Francisco habla rumano = " + rumano);
    console.log("Francisco habla turco = " + turco);
    console.log("Francisco habla vasco = " + vasco);
    console.log("Francisco habla chino = " + chino);
    // console.log("Francisco habla español = " + espaniol); esta marca error esta afuera 
    
}

//Operadores aritmeticos 
//multiplicación 
let metrosCuadrados = 10 * 30; //300;
// tenemos 2 terrenos
//metros cuadrados = metrosCuadrados *2; 
//Operadores simplificados
metrosCuadrados *= 2;
console.log("m2 de terreno " + metrosCuadrados);
//diisión
//dividimos el terreno entre 3 hijos 
metrosCuadrados /= 3;
console.log("m2 de 3 tererenos " + metrosCuadrados);

//residuo %
//Quiero saber si los metrosCuadrados son multiplo de dos 2
let esMultiplo2 = metrosCuadrados % 2 === 0 ? "Sí": "No";
console.log("La cantidad es multiplo de 2? " + esMultiplo2);

//Resta
const precioTerreno = 90000
let precioM2 = 90000/300;
console.log("Precio del metro cuadrado: " + precioM2 + " pesitos");

let cantidadPagada = 30000
let cantidadRestante = precioTerreno - cantidadPagada;
console.log("Te falatan " + cantidadRestante + " pesitos")

//suma
//cobro por la generaci'on de escrituras (8% costo terreno)
//const costoEscrituras = precioTerreno * 0.08;
//precioTerreno =+ costoEscrituras;
//console.log("Terrenos + escrituras $" + precioTerreno);

//concatenacion string 
let nombre = "Alan";
nombre +=  "García";
console.log ( "Nombre personas ch 22: " + nombre);

//Operadores de incremento y decremento 
// preincremento ++varible , postincremento variable++
// predecremento --variable, postdecrmento variable--

let numClavosParaMiCasa = 100;
numClavosParaMiCasa++;
console.log("num. de clavos: " + numClavosParaMiCasa);
++numClavosParaMiCasa;
console.log("Num. de clavos: " + numClavosParaMiCasa);
console.log("Num. de clavos: " + numClavosParaMiCasa++);
//---------------------------------------------------------------------------

let respuestasExamen = 95;
//Agregamos punto extra
console.log("Resultado final: " + respuestasExamen++)

respuestasExamen= 82;
do{
    console.log("Resultado10: " + respuestasExamen);
} while ( respuestasExamen ++ <= 100);
console.log("Resultado final: " + respuestasExamen);

let nivelsueño = 99;
if (++nivelsueño === 100) console.log("Me voy a mimir en la sesión");

// preincremento
let x = 10;
x = x+1;
console.log(x);

//postincremento
let y =10
console.log(y);
y=y+1

x=3 
y= x++
console.log (`x:${x} y:${y}`);

x = 3;
y = ++x;
console.log (`x:${x} y:${y}`);

//Operadores relacionales
/**
 * <= menor o igual que
 * >= mayor o igual que
 * > mayor que
 * < menor que
 */
let numPerfumes = 10;
if( numPerfumes > 10 ) console.log("Que elegancia la de francia");

//Operadores de igualdad: 
/**
 * == operador igual
 * ===estrictamente igual
 * != diferente que
 * !=== estrictamente diferente que
 */
let numMatriculaPavel = "1025";
if (numMatriculaPavel == 1025)console.log("Pavel esta aprobado ");
if (numMatriculaPavel === 1025)console.log("Pavel esta en nivel fase 5 ");
if (numMatriculaPavel >= 1025)console.log("Pavel esta en CUCEI ");

//Operadores lógicvos
// $$ (AND) || Or
let numRebosos = 3
let teGustReboso = true;
let vivesEnElExtranjero = true; 
if( numRebosos > 5 || teGustReboso) console.log("Te regalo un reboso de oaxaca");

if (numRebosos> 5 || teGustReboso & vivesEnElExtranjero)
console.log("Te vendo mi reboso en dolares ");

//Operadores de corto circuito 
// OP1 && OP2 SI OP1 = true, se realiza el resultado de OP2
let online = true;
let mensaje = "Esstamos en linea";
let respuesta = online && mensaje;
console.log("Respuesta: " + respuesta);

let edadPersona = 18;
mensaje = "Puede votar"
console.log("La persona puede votar? " + edadPersona >=18 && mensaje );

let isOnline = true;
let isActive = true;

if(isOnLine){
    if (isActive)
        console.log("Estamos in");
}
if(isOnline && isActive)
    console.log("Estamos in");
    isOnline && isActive && console.log();

