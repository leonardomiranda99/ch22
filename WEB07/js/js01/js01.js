console.log("Sesión js0102");
/* son 7 datos primitivos e JavaSdcript
-string ("hola mundo")
-number (1800.22)
    |los numeros se utilizan 64 bits para almanecarlo 
    |pero, solo se usan 53 bits para representar el número
-bigInt (1800n) 
    |convertir un dato numerico a bigInt
    |let bigIntVar = BigInt(maxNumber);
    |bigIntVar +1n
-boolean (true / false)
-Undefined ( undefined )
    |un tipo de dato no se define, solo se declara
-Null
    |intencionalmente se borra el tipo de dato.
-Symbol

tipos de datos object
-Object
    |const myObject{}
-Array
    |const myArray =[];

Funciones


*/
let myObject ={clave: "valor", edad: 18, 5:5};
console.log(myObject.edad);
console.log(myObject['edad']);
const propiedad ='edad';
console.log(myObject[propiedad]);
console.log(myObject['5']);

//conversiones de datos de string a number
/*
parseInt
parseFloat
*/
//(1025).toString



