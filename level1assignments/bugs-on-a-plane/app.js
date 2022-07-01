const form = document.airlineForm;
// var submit = document.getElementByID(submit);
// var query = document.querySelector;

form.addEventListener("submit", function(event){
    event.preventDefault();
    let firstName = form.firstName.value;
    let lastName = form.lastName.value
    let age = form.age.value
    let gender = form.gender.value
    let location = form.location.value
    let vegCheck = document.querySelector('#vegan')
    let glutenCheck = document.querySelector('#gluten')
    let paleoCheck = document.querySelector('#paleo')
    var diet = [];

    if (vegCheck.checked) {
        diet.push(vegCheck.value)
    }
    if (glutenCheck.checked) {
        diet.push(glutenCheck.value)
    }
    if (paleoCheck.checked) {
        diet.push(paleoCheck.value)
    }


    console.log(diet)
    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + diet + "\nAwesome, now if you die, it won't be an accident..")
})

// {
//     var firstName = form.elements["firstName"].value;
//     var lastName = form.elements["lastName"].value;
//     var age = form.elements["age"].value;
//     var gender = form.elements["gender"].value;
//     var location = form.elements["travel-location"].value;
//     var diet = {};
//     if (form.elements['vegan'].checked) {
//         var diet.pop(document.getElementById("vegan").value);
//     }
//     if (form.elements['gluten'].checked) {
//         diet.push(document.getElementById('gluten').value);
//     }
//     if (form.elements['paleo'].checked) {
//         diet.push(document.getElementById('paleo').value);
//     }


//     alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + diet + "\nAwesome, now if you die, it won't be an accident..");
// }


// submit.addEventListener("click", formAlert())