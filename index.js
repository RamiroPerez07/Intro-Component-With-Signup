//variables
const firstNameInput = document.getElementById("firstNameInput")
const lastNameInput = document.getElementById("lastNameInput")
const emailInput = document.getElementById("emailInput")
const passwordInput = document.getElementById("passwordInput")
const form = document.getElementById("form")

function checkFirstNameInput(){
    let valid = false;
    const value = firstNameInput.value.trim()
    if (isEmpty(value)){
        showError(firstNameInput, "First Name cannot be empty")
    }else{
        showSuccess(firstNameInput)
        valid = true;
    }
    return valid;
}

function checkLastNameInput(){
    let valid = false;
    const value = lastNameInput.value.trim()
    if (isEmpty(value)){
        showError(lastNameInput, "Last Name cannot be empty")
    }else{
        showSuccess(lastNameInput)
        valid = true;
    }
    return valid;
}

function checkEmailInput(){
    let valid = false;
    const value = emailInput.value.trim()
    if (isEmpty(value)){
        showError(emailInput, "Email cannot be empty")
    }else if (!isEmailValid(value)){
        showError(emailInput, "Looks like this is not an email")
    }else{
        showSuccess(emailInput)
        valid = true;
    }
    return valid;
}

function checkPasswordInput(){
    let valid = false;
    const value = passwordInput.value.trim()
    if (isEmpty(value)){
        showError(passwordInput, "Password cannot be empty")
    }else{
        showSuccess(passwordInput)
        valid = true;
    }
    return valid;
}

function isEmailValid(value){
    const regex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
    return regex.test(value)
}

function isEmpty(value){
    return value=="";
}

function showSuccess(input){
    const formField = input.parentElement;
    const formFieldInput = formField.querySelector("input")
    formFieldInput.classList.remove("error")
    formFieldInput.classList.add("success")
    const formFieldIcon = formField.querySelector("div")
    formFieldIcon.style.display = "none"
    const errorLabel = formField.querySelector("small")
    errorLabel.textContent = "";
}

function showError(input,message){
    const formField = input.parentElement;
    const formFieldInput = formField.querySelector("input")
    formFieldInput.classList.remove("success")
    formFieldInput.classList.add("error")
    const formFieldIcon = formField.querySelector("div")
    formFieldIcon.style.display = "block"
    const errorLabel = formField.querySelector("small")
    errorLabel.textContent = message;
}

function isFormValid(){
    const isFirstNameInputValid = checkFirstNameInput();
    const isLastNameInputValid = checkLastNameInput();
    const isEmailInputValid = checkEmailInput();
    const isPasswordInputValid = checkPasswordInput();
    return isFirstNameInputValid&&isLastNameInputValid&&isEmailInputValid&&isPasswordInputValid;
}

function sendInformation(event){
    event.preventDefault();
    if (isFormValid()){
        showSuccess(firstNameInput)
        showSuccess(lastNameInput)
        showSuccess(emailInput)
        showSuccess(passwordInput)
        form.reset()
        return 
    }
}

function init(){
    form.addEventListener("submit", sendInformation)
}

init()