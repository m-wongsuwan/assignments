let string = "for sale: baby shoes. baby died."
let string1 = "i refuse to capitlize even a single word"

const upperCase = (string) => {
    return string.toUpperCase()
}

const halfLengthRndDwn = (string) => {
    return Math.floor(string.length/2)
}

const returnFirstHalf = (string) => {
    return string.slice(0, halfLengthRndDwn(string))
}

const capitalize = (string) => {
    let capArray = string.split(' ')
    for (let i = 0; i < capArray.length; i++) {
       let iArr = capArray[i].split("")
       iArr[0] = iArr[0].toUpperCase()
       capArray[i] = iArr.join("")
    }
    return capArray.join(" ")
}

console.log(capitalize(string1))