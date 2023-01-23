console.log('conectado');

const myPromise = new Promise( (resolve ,reject) =>{
    const isOnline = true;

    if (isOnline)
        resolve('Promesa resuelta, está en linea');
    else
        reject('promesa Rechazada, está fuera de linea');
} );
console.log('antes de la promesa');
//console.log( myPromise);
//myPromise.then( (response)=>{} ).catch( (error)=>{} );
myPromise
.then( (response)=>{
console.log(response)
}  )
.catch( (error)=> {
console.log(error);
}  );

console.log('Despues de la promesa');

//Pomesa de enviar un arreglo y multiplicar sus elementos por 2;
// [2, 5, 7] => [4, 10, 14] => [10 , 14]
/*
const datos = [2, 5, 7];
const datosDuplicados = datos.map( element => element * 2);
const datosFiltrados = datosDuplicados.filter( number => number>5);
console.log(datosDuplicados);
console.log(datosFiltrados);
const procesoReducido = datos.map( element => element * 2).filter( number => number>5)
console.log(procesoReducido);
*/

const filtrarArreglo = ( datos ) => {
     const solucion = new Promise((resolve, reject) => {
        const procesoReducido = datos
            .map( element => element * 2)
            .filter( number => number>5)
        if (procesoReducido.length)
            resolve (procesoReducido)
        else
            reject('Tu arreglo no contiene numeros mayores a 5')
    })
    return solucion;
}

filtrarArreglo( [10,7,15] )
    .then(response=> console.log(response) )
    .catch(error=> console.log(error) );

    //Consumiendo las promesas con .then y .catch
function filtrarConPromesas(){
    filtrarArreglo( [4,2,7] )
    .then(response=> console.log(response) )
    .catch(error=> console.log(error) );

    filtrarArreglo( [10,7,15] )
    .then(response=> console.log(response) )
    .catch(error=> console.log(error) );
}
filtrarConPromesas();

//consuminendo las promesas con Async y Await
async function filtrarPromesaConAwait(){
    console.log('funcion con async y await');
    console.log( await filtrarArreglo([2,4,7,10]) );
    console.log('termina la funcion con syn y await');
}
filtrarPromesaConAwait();

async function filtrarPromesaConAwaitTryCatch(){
    try{
        //En este bloque se tratará de resolver la promesa
        console.log("Función con async y await, con try y catch");
        console.log( await filtrarArreglo([1,0,1,2]) ); 
        
    }
    catch(error){
        //En este bloque se tratará el reject que genere la promesa
        console.log("nooo, se va a acabar el mundo")
        console.warn(error);
    }
    finally{
        console.log("Termina la función con async y await");
    }
}
filtrarPromesaConAwaitTryCatch();
