var powerRangers = [
    "Jason Lee Scott", 
    "Kimberly Hart", 
    "Zack Taylor", 
    "Trini Kwan", 
    "Billy Cranston"
]

var rangersList = document.getElementById("rangers")

for (i = 0; i < powerRangers.length; i++) {
    var newName = document.createElement("li")
    newName.textContent = powerRangers[i]
    rangersList.append(newName)
}

const rangersList = document.getElementById("rangers")

for (var i = 0; i < powerRangers.length; i++) {
    let currentRanger = powerRangers[i]
    rangersList.innerHTML += "<li>" + currentRanger + "</li>"
}
