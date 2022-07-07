const pokeList = document.getElementById("pokeList")
const xhr = new XMLHttpRequest()

const test = document.createElement("li")
test.innerHTML += "<li>test</li>"
// pokeList.append(test)

xhr.open("GET", "https://api.vschool.io/pokemon", true)
xhr.send()

xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
        const JSONdata = xhr.responseText
        const data = JSON.parse(JSONdata)
        console.log(data.objects[0].pokemon.length)
        appendNames(data.objects)
    }
}

const appendNames = (arr) => {
    for (let i = 0; i < arr[0].pokemon.length; i++) {
        let li = document.createElement("li")
        li = "<li>" + arr[0].pokemon[i].name + "</li>"
        pokeList.innerHTML += li
    }
}