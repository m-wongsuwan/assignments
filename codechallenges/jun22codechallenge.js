let seriesResistance1 = [1, 2, 46, 21];
let seriesResistance2 = [333, 4658, 146, 231]
let seriesResistance3 = [15, 15, 15, 15]

const totalResistanceFunction = (resistanceArray) => {
    let resSum = resistanceArray.reduce(
        (previousValue, currentValue) => previousValue + currentValue
    );
    return resSum
}


console.log(totalResistanceFunction(seriesResistance1))