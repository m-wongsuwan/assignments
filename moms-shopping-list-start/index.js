const form = document.addItem
const list = document.getElementById("list")
let count = 0

const container = document.querySelector(".todos")

console.log(container)



form.addEventListener("submit", function(event) {
    event.preventDefault();
    const formValue = form.title.value
    list.innerHTML += "<li class=\"li" + count + "\"><div class=\"value\">" + formValue + "</div><button class=\"edit\">edit</button><button class=\"delete\">X</button></li>"
    count++
})

container.addEventListener("click", function (e) {
    if (e.target.classList.contains("delete")) {
        e.target.parentNode.innerHTML = ""
    } else if (e.target.classList.contains("edit")) {
        let preEditValue = e.target.parentNode.getElementsByClassName("value")[0].textContent
        e.target.parentNode.innerHTML = "<input class=\"editInput\" placeholder=\"" + preEditValue + "\"/><button class=\"editSubmit\">Submit Edit</button>"
    } else if (e.target.classList.contains("editSubmit")) {
        let editValue = document.getElementsByClassName("editInput")[0].value
        e.target.parentNode.innerHTML = "<li class=\"li" + count + "\"><div>" + editValue + "</div><button class=\"edit\">edit</button><button class=\"delete\">X</button></li>"
    }
})

