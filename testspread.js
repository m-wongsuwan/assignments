const largestNumber = (num1, ...num_n) => {
    if (num1 >= num_n) {
      return num1
    } else {
      return num_n
    }
  }
  
  console.log(largestNumber(3, 9, 19))
  console.log(largestNumber(25,-12, 10))