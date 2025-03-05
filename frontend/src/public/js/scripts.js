document.addEventListener("DOMContentLoaded", function () {
    const loginTab = document.getElementById("login-tab");
    const signupTab = document.getElementById("signup-tab");
    const loginForm = document.getElementById("login-form");
    const signupForm = document.getElementById("signup-form");

    loginTab.addEventListener("click", function () {
        loginForm.style.display = "block";
        signupForm.style.display = "none";
        loginTab.classList.add("active");
        signupTab.classList.remove("active");
    });

    signupTab.addEventListener("click", function () {
        loginForm.style.display = "none";
        signupForm.style.display = "block";
        signupTab.classList.add("active");
        loginTab.classList.remove("active");
    });

    // Ensure correct form is displayed on page load
    if (window.location.hash === "#signup") {
        signupTab.click();
    } else {
        loginTab.click();
    }
});
