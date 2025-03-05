const express = require("express");
const app = express();
const path = require("path");

// Set EJS as the template engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src/views"));

// Serve static files (CSS, JS, Images)
app.use(express.static(path.join(__dirname, "src/public")));

// Route for login/signup page
app.get("/login", (req, res) => {
    res.render("login_signup");
});

// Start server
const PORT = 4000;  // Change from 3000 to 4000
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/login`);
});