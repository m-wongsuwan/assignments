let people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
let alphabet = "abcdefghijklmnopqrstuvwxyz"
let returnArr = []

function forception(people, alphabet){
    for (let i = 0; i < people.length; i++) {
        returnArr.push(people[i])
        for (let j = 0; j < alphabet.length; j++) {
            returnArr.push(alphabet[j].toUpperCase())
        }
    }
}

forception(people, alphabet)

console.log(returnArr.indexOf("A"))