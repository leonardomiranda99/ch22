console.log('conectado');

const getUsers = () => {
    const url = '' ;

    fetch('https://reqres.in/api/users?page=2')
        .then( response=>{ 
            console.log('status:' +  response.status)  
            return response.json();
        })
        .then(data=>{
            console.log(data);
        })
        .catch( error => console.log(error));

}
const btnFetchApiPost = document.getElementById("fetch-api-post");
btnFetchApiPost.addEventListener('click', ()=>{

    const url = 'https://reqres.in/api/users';
    const data = {
        name: "Aurelio",
        job: "Obrero"
    };
    
    fetch(url, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .then(response => console.log('Success:', response))
    .catch(error => console.error('Error:', error));

});
<button id="fetch-api-post"> Solicitud Post</button>


