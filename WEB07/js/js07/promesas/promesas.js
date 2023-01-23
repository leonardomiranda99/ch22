
const dataFetchingAsyncAwait = async () =>{
    const {data} = await (await fetch("https://reqres.in/api/users?delay=3")).json()
    console.log(data)
}
dataFetchingAsyncAwait()

// USANDO FETCH CON PROMESAS

const dataFetchingPromises = ()=> {
    fetch("https://reqres.in/api/users?delay=3")
    .then((response) => response.json())
    .then(({data}) => console.log(data))
}
dataFetchingPromises() 