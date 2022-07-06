// // Use the rest operator

function collectAnimals(...animals) {
    return animals
}

// console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"))

function combineFruit(fruit, sweets, vegetables){
    return {fruit, sweets, vegetables}
}

combineFruit(["apple", "pear"],
             ["cake", "pie"],
             ["carrot"])
//=> {
    //     fruit: ["apple", "pear"],
    //     sweets: ["cake", "pie"],
    //     vegetables: ["carrot"]
    //  }

function parseSentence({location, duration}){
    return `We're going to have a good time in ${location} for ${duration}`
  }
  
let boobie =  parseSentence({
    location: "Burly Idaho",
    duration: "2 weeks"
   });

// console.log(boobie)

returnFirst = items => {
    const [firstItem]= items; /*change this line to be es6*/
    return firstItem
}
// console.log(returnFirst(['a', 3344, 3434, 6,6, 4,]))

//template literals
const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

function returnFavorites(arr){
    const [notMagnetsLol, firstFav, secondFav, thirdFav] = arr
    return `My top three favorite activities are ${firstFav}, ${secondFav}, and ${thirdFav}`
}

// console.log(returnFavorites(favoriteActivities))

// Use the Rest and Spread Operator to help take any number of arrays, and return one array.

combineAnimals = (...arr) => {
    return [...arr[0], ...arr[1], ...arr[2]]
}

combineAnimalsDifferent = (...arr) => {
    let returnArray = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > 1){
            for (let j = 0; j < arr[i].length; j++){
                returnArray.push(arr[i][j])
            }
        } else {
            returnArray.push(arr[i][0])
        }
    }
    return returnArray
}

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];
const boringAnimals = ['man', 'bug', 'richard', 'fourth', 'fifth'];

//console.log(combineAnimalsDifferent(realAnimals, magicalAnimals, mysteriousAnimals, boringAnimals))

// console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals))

// ["dog", "cat", "mouse", "jackolope", "platypus"]

function product(...numbers) {  
    return numbers.reduce((acc, number) => acc * number, 1)
  }
  
  //console.log(product(5,3,6,2))

  function unshift(array, ...gals) {
    return [...gals, ...array];
  }
  
// console.log(unshift(realAnimals, 2, 44, 5, 3, 2,))

function populatePeople(names){
    return names.map(function(name){
        name = name.split(" ");
        const [firstName, lastName] = name
        console.log(firstName)
        return {
            firstName: firstName,
            lastName: lastName
        }
    })
}

// console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]))
//[
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
//]

class Vehicle {
    constructor({make, model}) {
      this.make = make;
      this.model = model;
    }
  
    drive(){
      console.log("vroom");
    }
  }
  
  var car = new Vehicle({make:'honda', model:'civic'})
  console.log(car.make)