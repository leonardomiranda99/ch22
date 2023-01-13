console.log("esta conectado")

const datosUsuario = {nombre:"jessica", ciudad: "cdmx"}
//declaración de bloque
{
    //esta es una declaracion de bloque en donde las variables declaradas (let, const)
    //solo tendran alcance dentro del bloque 0
    //bloque anidado dentro del bloque 
    //const datoEscuchando = 49;
    const datosUsuario = {nombre:"wicho", ciudad: "Aguascalientes"}
    console.log(`${datosUsuario.nombre} nos saluda de ${datosUsuario.ciudad}`);
}

console.log(`${datosUsuario.nombre} nos saluda de ${datosUsuario.ciudad}`);
// la variable datoescuchando no esta definida por lo que da error console.log(datoEscuchando)

  //condicionall if 
  /*sintaxis 
    if (condicionVerdadera) instruccion;
    else intrucción en caso contrario 
    
    if (condicionVerdadera) {
        instrucciones;
    }
    */
   const respuesta = true //confirm ("Te gusta shakira?");
   console.log (respuesta);
let mensaje;

   if(respuesta)
   mensaje =" entonces te pongo waka waka"
   else
   mensaje ="Entonces te pongo Su Chambelan"
   console.log(mensaje);


//Operador ternario. 
/* 
Sintaxis: condicion ? condicion_verdadera: condicion_ falsa;

*/
//let teamFrio = confirm("¿Te gusta el frio?");
//let mesnajeTernario = teamFrio ? "hielito" : "ponche" ;
//console.log(`Te voy a servir ${mesnajeTernario}`);
//console.log(`te voy a servir: ${teamFrio ? "hieito" : "ponche"}`);


let cantante = "leo"
console.log(`Tu reloj es ${cantante === `shakira` ? "Rolex" : cantante === "pique"? "Casio": "el sol"}`)

/*
    let marcaReloj;
    if( cantante === 'Shakira' ) marcaReloj = "Rolex";
    else{
        if( cantante === 'Pique') marcaReloj = "Casio"
        else marcaReloj = "el sol";
    }
    console.log(`Tu reloj es ${ marcaReloj})
*/

// condicional if, else , else if
/* sitaxis
if(condicion verdadera) instruccion;
else if (segunda condicion)istruccion 
else if (tercera condicion)istruccion 
else if (condicion n)istruccion
else instruccion; 

*/
let nombrePersona= `Karla`
let marcaReloj;
if( nombrePersona === 'Shakira' ) marcaReloj = "Rolex";
    else if( nombrePersona === 'Pique' || nombrePersona === 'Karla')
         marcaReloj = "Casio"
    else if( nombrePersona === 'Sergio') 
        marcaReloj = "El sol"
 
    else 
        marcaReloj = "uno de cars";

console.log(` ${nombrePersona} Tu reloj es ${ marcaReloj}`);


// operadores logicos and (&&) y or (||)
/*
AND
A       B  ->  C
 TRUE    TRUE   TRUE
 TRUE    FALSE  FALSE
 FALSE   TRUE   FALSE
 FALSE   FALSE  FALSE
 
 OR
 A       B  ->  C
 TRUE    TRUE   TRUE
 TRUE    FALSE  TRUE
 FALSE   TRUE   TRUE
 FALSE   FALSE  FALSE
 */

/*
condicional switch
Sintaxis: 
    switch (expresion){
        case valor1: 
            instrucciones; 
            break;
        caso calor2: 
            instrucciones;
            break;
        caso valorn:
            instrucciones; 
            break;
        defaul:
            intrucciones;
    }
*/
nombrePersona= 'Mon'
marcaReloj = '';

switch(nombrePersona){
    case 'shakira':
        marcaReloj = 'Rolex';
        break;
    case 'Pique':
    case 'Karla':
        marcaReloj = 'casio';
        break;
    case 'Sergio':
        marcaReloj = 'casio';
        break;
    case 'Mon':
            marcaReloj = 'ferrary';
            break;
    default:
        marcaReloj='uno de cars'
        
}
console.log (`switch - ${nombrePersona} tu reloj sera ${marcaReloj}`);

/*
    Preguntar el numero de mes del 1 al 12 
    de acuerdo al mes indicado desplegar en colola 
    la estacion del año :
    mes 12 ,1,2 invierno 
    mes 3,4,5 primavera
    mes 6,7,8 verano
    mes 9,10,11 otoño
*/

//let queMES = prompt ("Que mes es?");
//let mesEscrito = ''
//estacionAño = '';
/*
switch(queMES){
    case '1':
        mesEscrito = 'Enero';
        estacionAño = 'Invierno ';
        break;
    case '2':
        mesEscrito = 'Febrero';
        estacionAño = 'Invierno ';
        break;
    case '12':
        mesEscrito = 'Diciembre';
        estacionAño = 'Invierno ';
        break;
    case '3':
        mesEscrito = 'marzo';
        estacionAño = 'Primavera';
        break;
    case '4':
        mesEscrito = 'Abril';
        estacionAño = 'Primavera';
        break
    case '5':
        mesEscrito ='Mayo';
        estacionAño = 'Primavera';
        break;
    case '6':
        mesEscrito ='Mayo';
        estacionAño = 'Verano';
        break;
    case '7':
        mesEscrito = 'Junio'
        estacionAño = 'Verano';
        break;
    case '8':
        mesEscrito = 'Julio'
        estacionAño = 'Verano';
        break;
    case '9':
        mesEscrito = 'Semptiembre'
        estacionAño = 'Otoño';
        break;
    case '10':
        mesEscrito= 'Octubre'
        estacionAño = 'Otoño';
        break;
    case '11':
        mesEscrito='Noviembre'
        estacionAño = 'Otoño';
        break;
    default:
        estacionAño='ese mes no existe'
    
}
console.log (`switch - En el mes de ${mesEscrito} la estacion del año es ${estacionAño}`);
*/

let queMES = 12 //Number(prompt ("Que mes es?"));
let mesEscrito = ''
estacionAño = '';

if( queMES =='1' ) mesEscrito = "enero" ,estacionAño = 'Invierno';
    else if( queMES == '12'){
     mesEscrito = 'Diciembre'; estacionAño ='Invierno'
    }
    else if( queMES == '2'){
        mesEscrito = 'Febrero'; estacionAño ='Invierno'
       }
    else if( queMES == '3'){
        mesEscrito = 'Marzo'; estacionAño ='Primavera'
       }
    else if( queMES == '4'){
        mesEscrito = 'Abril'; estacionAño ='Primavera'
       }
    estacionAño = 'ese mes no existe'

console.log(` En ${mesEscrito} la estacion es ${estacionAño}`);


//---------Refactorizando
//function factorial( number ){
  //  if( number < 1) 
   //     return 1;
   // return number * factorial( number - 1 )
//}
//console.log("Factorial 5 = " + factorial(5) ); //120

//function factorialRefactor( number1)
//console.log( `Factorial de 5${number1 < 1 ? number1 * factorialRefactor(5)}`)

