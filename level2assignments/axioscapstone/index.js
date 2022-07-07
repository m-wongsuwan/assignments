const listDisplay = document.getElementById("listDisplay")
const form = document.addToDo
const _idArray = []

function getData(){
    axios.get("https://api.vschool.io/morganw/todo/")
        .then(response => listData(response.data))
        .catch(err => console.log(err))
}

function listData(data) {
    clearList()
    for (let i = 0; i < data.length; i++) {
        
        // listDisplay.innerHTML +=
        // listDisplay.innerHTML += "<input type='checkbox' class='check " + data[i]._id + "' id='check" + [i] +"' />"
        _idArray.push(data[i]._id)
        if (data[i].completed) {
            listDisplay.innerHTML += "<h1 STYLE=\"text-decoration: line-through\">" + data[i].title + "</h1>"
        } else {
            let h1 = document.createElement("h1")
            h1.textContent = data[i].title
            listDisplay.appendChild(h1)
        }
        
        let h2 = document.createElement("h2")
        h2.textContent = data[i].description
        listDisplay.appendChild(h2)

        listDisplay.innerHTML += "<span>Mark done</span><input type='checkbox' class='check " + data[i]._id + "' id='check" + [i] +"' /><button class='delete delete" + [i] + "' id='delete" + [i] + "'>Delete entry</button>"

        let img = document.createElement("img")
        img.src = data[i].imgUrl
        if (img.src !== "file://wsl%24/Ubuntu/home/morgan/development/assignments/level2assignments/axioscapstone/undefined") {
            listDisplay.appendChild(img)
        }   
    }  
    console.log(_idArray)
}

function clearList(){
    const el = document.getElementById('listDisplay')
    while (el.firstChild){
        el.removeChild(el.firstChild)
    }
}

getData()

form.addEventListener("submit", function(event) {
    event.preventDefault()
    const newToDo = {
        title: form.title.value,
        description: form.description.value,
        price: form.price.value,
        imgUrl: form.imgUrl.value
    }
    axios.post('https://api.vschool.io/morganw/todo/', newToDo)
        .then(response => getData())
        .catch(error => console.log(error))
})

function putRequest(url){
    axios.put("url", {completed: true})
}

const container = document.body

container.addEventListener("click", function (e) {
    
    
    if (e.target.classList.contains("check")) {
        for (let i = 0; i < document.querySelectorAll(".check").length; i++){
            const check = document.querySelector("#check" + [i].toString())
            let checkTrue = check.checked
            // console.log(checkTrue)
            if (checkTrue === true) {
                axios.put("https://api.vschool.io/morganw/todo/" + _idArray[i], {completed: true})
                    .then(response => getData())                
            }
        }
    }
    if (e.target.classList.contains("delete0")) {
        axios.delete("https://api.vschool.io/morganw/todo/" + _idArray[0])
            .then(response => getData())
        console.log("hi")
    } else if (e.target.classList.contains("delete1")) {
        axios.delete("https://api.vschool.io/morganw/todo/" + _idArray[1])
            .then(response => getData())
        console.log("hi")
    } else if (e.target.classList.contains("delete2")) {
        axios.delete("https://api.vschool.io/morganw/todo/" + _idArray[2])
            .then(response => getData())
        console.log("hi")
    } else if (e.target.classList.contains("delete3")) {
        axios.delete("https://api.vschool.io/morganw/todo/" + _idArray[3])
            .then(response => getData())
        console.log("hi")
    } else if (e.target.classList.contains("delete4")) {
        axios.delete("https://api.vschool.io/morganw/todo/" + _idArray[4])
            .then(response => getData())
        console.log("hi")
    } else if (e.target.classList.contains("delete5")) {
        axios.delete("https://api.vschool.io/morganw/todo/" + _idArray[5])
            .then(response => getData())
        console.log("hi")
    } else if (e.target.classList.contains("delete6")) {
        axios.delete("https://api.vschool.io/morganw/todo/" + _idArray[6])
            .then(response => getData())
        console.log("hi")
    } else if (e.target.classList.contains("delete7")) {
        axios.delete("https://api.vschool.io/morganw/todo/" + _idArray[7])
            .then(response => getData())
        console.log("hi")
    }
    
//     for (let i = 0; i < document.querySelectorAll(".check").length; i++){
//         if (e.target.classList.contains("delete"+ [i].toString())) {
//                 axios.delete("https://api.vschool.io/morganw/todo/" + _idArray[i])
//                     .then(response => getData())
//     }

//     // if (e.target.classList.contains("delete0")) {
//     //     axios.delete("https://api.vschool.io/morganw/todo/" + _idArray[0])
//     //         .then(response => getData())
//     //     console.log("hi")
//     // }
// }
})
