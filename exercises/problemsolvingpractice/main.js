/* 
Problem: Write a function that takes an array of numbers and returns the largest
Plan:
    set max variable
    for loop that checks each index of an array
        when index number is greater than max change max
    return max
*/

const largest = (num1, ...num_n) => {
    let array = [num1, ...num_n];
    let max = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i]
        }
    }
    return max
}
// console.log(largest(324,5757,1234387,4,23344,53333356334,23447734))
// Success

/* Problem: Write a function that takes an array of words and a character and returns each word that has that character present.
Plan
    for loop to run through index
    index of x each array item 
    returns >= 0? array[i] push to new array
*/

const lettersWithStrings = (arr, character) => {
    let successArr = []
    for (let i = 0; i < arr.length; i++) {
        let wordCheckArr = arr[i].split("")
        if (wordCheckArr.indexOf(character) >= 0) {
            successArr.push(arr[i])
        }
    }
    return successArr
}

// console.log(lettersWithStrings(["#3", "$$$", "C%4!", "Hey!"], "!") )
// Success

/* Write a function that takes a num1 and num2 and returns whether num1 is divisible by num2
Plan
    write a function that takes two parameters
    use modulo operation to see if num1 divided by num 2 has a remainder
    if so return false
    otherwise true
*/

const isDivisible = (num1, num2) => {
    return num1 % num2 === 0
}

console.log(isDivisible(4, 2)) // => true
isDivisible(9, 3) // => true
isDivisible(15, 4) // => false