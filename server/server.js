const express = require("express");
const app = express();
const path = require("path");

// Middleware to parse JSON & URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set EJS as the template engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../frontend/src/views"));  

// Serve static files (CSS, JS, Images)
app.use(express.static(path.join(__dirname, "../frontend/src/public")));  

// Root route → Redirects to login page
app.get("/", (req, res) => {
    res.redirect("/login");
});

// Route for login/signup page
app.get("/login", (req, res) => {
    res.render("login-signup");
});

app.get("/feedback", (req, res) => {
    res.render("feedback");
});

// Start server
const PORT = 4000;  
app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}/login`);
});
