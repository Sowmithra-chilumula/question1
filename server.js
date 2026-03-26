const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (HTML)
app.use(express.static(__dirname));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/registration.html");
});

// Route for form submission
app.post("/submit", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    console.log("User Data:");
    console.log(name, email, password);

    // Simple validation (you can improve later)
    if (name && email && password) {
        // Redirect to success page
        res.redirect("/success.html");
    } else {
        res.send("Error: All fields are required");
    }
});

// Start server
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
