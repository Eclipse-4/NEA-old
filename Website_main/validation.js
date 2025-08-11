const form = document.getElementById('form');
const firstname_input = document.getElementById('firstname-input');
const surname_input = document.getElementById('surname-input');
const email_input = document.getElementById('email-input');
const password_input = document.getElementById('password-input');
const repeat_password_input = document.getElementById('repeat-password-input');
const error_message = document.getElementById('error-message');
form.addEventListener("submit", (e) => {
     e.preventDefault();
    
    let errors = []

    if(firstname_input){
        errors = GetSignupFormErrors(firstname_input.value, surname_input.value, email_input.value, password_input.value, repeat_password_input.value)
    }
    else{
        errors = GetLoginFormErrors(email_input.value, password_input.value)
    }

    if (errors.length > 0) {
        e.preventDefault()
        error_message.innerText = errors.join(". ")
    }
})

function GetSignupFormErrors(firstname, surname, email, password, repeat_password) {
    let errors = []

    if (firstname == "" || firstname == null) {
        errors.push("Firstname is required.")
        firstname_input.classList.add("Incorrect")
    }

    if (surname == "" || surname == null) {
        errors.push("Surname is required.")
        surname_input.classList.add("Incorrect")
    }

    if (email == "" || email == null) {
        errors.push("Email is required.")
        email_input.classList.add("Incorrect")
    }

    if (password == "" || password == null) {
        errors.push("Password is required.")
        password_input.classList.add("Incorrect")
    }
    if (password.length < 8) {
        errors.push("Password must be at least 8 characters long.")
        password_input.parentElement.classList.add("Incorrect")
    }

    if (!/[A-Z]/.test(password)) {
        errors.push("Password must include at least one uppercase letter.")
        password_input.parentElement.classList.add("Incorrect")
    }

    if (!/[0-9]/.test(password)) {
        errors.push("Password must include at least one number.")
        password_input.parentElement.classList.add("Incorrect")
    }
    if(password != repeat_password){
        errors.push("Passwords do not match.")
        password_input.parentElement.classList.add("Incorrect")
        repeat_password_input.parentElement.classList.add("Incorrect")
    }


    return errors;

}
const AllInputs = [firstname_input, surname_input, email_input, password_input, repeat_password_input]

AllInputs.forEach(input => {
    input.addEventListener("input", () => {
        if (input.parentElement.classlist.contains("Incorrect")) {
            input.parentElement.classList.remove("Incorrect")
            error_message.innerText = ""
        }
    });
})