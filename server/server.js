const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const { MongoClient, ServerApiVersion } = require("mongodb");

const app = express();

// MongoDB Atlas Connection (using MongoClient for initial ping)
const uri = "mongodb+srv://Admin:admin@saarthi.epqpkle.mongodb.net/?retryWrites=true&w=majority&appName=saarthi";

// Mongoose Connection for data operations
mongoose.connect(uri)
  .then(() => console.log("Connected to MongoDB Atlas (Mongoose)"))
  .catch((err) => console.error("Error connecting to MongoDB Atlas (Mongoose):", err));

// Middleware to parse JSON & URL-encoded data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// Set EJS as the template engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../frontend/src/views"));

// Serve static files (CSS, JS, Images)
app.use(express.static(path.join(__dirname, "../frontend/src/public")));

// Mongoose Models
const User = mongoose.model("User", {
  Username: String,
  name: String,
  email: String,
});

const Password = mongoose.model("Password", {
  username: String,
  password: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

// Review Model
const Review = mongoose.model("Review", {
  facility: { type: String, required: true },
  name: { type: String, required: true },
  uname: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
  experience: { type: String, required: true },
});

// Service Model
const Service = mongoose.model("Service", {
  facility: { type: String, required: true },
  name: { type: String, required: true },
  uname: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  location: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
});

// Routes
app.get("/", (req, res) => {
  res.redirect("/home");
});

app.get("/login", (req, res) => {
  res.render("login-signup");
});

app.get("/feedback", (req, res) => {
  res.render("feedback");
});

app.get("/user", (req, res) => {
  res.render("user_dashboard");
});

app.get("/admin", (req, res) => {
  res.render("admin_dashboard");
});

app.get("/home", (req, res) => {
  res.render("home");
});

app.get("/service", (req, res) => {
  res.render("service");
});

// Signup Route
app.post("/signup", async (req, res) => {
  try {
    const { username, name, email, password } = req.body;

    const newUser = new User({
      Username: username,
      name: name,
      email: email,
    });
    await newUser.save();

    const newPassword = new Password({
      username: username,
      password: password,
      user: newUser._id,
    });
    await newPassword.save();

    res.redirect("/login");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

// Login Route
app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await Password.findOne({ username, password })
      .populate("user")
      .exec();

    if (user) {
      res.redirect("/user"); // Redirect to user dashboard on successful login
    } else {
      res.redirect("/login"); // Redirect back to login if credentials are invalid
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

// Add Review Route
app.post("/addReview", async (req, res) => {
  try {
    const { facility, name, username, rating, experience } = req.body;

    const user = await User.findOne({ Username: username });
    if (!user) {
      return res.status(400).send("User not found");
    }

    const newReview = new Review({
      facility: facility,
      name: name,
      uname: user._id,
      rating: parseInt(rating),
      experience: experience,
    });
    await newReview.save();

    res.redirect("/user");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

// Add Service Route
app.post("/addService", async (req, res) => {
  try {
    const { facility, name, username, location, description, image } = req.body;

    const user = await User.findOne({ Username: username });
    if (!user) {
      return res.status(400).send("User not found");
    }

    const newService = new Service({
      facility: facility,
      name: name,
      uname: user._id,
      location: location,
      description: description,
      image: image,
    });
    await newService.save();

    res.redirect("/user"); // Or wherever you want to redirect after adding a service
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

// Listen on port 3000
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});