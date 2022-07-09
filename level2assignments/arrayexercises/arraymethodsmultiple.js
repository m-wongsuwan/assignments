// const peopleArray = [
//     {
//         firstName: "Sarah",
//         lastName: "Palin",
//         age: 47
//     },
//     {
//         firstName: "Frank",
//         lastName: "Zappa",
//         age: 12
//     },
//     {
//         firstName: "Rick",
//         lastName: "Sanchez",
//         age: 78
//     },
//     {
//         firstName: "Morty",
//         lastName: "Smith",
//         age: 29
//     },
//     {
//         firstName: "Kyle",
//         lastName: "Mooney",
//         age: 27
//     },
//     {
//         firstName: "Pasha",
//         lastName: "Datsyuk",
//         age: 13
//     },
//     {
//         firstName: "Lev",
//         lastName: "Tolstoy",
//         age: 82
//     }
// ]

// const newPeople = [
//     {
//         firstName: "Rutlidge",
//         lastName: "Cooler",
//         age: 99
//     },
//     {
//         firstName: "Faye",
//         lastName: "Hulkamania",
//         age: 31
//     },
// ]

// function addPeople(arr, arr2){
//     for (let i = 0; i < arr2.length; i++) {
//         arr.push(arr2[i])
//     }
// }

// addPeople(peopleArray, newPeople)


// function theFunction(arr) {
//     let sortedArr = arr.sort((a, b) => a.lastName.localeCompare(b.lastName))

//     let sortedOver18Arr = sortedArr.reduce((final, person) => {
//         if(person.age >= 18){
//             final.push(person)
//         }
//         return final
//     }, [])
    
//     return sortedOver18Arr.reduce(function(final, person){
//         final.push(`<li>${person.firstName} ${person.lastName} is ${person.age}</li>`)
//         return final
//     }, [])

//     // return arr.reduce((final, person) => {
//     //     if(person.age >= 18) {
//     //         final.push(`<li>${person.firstName} is ${person.age}</li>`)
//     //     }
//     //     return final
//     // }, [])
// }


// console.log(theFunction(peopleArray))


multiply = (multiplier, ...theArgs) => {
    return theArgs.map(number => {
        return "<p>" + number * multiplier + "</p>"
    })
}

console.log(multiply(5, 1, 2, 3, 4))