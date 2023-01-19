console.log('conectado');

const refFormulario = document.forms['registro'];

refFormulario.addEventListener('submit', (event)=>{
    event.prevenDefault();
    console.log('Evento submit activado')
    const email = refFormulario.elements['inputEmail4'].value;
    console.log(email);
})