const goombaForm = document.goombaForm
const bobombForm = document.bobombForm
const cheepForm = document.cheepForm
const submitForm = document.submitForm
const total = document.getElementById('total')
const goombaSubtotal = goombaForm.goombaSubtotal

submitForm.addEventListener("submit", function(event) {
    event.preventDefault()
    
    let goombaNum = goombaForm.goombaAmt.value
    let bobombNum = bobombForm.bobombAmt.value
    let cheepNum = cheepForm.cheepAmt.value

    total.textContent = goombaNum * 5 + bobombNum * 7 + cheepNum * 11 + " coins"
})



//  document.addEventListener('keydown', logSubtotal)

//  function logSubtotal() {
//     goombaSubtotal.value = goombaForm.goombaAmt.value * 5
//  }

// console.log(goombaForm.goombaAmt.value)