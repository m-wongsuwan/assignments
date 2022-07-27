var readline = require('readline-sync');
var input = readline.question('What phrase would you like to encrypt? ').toLowerCase();
var shift = parseInt(readline.question('How many letters would you like to shift? '));

const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const stringg = "abcdefg"

caeserCipher = (string, shift) => {
    let encodedString = ''
    for (let i = 0; i < string.length; i++) {
        if (alphabet.indexOf(string[i]) > -1) {
            if (shift + alphabet.indexOf(string[i]) < 26) {
                encodedString = encodedString + alphabet[shift + alphabet.indexOf(string[i])]
            } else {
                encodedString = encodedString + alphabet[(shift + alphabet.indexOf(string[i]))-26]
            }
        } else {
            encodedString = encodedString + string[i]
        }
    }
    return encodedString


}

console.log(caeserCipher(input, shift))