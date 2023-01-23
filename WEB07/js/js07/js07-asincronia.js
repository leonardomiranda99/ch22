console.log('conectado');

const introduccion = () =>{
    console.log('01-Bienvenidos y bienvenidas a CH22');
}

const desarrollo = () => {
    console.log('02-Pasele a lo barrido');
}
let idSetInterval;
const desarrolloAsincrono = () =>{
    setTimeout( () => console.log('Asincrono - Pásele'), 2000);
}

const stopIntervalAsincrono = () =>{
    setTimeout ( ()=> {
        console.log("Se detiene el intervalo");
        clearInterval(idSetInterval);
    } , 10_000 );
    
}


const setIntervalAsincrono = (delay=2000) =>{
    let contador = 0;
    idSetInterval = setInterval(()=> console.log(`Rockstar ${++contador}`), delay );
}

const despedida = () => {
    console.log('03.-ay nos vidrios, nos vicenteamos luego');
}

introduccion();
desarrollo();
despedida();

introduccion();
desarrolloAsincrono(2000);
desarrolloAsincrono(6000);
setIntervalAsincrono(2000);
stopIntervalAsincrono();

despedida();


const refStartInterval = document.getElementById('start-interval');
const refStoptInterval = document.getElementById('stop-interval');

let idCounter;
refStartInterval.addEventListener('click', (event)=>{
    console.log(event);
    let counter=0;
    refStartInterval.disabled = true;
    refStoptInterval.disabled = false;
    idCounter = setInterval( ()=>console.log(`Contador ${++counter}`), 1000 );
} );
function stopCounter(event){
    console.log(event);
    console.log("Se detiene el contador");
    clearInterval(idCounter);
    refStartInterval.disabled = false;
    refStoptInterval.disabled = true;
}

