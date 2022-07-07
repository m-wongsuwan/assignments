// function getData(url, callback) {
//     const xhr = new XMLHttpRequest
//     xhr.onreadystatechange = function() {
//         if (xhr.readyState === 4 && xhr.status === 200){
//             const jsonData = xhr.responseText
//             const data = JSON.parse(jsonData)
//             return callback(data)
//         }
        
//     }

//     xhr.open("GET", url, true)
//     xhr.send()
// }

// getData("https://pokeapi.co/api/v2/pokemon", function(pokemonData) {
//     for (let i = 0; i < pokemonData.results.length; i++) {
//         const h1 = document.createElement("h1")
//         h1.innerText = pokemonData.results[i].name
//         document.body.appendChild(h1)

//         getData(pokemonData.results[i].url, function(pokeObj) {
//             console.log("h1")
//             const li = document.createElement("li")
//             li.innerText = pokeObj.types[0].type.name
//             document.body.querySelectorAll("h1")[i].append(li)
//         })
//         // console.log(pokemonData.results[i].name)
//     }
// })

async function getData() {
    const pokeResponse = await fetch("https://pokeapi.co/api/v2/pokemon")
    const pokeData = await pokeResponse.json()
    return pokeData
}

getData()
    .then(pokeData => {
        for (let i = 0; i < pokeData.results.length; i++) {
            document.body.innerHTML += "<h1>" + pokeData.results[i].name + "</h1>"
        }
    })