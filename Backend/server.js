const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to the Simple Backend!");
});

app.post("/greet", (req, res) => {
  const { name } = req.body;
  if (name) {
    res.json({ message: `Hello, ${name}!` });
  } else {
    res.status(400).json({ error: "Name is required" });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
