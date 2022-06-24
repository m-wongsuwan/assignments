const form = document.personalInfo

form.addEventListener("submit", function(event){
    event.preventDefault()
  

    console.log(form.sauce.value)
    // const checkedInputs = [];

    // for (let i = 0; i < form.status.length; i++){
    //     if(form.status[i].checked) {
    //         checkedInputs.push(form.status[i].value)
    //     }
    // }
    // console.log(checkedInputs)
})
