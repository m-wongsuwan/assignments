let fruit = ["banana", "apple", "orange", "watermelon"];
let vegetables = ["carrot", "tomato", "pepper", "lettuce"];
let food = []
const foodFunction = () => {
    vegetables.pop();
    fruit.shift()
    fruit.push(fruit.indexOf("orange"))
    vegetables.push(vegetables.length)
    food = fruit.concat(vegetables)
    food.splice(4, 2)
    food.reverse()
    return food.join(",")

}

console.log(foodFunction())

 console.log("fruit: ", fruit);
 console.log("vegetables: ", vegetables);
 console.log(food)
