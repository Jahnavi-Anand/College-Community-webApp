document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const signupForm = document.getElementById("signup-form");

    window.showSignup = function () {
        loginForm.style.display = "none";
        signupForm.style.display = "block";
    };

    window.showLogin = function () {
        loginForm.style.display = "block";
        signupForm.style.display = "none";
    };
});

function validatePasswords() {
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm-password").value;
    let errorMessage = document.getElementById("error-message");

    if (password !== confirmPassword) {
        errorMessage.style.display = "block";  // Show error message
        return false;  // Prevent form submission
    } else {
        errorMessage.style.display = "none";  // Hide error if matched
        return true;  // Allow form submission
    }
}
