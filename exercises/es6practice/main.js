const profile = {
    title: 'jodie',
    department: 'Engineering',
    secret: 'tax Fraud'
  };

const printTitleAndSecret = ({title, secret}) => `${title} has a terrible secret: ${secret}`

console.log(printTitleAndSecret(profile))

//   const isEngineer = ({title, department}) => title === 'Engineer' && department === 'Engineering'

// console.log(isEngineer(profile))
//console.log(isEngineer(profile))

// const people = [
//     ["joe", true, 30000],
//     ["marta", false, 340985],
//     ["Kremlo", false, 395]
// ]

// const fixPeople= people.map(([firstName, hasInsurance, balance]) => {
//     return {firstName, hasInsurance, balance }
// })

// console.log(fixPeople)

// const points = [
//     [4, 5],
//     [10, 1],
//     [0, 40]
//   ]
  
// const pointsWObj = points.map(([x, y]) => {
//     return {x, y}
// })

// console.log(pointsWObj)

  // const fingers = ["thumb", "pointer", "pinky", "middle"]
// const [firstFing, secondFing, thirdFing, fourthFing] = fingers

// console.log(thirdFing)

// const expense = {
//     type: "Business",
//     amount: "$45 USD"
//   };
  
//   const {type} = expense;
//   const {amount} = expense;

//   console.log(type)
  
// const fields = ['firstName', 'lastName', 'phoneNumber'];

// const props = { fields };

// console.log(props)
// const MathLibrary = {
//   calculateProduct(...rest) {
//     console.log('Please use the multiply method instead');
//     return this.multiply(...rest);
//   },
//   multiply(a, b) {
//     return a * b;
//    }
// };

// console.log(MathLibrary.multiply(3, 3))

// function product(...numbers) {
 
//     return numbers.reduce(function(acc, number) {
//       return acc * number;
//     }, 1)
//   }

//   console.log(product(1, 2, 3, 4))

// function unshift(array, ...start) {
//     return [...start, ...array]
//   }

//   console.log(unshift([6, 7, 8], 1, 2, 3, 4, 5))