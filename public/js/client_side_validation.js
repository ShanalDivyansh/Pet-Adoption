// In this file, you must perform all client-side validation for every single form input (and the role dropdown) on your pages. The constraints for those fields are the same as they are for the data functions and routes. Using client-side JS, you will intercept the form's submit event when the form is submitted and If there is an error in the user's input or they are missing fields, you will not allow the form to submit to the server and will display an error on the page to the user informing them of what was incorrect or missing.  You must do this for ALL fields for the register form as well as the login form. If the form being submitted has all valid data, then you will allow it to submit to the server for processing. Don't forget to check that password and confirm password match on the registration form!


// Validation for questionnaire
// console.log("inside CSV");
let questionnaire_form = document.getElementById('questionnaire-form');
let q1 = document.getElementById('q1');
// let q2 = document.getElementById('q2');
// let q3 = document.getElementById('q3');
// let q4 = document.getElementById('q4');
// let q5 = document.getElementById('q5');
// let q6 = document.getElementById('q6');
// let q7 = document.getElementById('q7');
console.log("inside CSV");
if (questionnaire_form) {
    questionnaire_form.addEventListener('submit', (event) => {
        event.preventDefault();
        let errorMessages = [];
        console.log(q1.value);
        // if (q1.value.trim() === '' || !(q1.value.trim().toLowerCase() === 'dog'|| q1.value.trim().toLowerCase() === 'cat' || q1.value.trim().toLowerCase() === 'none') ){
        //     errorMessages.push('Question 1 is not answered');
        // }
        // if (q2.value.trim() === '' || !(q2.value.trim().toLowerCase() === 'puppy'|| q2.value.trim().toLowerCase() === 'young adult' || q2.value.trim().toLowerCase() === 'adult' || q2.value.trim().toLowerCase() === 'senior') ){
        //     errorMessages.push('Question 2 is not answered');
        // }
        // if (q3.value.trim() === '' || !(q3.value.trim().toLowerCase() === 'male'|| q3.value.trim().toLowerCase() === 'female' || q3.value.trim().toLowerCase() === 'none' )){
        //     errorMessages.push('Question 3 is not answered');
        // }
        // if (q4.value.trim() === '' || !(q4.value.trim().toLowerCase() === 'small'|| q4.value.trim().toLowerCase() === 'medium' || q4.value.trim().toLowerCase() === 'large' || q4.value.trim().toLowerCase() === 'giant')){
        //     errorMessages.push('Question 4 is not answered');
        // }
        // if (q5.value.trim() === '' || !(q5.value.trim().toLowerCase() === 'yes'|| q5.value.trim().toLowerCase() === 'none')){
        //     errorMessages.push('Question 5 is not answered');
        // }
        // if (q5.value.trim() === '' || !(q5.value.trim().toLowerCase() === 'yes'|| q5.value.trim().toLowerCase() === 'none')){
        //     errorMessages.push('Question 5 is not answered');
        // }
           
        if (errorMessages.length > 0) {
            //console.log('----------->CSV logs');
            displayError(errorMessages);
            return;
        }

        questionnaire_form.submit();
    });
}
function displayError(errorMessages) {
    removeError();
    let errorElement = document.createElement('ul');
    errorElement.classList.add('error');  // Add the 'error' class to the container
    for (let msg of errorMessages) {
        let listItem = document.createElement('li');
        listItem.textContent = msg;
        errorElement.appendChild(listItem);
    }
    questionnaire_form.appendChild(errorElement);
}

function removeError() {
    let existingError = questionnaire_form.querySelector('.error');
    if (existingError) {
        questionnaire_form.removeChild(existingError);
    }
}

