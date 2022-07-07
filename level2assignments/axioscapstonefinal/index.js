const listDisplay = document.getElementById("listDisplay")
const form = document.addToDo
const _idArray = []

function getData(){
    axios.get("https://api.vschool.io/morganw/todo/")
        .then(response => listData(response.data))
        .catch(err => console.log(err))
}

function listData(arr) {
    clearList()
    for(let i = 0; i < arr.length; i++){
        const div = document.createElement("div")
        listDisplay.appendChild(div)
        
        const h2 = document.createElement("h2")
        if (arr[i].completed === true) {
            h2.style.textDecoration = "line-through"
        }
        h2.textContent = arr[i].title
        div.appendChild(h2)

        const delBtn = document.createElement("button")
        delBtn.textContent = "Delete Entry"
        div.appendChild(delBtn)
        delBtn.addEventListener("click", ()=>{
            
            axios.delete("https://api.vschool.io/morganw/todo/" + arr[i]._id)
                .then(response => getData())
        })

        const checkDone = document.createElement("button")
        checkDone.textContent = "Mark Done"
        div.appendChild(checkDone)
        
        checkDone.addEventListener("click", () =>{
            axios.put("https://api.vschool.io/morganw/todo/" + arr[i]._id, {completed: true})
                .then(response => getData())
        })
        
        const editBtn = document.createElement("button")
        editBtn.textContent = "Edit"
        div.appendChild(editBtn)
        const br = document.createElement("br")
        div.appendChild(br)
        if (arr[i].price !== undefined) {
            const span = document.createElement("span")
            span.textContent = "$" + arr[i].price
            div.appendChild(span)
        }


        const p = document.createElement("p")
        p.textContent =  arr[i].description 
        p.style.fontSize = "15px"
        div.appendChild(p)

        console.log(arr[i].imgUrl)
        if (arr[i].imgUrl !== undefined) {
            const img = document.createElement("img")
            img.src = arr[i].imgUrl
            div.appendChild(img)
        } 

        // const delBtn = document.createElement("button")
        // delBtn.textContent = "Delete Entry"
        // div.appendChild(delBtn)
        // delBtn.addEventListener("click", ()=>{
            
        //     axios.delete("https://api.vschool.io/morganw/todo/" + arr[i]._id)
        //         .then(response => getData())
        // })

        // const checkDone = document.createElement("button")
        // checkDone.textContent = "Mark Done"
        // div.appendChild(checkDone)
        
        // checkDone.addEventListener("click", () =>{
        //     axios.put("https://api.vschool.io/morganw/todo/" + arr[i]._id, {completed: true})
        //         .then(response => getData())
        // })
        
        // const editBtn = document.createElement("button")
        // editBtn.textContent = "Edit"
        // div.appendChild(editBtn)

        editBtn.addEventListener("click", () => {
            const h2 = document.querySelectorAll("h2")[i]
            h2.style.textDecoration = "none"
            h2.textContent = "Edit Entry"
            const p = document.querySelectorAll("p")[i]
            p.textContent = ""
            const inputTitle = document.createElement("input")
            inputTitle.placeholder = arr[i].title
            const inputDesc = document.createElement("input")
            if (arr[i].description !== undefined) {
                inputDesc.placeholder = arr[i].description
            } else {
                inputDesc.placeholder = "Enter Description"
            }            
            const inputPrice = document.createElement("input")
        
            if (arr[i].price !== undefined) {
                inputPrice.placeholder = arr[i].price
            } else {
                inputPrice.placeholder = "Enter Price"
            }
            const inputImgUrl = document.createElement("input")
            if (arr[i].imgUrl !== undefined) {
                inputImgUrl.placeholder = arr[i].imgUrl
            } else {
                inputImgUrl.placeholder = "Enter Image URL"
            }

            h2.appendChild(inputTitle)
            h2.appendChild(inputDesc)
            h2.appendChild(inputPrice)
            h2.appendChild(inputImgUrl)
            const submitEdit = document.createElement("button")
            submitEdit.innerText = "Submit Changes"
            h2.appendChild(submitEdit)
            submitEdit.addEventListener("click", () => {
                    let editedEntry = {}
                    if (inputTitle.value) {
                        editedEntry.title = inputTitle.value
                    }
                    if (inputDesc.value) {
                        editedEntry.description = inputDesc.value
                    }
                    if (inputPrice.value) {
                        editedEntry.price = inputPrice.value
                    }
                    if (inputImgUrl.value) {
                        editedEntry.imgUrl = inputImgUrl.value
                    }

                axios.put("https://api.vschool.io/morganw/todo/" + arr[i]._id, editedEntry)
                    .then(getData)
            }

            )
        })
  


    }
}

function clearList(){
    form.title.value = ""
    form.description.value = ""
    form.price.value = ""
    form.imgUrl.value = ""
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

