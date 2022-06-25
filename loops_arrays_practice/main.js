// let officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]
// let computerCount = 0

// for (i = 0; i < officeItems.length; i++){
//     if (officeItems[i] === "computer") {
//         computerCount++
//     }
// }

// console.log(computerCount)

// var peopleWhoWantToSeeMadMaxFuryRoad = [
//     {
//       name: "Mike",
//       age: 12,
//       gender: "male"
//     },{
//       name: "Madeline",
//       age: 80,
//       gender: "female"
//     },{
//       name: "Cheryl",
//       age: 22,
//       gender: "female"
//     },{
//       name: "Sam",
//       age: 30,
//       gender: "male"
//     },{
//       name: "Suzy",
//       age: 4,
//       gender: "female"
//     }
//   ]

//   for (i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
//     if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18) {
//         if (peopleWhoWantToSeeMadMaxFuryRoad[i].gender === 'female') {
//             console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough. Let her in.")
//         } else {
//             console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough. Let him in.")
//         }
//     } else {
//         if (peopleWhoWantToSeeMadMaxFuryRoad[i].gender === 'female') {
//             console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is too young. Bar her from entry.")
//         } else {
//         console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is too young. Bar him from entry.")
//     }
// }}

let array = [2, 2, 2, 6]
// console.log(array.reduce(
//         (prevVal, currentVal) => prevVal + currentVal    
//         ))
const lightOn = (arr) => {
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        count += arr[i]
    }
    if (count % 2 === 0) {
        console.log('The light is off')
    } else {
        console.log("the light is on")
    }
}

let arr1 = [2, 5, 435, 4, 3] // "The light is on"
let arr2 = [1, 1, 1, 1, 3]   // "The light is on"
let arr3 = [9, 3, 4, 2]      // "The light is off"

lightOn(arr1)
lightOn(arr2)
lightOn(arr3)