// const newToDo = {
//     title: "Does death follow me, or peace",
//     description: "(i kill a lot)",
//     imgUrl: "https://images.unsplash.com/photo-1657116754973-402beba2f3f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
// }

// axios.post("https://api.vschool.io/morganw/todo/", newToDo)
//     .then(response => console.log(response.data))
//     .catch(error => console.log(error))
// axios.get("https://api.vschool.io/morganw/todo/")
//     .then(response => {
//         for (let i=0; i < response.data.length; i++) {
//         const h1 = document.createElement('h1')
//         h1.textContent = response.data[i].title
//         document.body.appendChild(h1)
//         }
//     }
// )

const toDoForm = document.toDoForm

toDoForm.addEventListener("submit", function(event){
    event.preventDefault()
    const newToDo = {
       title: toDoForm.title.value,
       description: toDoForm.description.value,
       imgUrl: toDoForm.imgUrl.value
    }

    axios.post("https://api.vschool.io/morganw/todo/", newToDo)
        .then(response => console.log(response.data))
        .catch(error => console.log(error))

})

// axios.delete("https://api.vschool.io/morganw/todo/62c6d60218d1a05bceae5c4f")
//     .then(response => console.log(response.data))
//     .catch(error => console.log(error))

const updatedTodo = {
    title: "This is my second to do item.",
    description: "I am just so terribly embarassed of the previous title"
}

axios.put('https://api.vschool.io/morganw/todo/62c4709218d1a05bceae5c01', updatedTodo)
    .then(response => console.log(response))
    .catch(error => console.log(error))