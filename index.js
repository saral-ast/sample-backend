require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

// Enable CORS for all origins
app.use(cors());

const data = {
  name: "Arsenal",
  address: "123 Main St",
  city: "New York",
};

app.get("/api", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/data", (req, res) => {
  res.json(data);
});

// IMPORTANT: Remove the app.listen part for Vercel
// Instead, export the Express app
module.exports = app;
