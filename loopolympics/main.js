// // # **Preliminaries**

// // 1. Write a for loop that prints to the console the numbers 0 through 9.
// for (let i = 0; i <= 9; i++){
//     console.log(i)
// }
// // 2. Write a for loop that prints to the console 9 through 0.
// for (let i = 9; i >= 0; i--){
//     console.log(i)
// }
// // 3. Write a for loop that prints these fruits to the console.`const fruit = ["banana", "orange", "apple", "kiwi"]`
// const fruit = ["banana", "orange", "apple", "kiwi"]
// for (let i = 0; i < fruit.length; i++) {
//     console.log(fruit[i])
// }

// 1. Write a for loop that will push the numbers 0 through 9 to an array.
// let nineArray = [];
// for (let i = 0; i <= 9; i++){
//          nineArray.push([i])
// }
// console.log(nineArray)

// 2. Write a for loop that prints to the console only even numbers 0 through 100.
// for (let i = 0; i <= 100; i++){
//     if (i % 2 === 0) {
//         console.log(i)
//     }
// }

// 3. Write a for loop that will push every other fruit to an array.`const fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]`
// const fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
// let everyOtherFruit = []
// let count = 0;

// for (let i = 0; i < fruit.length; i++){

//     if (count % 2 === 0) {
//         everyOtherFruit.push(fruit[i])
//         count++
//     } else {
//         count++
//     }
// }
// console.log(everyOtherFruit)

const peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ]

//   1. Write a loop that will print out all the names of the people of the people array
// for (let i = 0; i < peopleArray.length; i++) {
//     console.log(peopleArray[i].name)
// }
//   2. Write a loop that pushes the names into a `names` array, and the occupations into an `occupations` array.
// let namesArray = []
// let occupationsArray = []
// for (let i = 0; i < peopleArray.length; i++) {
//     namesArray.push(peopleArray[i].name)
//     occupationsArray.push(peopleArray[i].occupation)
// }

//   3. Write a loop that pushes every other name to an array starting with the first person, in this case "Harrison Ford", 
// and every other occupation to *another* array starting with, in this case, "Singer".
// let eOPerson = []
// let eOJob = []
// let count1 = 0
// for (let i = 0; i < peopleArray.length; i++) {
//     if (count1 % 2 === 0) {
//         eOPerson.push(peopleArray[i].name)
//         eOJob.push(peopleArray[i+1].occupation)
//         count1 ++
//     } else {
//         count1++
//     }
// }
// console.log( eOPerson + " " + eOJob)

// 1. Create an array that mimics a grid like the following using nested for loops:
// [[0, 0, 0],
// [0, 0, 0],
// [0, 0, 0]]

// arr1 = []
// arr2 = []
// arr3 = []
// arr = [arr1, arr2, arr3]

// for  (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 3; j++) {
//         arr[i].push(0)
//     }
// }

// 2.Create an array that mimics a grid like the following using nested for loops:
// [[0, 0, 0],
// [1, 1, 1],
// [2, 2, 2]]

// for  (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 3; j++) {
//         arr[i].push(i)
//     }
// }


// [[0, 1, 2],
// [0, 1, 2],
// [0, 1, 2]]

// for  (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 3; j++) {
//         arr[i].push(j)
//     }
// }
// console.log(arr)

//Given a grid like the previous ones, write a nested for loop that would change every number to an x.
// let arr = [ [0, 1, 2],
//             [0, 1, 2],
//             [0, 1, 2]]

// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//         arr[i][j] = 'x'
//     }
// }
// console.log(arr)