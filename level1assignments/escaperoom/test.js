var readlineSync = require('readline-sync');
//   animals = ['Lion', 'Elephant', 'Crocodile', 'Giraffe', 'Hippo'],
//   index = readlineSync.keyInSelect(animals, 'Which animal?');
// console.log('Ok, ' + animals[index] + ' goes to your room.');
// console.log(typeof index)
const options = [23, 21, 124]
let answer = readlineSync.keyInSelect(options, "this will return a number")
console.log( answer)