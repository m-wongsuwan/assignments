// // Print each number from 1 - 100
// // For each multiple of 3, print "Fizz" instead of the number.
// // For each multiple of 5, print "Buzz" instead of the number.
// // For numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of the number.

// plan 
// set up a for loop 1 -100
// set up a count variable, 
// run logic on it to see if count is divisible by 3, 
//     if so if it is divisible by 5 as well print fizzbuzz
//          if not print fizz
//      if not if is divisible by 5 print buzz

let count = 1;
const tallyObject = {
    fizz: 0,
    buzz: 0,
    fizzbuzz: 0
}

// console.log(tallyObject.fizz)

for (let i = 0; i < 100; i++) {
    if (count % 3 === 0) {
        if (count % 5 === 0) {
            console.log('FizzBuzz')
            count++
            tallyObject.fizzbuzz++
        } else {
            console.log('Fizz')
            count++
            tallyObject.fizz++
        }
    } else if (count % 5 === 0) {
        console.log('Buzz')
        count++
        tallyObject.buzz++
    } else {
        console.log(count)
        count++
    }
}

console.log(tallyObject)