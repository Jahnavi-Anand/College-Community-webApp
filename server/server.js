const express = require("express");
const { MongoClient, ServerApiVersion } = require('mongodb');
const path = require("path"); 
const app = express();

mongoose.connect('mongodb+srv://admin:admin@saarthi.mongodb.net/saarthi?retryWrites=true&w=majority&appName=saarthi', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch(err => console.error('Error connecting to MongoDB Atlas:', err));

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
  res.redirect("/home");
});

// Route for login/signup page
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

// MongoDB Connection Function
async function connectDB() {
  try {
    client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      }
    });

    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
    return client;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
}

// Function to start the server after DB connection
async function startServer() {
  try {
    await connectDB();
    const PORT = 4000;
    app.listen(PORT, () => {
      console.log(`🚀 Server running at http://localhost:${PORT}/home`);
    });

    // Example route using the MongoDB client
    app.get("/data", async (req, res) => {
      try {
        const database = client.db("saarthi"); 
        const collection = database.collection("login"); 
        const data = await collection.find({}).toArray();
        res.json(data);
      } catch (err) {
        console.error("Error fetching data:", err);
        res.status(500).json({ error: "Internal server error" });
      }
    });

  } catch (error) {
    console.error("Server startup failed:", error);
  }
}

startServer(); 