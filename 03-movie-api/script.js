
// const API_KEY = "1891b5a6"
// const BASE_API_URL = "https://www.omdbapi.com/"


// document.querySelector("#btnSearch")
//  .addEventListener('click',async function(){
//     let pokemon = document.querySelector("#txtPokemon").value
//      let url = `${BASE_API_URL}pokemon/${pokemon}`
//      let response = await axios.get(url)
//      console.log(response.data)
//      document.querySelector('#result')
//      .innerHTML = `
//          <h1>${response.data.name}</h1>
//          <img src="${response.data.sprites.other["official-artwork"].front_default}">
//          <ul>
//              <li>Base experience: ${response.data.base_experience}</li>
//              <li>Weight: ${response.data.weight}</li> 
//          </ul>
//      `
// })

const API_KEY="1891b5a6";
const BASE_API_URL="https://www.omdbapi.com/";

async function run(){
    // let url = BASE_API_URL+"?apikey="+API_KEY+"&s=the lord of the rings";
    let url = `${BASE_API_URL}?apikey=${API_KEY}&s=the lord of the rings`;
    console.log(url);
    let response = await axios.get(url);
    console.log(response.data);
}
run();