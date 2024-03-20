const signupForm = document.getElementById('signup-form');
const signinForm = document.getElementById('signin-form');

signupForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission

    if(validateSignUpForm()) {
        // If validation passes, submit form data (replace with your form submission logic)
        alert("Form submitted!");
    }
});

signinForm.addEventListener('submit', (event) => {
    event.preventDefault(); 

    if(validateSignInForm()) {
        // If validation passes, submit form data (replace with your form submission logic)
        alert("Form submitted!");
    }
});

function validateSignUpForm() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const terms = document.getElementById('terms').checked;

    // Add more thorough validation checks as needed (e.g., email format, password strength, etc.)
    let isValid = true;

    // Sample validation checks
    if (firstName.length < 4) { 
        alert('First Name must be at least 4 characters');
        isValid = false;
    }
    // ... add similar checks for lastName, email

    // ... other validation checks 

    return isValid;
}

function validateSignInForm() {
    // ... validation logic for the sign-in form
    return true; // Replace with proper validation 
}
