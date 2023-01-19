console.log("sesion js06");
const enctrarElementsById = () =>{
    const element = document.getElementById("titulo");
    //console.log("Datos del objeto: ",element);
    console.log("Entre las etiquetas" + element.innerHTML)
    
    //element.innerHTML += "Manipulasion del DOM";
    // Con innerHtml puedo agregar nuevas etiquetas
    const nombreDesarrolador = "Sergio"; 
    element.innerHTML += ` Manipulasion del <strong>DOM</strong> por ${nombreDesarrolador}`;
}
enctrarElementsById();
/*
const obtenerNombre = () => prompt("Escribe tu nombre , sergio");
const desarroladorNombre = obtenerNombre();
element.innerHTML += ` Manipulasion del <strong>DOM</strong> por ${desarroladorNombre}`;
*/

const encontrarElementosByTagName = () =>{
    const elements = document.getElementsByTagName("p");
const [introRef]= document.getElementsByTagName("p");

    //obtenemos el indice 0
    //const introRef = elements[0].innerHTML;
    //modificamos el contenido de introRef
    console.log(introRef.innerHTML);
    introRef.innerHTML = "Las <strong>quesadillas</strong> van con <em>queso</em>, es un hecho"
}
encontrarElementosByTagName ();


const encontrarElementos = (nuevoColor) =>{
    const elementos = document.getElementsByTagName("em");
    for (let element of elementos)
    element.style.color = nuevoColor;
}
encontrarElementos ("blue");

const diferenciaInnerHtmlInnerText = () =>{
    const element = document.getElementById('titulo');
    console.log(element.innerHTML);
    console.log(element.innerText);
}
diferenciaInnerHtmlInnerText();

const encontrarElementosByClassName = () => {
    const elements = document.getElementsByClassName('subtitulo'); //contiene una colección 
    for (let element of elements)
    console.log(element.innerHTML);    
}

//El secttor universal 

const encontrarElementoByQuerySelector = () =>{
    const element = document.o s
}
