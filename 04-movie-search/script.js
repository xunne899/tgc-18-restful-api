const API_KEY="1891b5a6";
const BASE_API_URL="https://www.omdbapi.com/";

// async function run(){
//     // let url = BASE_API_URL+"?apikey="+API_KEY+"&s=the lord of the rings";
//     let url = `${BASE_API_URL}?apikey=${API_KEY}&s=the lord of the rings`;
//     console.log(url);
//     let response = await axios.get(url);
//     console.log(response.data);
// }
// run();

// document.querySelector("#btnSearch").addEventListener('click', async function(){
//     let title = document.querySelector('#txtTitle').value;
//     let url = `${BASE_API_URL}?apikey=${API_KEY}&s=${title}&type=movie`;
//     let response = await axios.get(url);
//     for (let movie of response.data.Search) {
//         document.querySelector('#results').innerHTML += `
//             <li>
//                 <img src="${movie.Poster}"/>
//                 ${movie.Title} (${movie.Year})
//             </li>
//         `
//     }
// });

document.querySelector("#btnSearch")
    .addEventListener('click', async function(){
        let title = document.querySelector('#txtTitle').value;
        // the second arg to axios.get is an options object
        // we can pass in params object as part of the options
        // and axios will build the query string from there
        let response = await axios.get(BASE_API_URL,{
            'params': {
                'apikey': API_KEY,
                's': title,
                'type': 'movie'
            }
        });
        console.log(response);
        for (let movie of response.data.Search) {
            document.querySelector('#results').innerHTML += `
                <li>
                    <img src="${movie.Poster}"/>
                    ${movie.Title} (${movie.Year})
                </li>
            `
        }
    })