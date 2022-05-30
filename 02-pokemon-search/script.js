const BASE_API_URL = " https://pokeapi.co/api/v2/"


document.querySelector("#btnSearch")
 .addEventListener('click',async function(){
    let pokemon = document.querySelector("#txtPokemon").value
     let url = `${BASE_API_URL}pokemon/${pokemon}`
     let response = await axios.get(url)
     console.log(response.data)
     document.querySelector('#result')
     .innerHTML = `
         <h1>${response.data.name}</h1>
         <img src="${response.data.sprites.other["official-artwork"].front_default}">
         <ul>
             <li>Base experience: ${response.data.base_experience}</li>
             <li>Weight: ${response.data.weight}</li> 
         </ul>
     `
})

// async function run(){
//     // endpoint url
//     let url = BASE_API_URL + "pokemon/pikachu"
//     console.log(url)

//     let response = await axios.get(url)
//     console.log(response.data)
//     console.log(response.data.base_experience)
// }

run()