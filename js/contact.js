// Form

const form = document.querySelector("#form");
const fullName = document.querySelector("#fullName");
const fullNameError = document.querySelector("#fullNameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");
const button = document.querySelector("button");
const validationMessage = document.querySelector(".message");

function formValidation(event) {
    event.preventDefault();

    if (lengthCheck(fullName.value, 5)) {
        fullNameError.style.display = "none";
    } else {
        fullNameError.style.display = "block";
    }

    if (lengthCheck(subject.value, 15)) {
        subjectError.style.display = "none";
    } else {
        subjectError.style.display = "block";
    }

    if (lengthCheck(message.value, 25)) {
        messageError.style.display = "none";
    } else {
        messageError.style.display = "block";
    }

    if (emailValidation(email.value)) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }

    console.log("hello");
}

form.addEventListener("submit", formValidation);

function emailValidation(email) {
    const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}

function lengthCheck(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

function messageValidation() {
    if ((lengthCheck(fullName.value, 5) === true) && (lengthCheck(subject.value, 15) === true) && (lengthCheck(message.value, 25) === true) && (emailValidation(email.value) === true)) {
        validationMessage.innerHTML = "The form has been properly filled out and is ready to be submitted when you are!";
        button.addEventListener("click", function() {
            validationMessage.innerHTML = "Thank you for your message! We'll get back to you soon.";
        });
    } else {
        validationMessage.innerHTML = "";
    }
}

fullName.addEventListener("keyup", messageValidation);
subject.addEventListener("keyup", messageValidation);
message.addEventListener("keyup", messageValidation);
email.addEventListener("keyup", messageValidation);