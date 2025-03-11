function validateForm() {
    alert('im in the validateForm function')
    let Val=true;
    let nameValue = document.formName.emailName.value;
    let Genderselected = document.querySelector('input[name=gender]:checked')

    console.log('Genderselected>>'.Genderselected)
    if (nameValue.length < 5){
        alert('im in if condition')
        Val=false;
    } 
    return Val;
}
