// function getData(url, callback) {
//     const xhr = new XMLHttpRequest
//     xhr.onreadystatechange = function() {
//         if (xhr.status === 200 && xhr.readyState === 4) {
//             const jsonData = xhr.responseText
//             const data = JSON.parse(jsonData)
//             return callback(data)
//         }
//     }
//     xhr.open("GET", url, true)
//     xhr.send()
// }

// getData("https://swapi.dev/api/people/1", function(lukeData) {
//     getData(lukeData.homeworld, function(lukeHomeworld) {
//         console.log(`${lukeData.name} is from ${lukeHomeworld.name}`)
//     })
// })

// function getData(url) {
//     return fetch(url)
//         .then(function(response) {
//             return response.json()
//     })
// }

// getData("https://swapi.dev/api/people/1")
//     .then(function(lukeData) {
//         getData(lukeData.homeworld)
//             .then(function(lukeHomeworld) {
//                 console.log(lukeHomeworld.name)
//             })
//     })

// function getData(url) {
//     return fetch(url)
//         .then(response => response.json())
// }

// getData("https://swapi.dev/api/people/1")
//     .then(function(lukeData) {
//         getData(lukeData.homeworld)
//             .then(function(lukeHomeworld) {
//                 console.log(lukeHomeworld.name)
//             })
//     })

async function getData() {
    const lukeResponse = await fetch("https://swapi.dev/api/people/1")
    const lukeData = await lukeResponse.json()
    console.log(lukeData.homeworld)

    const planetResponse = await fetch(lukeData.homeworld)
    const planetData = await planetResponse.json()
    console.log(planetData.name)

    lukeData.homeworld = planetData.name

    return lukeData
}

getData()
    .then(lukeData => console.log(lukeData))