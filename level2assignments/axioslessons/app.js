// To use Axios on the front-end vs with node, just use the cdn.<script src="https://unpkg.com/axios/dist/axios.min.js"></script>

const axios = require("axios");

// axios.get('https://swapi.dev/api/people/1a').then(response => {
//     console.log(response)
// }).catch(error => {
//     console.log("an error has occured")
// })

// const cleanToDo = {
//     title: "Clean your d*mn room"
// }

// axios.delete('https://api.vschool.io/morganw/todo/62c4a00c18d1a05bceae5c0f').then(response => {
//     console.log(response.data)
// }).catch(error => {
//     console.log(error)
// })

axios.get("https://api.vschool.io/morganw/todo/62c49fe018d1a05bceae5c0d")
    .then(response => console.log(response.data))
    .catch(error => console.log(error))