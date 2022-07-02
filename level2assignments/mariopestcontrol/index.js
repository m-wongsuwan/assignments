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



 document.addEventListener('keydown', hiThere)

 function hiThere() {
    const logSubtotal = () => {
        if (goombaForm.goombaAmt.value > 0) {
            goombaForm.goombaSubtotal.value = goombaForm.goombaAmt.value * 5
        }
        if (bobombForm.bobombAmt.value > 0) {
            bobombForm.bobombSubtotal.value = bobombForm.bobombAmt.value * 7
        }
        if (cheepForm.cheepAmt.value > 0) {
            cheepForm.cheepSubtotal.value = cheepForm.cheepAmt.value * 11
        }
        
    }
    setTimeout(logSubtotal, 10)
    
 }