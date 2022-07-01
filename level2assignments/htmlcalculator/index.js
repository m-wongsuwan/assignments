const addForm = document.addition

addForm.addEventListener("submit", function(event) {
    event.preventDefault()

    const num1 = Number(addForm.addNum1.value)
    const num2 = Number(addForm.addNum2.value)
    const answer = document.getElementById("addAnswer")

    answer.style.fontSize = "30px";
    answer.value = num1 + num2
})

const subForm = document.subtract

subForm.addEventListener("submit", function(event) {
    event.preventDefault()

    const num1 = Number(subForm.subNum1.value)
    const num2 = Number(subForm.subNum2.value)
    const answer = document.getElementById("subAnswer")

    answer.style.fontSize = "30px";
    answer.value = num1 - num2
  
})

const multForm = document.multiply

multForm.addEventListener("submit", function(event) {
    event.preventDefault()

    const num1 = Number(multForm.multNum1.value)
    const num2 = Number(multForm.multNum2.value)
    const answer = document.getElementById("multAnswer")

    answer.style.fontSize = "30px";
    answer.value = num1 * num2
})

