console.log('conectado')
function  obtenerDiaLaboral(){
let dia = document.getElementById("dia").value
let mes = document.getElementById("mes").value
let año = document.getElementById("año").value
obtenerDiaLaboral = new Date()

document.getElementById("resultado").value = obtenerDiaLaboral
}
console.log(obtenerDiaLaboral);

let calcul = document.getElementById("calcul");
  calcul.addEventListener("click",obtenerDiaLaboral,true);

