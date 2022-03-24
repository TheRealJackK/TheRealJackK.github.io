function emailValidation() {
    let email = document.getElementById("email")
    let emailPattern = /^[^]+@[^]+\.[a-z]{2,3}$/
    let emailErrorDiv = document.getElementById("email-error")

    if(email.value.match(emailPattern)) {
        emailErrorDiv.innerHTML = "Valid Email"
    } else {
        emailErrorDiv.innerHTML = "Error, please enter a valid Email address"
    }
}

function passValidation() {
    let password = document.getElementById("password")
    let passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
    let passErrorDiv = document.getElementById("pass-error")

    if(password.value.match(passwordPattern)) {
        passErrorDiv.innerHTML = "Valid Password"
    } else {
        passErrorDiv.innerHTML = "Error, make sure your password has at least 10 characters, a capital letter and a special characters"
    }
}

function firstNameValidation() {
    let fName = document.getElementById("fname")
    let fNamePattern = /^[a-zA-Z ]+$/
    let fnameErrorDiv = document.getElementById("fname-error")

    if(fName.value.match(fNamePattern)) {
        fnameErrorDiv.innerHTML = "Valid first name"
    } else {
        fnameErrorDiv.innerHTML = "Error, please enter your first name"
    }
}

function lastNameValidation() {
    let lName = document.getElementById("lname")
    let lNamePattern = /^[a-zA-Z ]+$/
    let lnameErrorDiv = document.getElementById("lname-error")

    if(lName.value.match(lNamePattern)) {
        lnameErrorDiv.innerHTML = "Valid last name"
    } else {
        lnameErrorDiv.innerHTML = "Error, please enter your last name"
    }
}
    
function checkboxValidation() {
    let agree = document.getElementById("agree")
    let termsErrorDiv = document.getElementById("terms-error")
    if(agree.checked == 1) {
        termsErrorDiv.innerHTML = "Agreed to terms & conditions"
    } else {
        termsErrorDiv.innerHTML = "Please agree to terms & conditons to continue"
    }
}

function helloModal(checked) {
    document.getElementById("modal-container").style.display = "block";
}

function modalBeGone() {
    document.getElementById("modal-container").style.display = "none";
}  