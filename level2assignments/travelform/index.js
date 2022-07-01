const form = document.travelForm

form.addEventListener("submit", (event) => {
    event.preventDefault()

    let name = form.firstName.value
    let nameLast = form.lastName.value

    let age = form.age.value

    let gender = form.gender.value

    let destination = form.destination.value

    const checkedInputs = []

    for (let i = 0; i < form.dietRestrictions.length; i++) {
        if (form.dietRestrictions[i].checked){
            checkedInputs.push(form.dietRestrictions[i].value)
        }
    }

    alert(`Name: ${name} ${nameLast} \nAge: ${age} \nGender: ${gender} \nDestination: ${destination} \nDietary restrictions: ${checkedInputs}`)
})