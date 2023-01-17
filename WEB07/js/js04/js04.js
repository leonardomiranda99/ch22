console.log("funcionando");

//Array
const nombresCH22 = ["Manuel", "Leonardo", "Melani"];
//Usando el constructor de la clase Array
const nombresCH14 = new Array ("Abue", "Cori", "Maga", "Sebas");

console.log(nombresCH22);
console.log(nombresCH14);

const promedioEdadesCH22 = [25];
const promedioEdadesCH14 = new Array (24);
console.log(promedioEdadesCH22);
console.log(promedioEdadesCH14);
//Conocer la longitus de un arreglo es con .lenght
console.log(`Num de elementos ${promedioEdadesCH22.length}`);
console.log(`Num de elementos ${promedioEdadesCH14.length}`);
//Se recomienda declarar los array( objetos ) con const
//para prevenir que se cambie el tipo de dato 
const armasCh22 =["manopla", "picahielo"]; 
//armasCh22 = "filero"; ////typeof (armasch22) objetos
console.log ("listas de armas: " + armasCh22);

//Agregar elementos a nuestro arreglo 
console.log (`Jesica tiene un ${armasCh22[1]}`);
console.log (`Leo  tiene una ${armasCh22[0]}`);
 
armasCh22[0] = "Filero"
console.log (`Leo  tiene un ${armasCh22[0]}`);

let nombreClica = "Los Wichales";
console.log (`La variable ${nombreClica} comienza con la letra ${nombreClica[0]}`);

nombreClica [0] = "T" //No cambia, porque u string es un
 //dato primitico, que es inmutable 
console.log (`La variable ${nombreClica} comienza con la letra ${nombreClica[0]}`);
//the wichales 
nombreClica = "The Wichales ";
console.log (`La variable ${nombreClica} comienza con la letra ${nombreClica[0]}`);

//Agregamos un nuevo dato al arreglo final 
armasCh22[2] = "machete"; 
armasCh22[armasCh22.length]= "macana";
armasCh22.push("Cadena")

console.log("Actualizacion de armas: " + armasCh22)

//Agregar un elemento al inicio
armasCh22.unshift("navaja", "desarmador", "bat");
console.log("Actualizacion de armas: " + armasCh22)

//ciclo for
/*
sintaxis
    for(Instruccion Inicio comparacion, expresión final) instrucción    

     for(Instruccion Inicio; comparacion; expresión final) {
        instrucciónes;
     }  

        for(let i = 0; i<10; i++) {
        instrucciónes;
        }
*/

//Iteramos los arreglos
for( let i = 0; i< armasCh22.length; i++){
    console.log(armasCh22 [i]);   
}


//armasch22.forEach ( callbackFunction)

function iterarArreglo (elemento, indice, arreglo){
    console.log(` cb Indice ${indice} tiene ${elemento} `);   
}

//armasCh22.forEach(iterarArreglo );
armasCh22.forEach((elemento, indice) =>  console.log(` cb Indice ${indice} tiene ${elemento} `) )

//va a iterar los indices del arreglo 
for (let arma in armasCh22)
console.log(`Forin ${arma} tiene ${armasCh22[arma]}`);

// va a iterar los elementos del arreglo
for (let arma  of armasCh22)
console.log(`ForOFF  arma: ${arma}`);

//iterar de forma descendente las armas.
for( let i = armasCh22.length -1; i>=0 ; i--) 
    console.log("Arma: " + armasCh22[i]);

    //Para el ciclo for no es necesario indicar en inicio, 
    //la comparacion, la expresion final 

    let iteracion = 0;
    for ( ; ; ){
        console.log('valor del i ' + iteracion);
        if (iteracion === 10)break;
        iteracion++;
    }

    //La instruccion break rompe con la iteracion.
    //La instruccion continue continua con la sig iteración

    for(let i=0;i<=10;i++){
        if(i===5 )break
        console.log('For con break: '+i)//0, 1, 2, 3, 4 
    }

    for(let i=0;i<=10;i++){
        if(i===5 )continue
        console.log('For con continue : '+i)// 0, 1, 2, 3, 4,          6, 7, 8, 9, 10
    }

    const participantes = [ 
    [ "Jose" , "Maria" , "Pedro" ], //CH1 fila 0
    [ "Tan" , "Javi" , "Andrea" , "santi" ],//CH2 Fila 1
    [ "Melanie" , "Pavel" ] //ch3 Fila 2
    ];
                                                    //Feliz cumpleaños 
                                                            //f   c
console.log("Persona ch 3(f2) 2a persona(c1) " + participantes[2][1] );
for(i = 0; i< participantes.length; i++){
        console.log(participantes[i])
        for (j = 0; j < participantes[i].length; j++){
        console.log(participantes[i][j]);
        }
}

//Usando break en ciclos anidados 
//Dejar de usar lso nombres, cuando se encuentre a tam 

//Usando una variable como bandera
let continuarIteraciones = true;
for (fila = 0 ; fila< participantes.length; fila++){
    if( continuarIteraciones){
        for (columna = 0 ; columna< participantes[fila].length ; columna++ ){
            console.log(`[${i}][${j}]`)
            if ( continuarIteraciones)
                console.log("Uso de break " + participantes[fila][columna] );
            if ( participantes[fila][columna] === "Tan") continuarIteraciones= false;
        }
    }   
}

//CICLO WHILE
/*
sintaxis:
while (condicion:verdadera) intrucción;

while (condicion_verdadera){
    instrucciones;
}
*/

/*
while false //(confirm( "¿Quieres seguir iterando?"));
console.log("Iteracion n. " + numIteracion);
*/
/*
let numIteracion = 1;
while (confirm( "¿Quieres seguir iterando?")){
if(numIteracion === false ) break;
console.log("Iteracion n. " + numIteracion++);
}
*/


let valor = 0;
while ( valor<5){
 console.log("while "+ valor);
 valor++;
}

valor = 0;
do{
    console.log("do while " + valor);
    valor++;
} while(valor < 5);

/*
FIFO first inoput first output
LIFO last input first output
*/

const alimentosPerecederos =[];
//Agregando una caja.
//usando fifo
alimentosPerecederos.push("Manzanas lunes");
alimentosPerecederos.push("Manzanas miércoles");
//sacando manzanas del lunes

console.log("Sacando a la venta " + alimentosPerecederos.shift());
console.log("Sacando a la venta " + alimentosPerecederos.shift());

//usando lifo
//Tenemos una ferreteria
const productos = ["desarmadores", "cemento"];
//agrego luces navideñas
productos.push("luces navideñas");
console.log("sacando a la venta " + productos.pop());
console.log("sacando a la venta " + productos.pop());
