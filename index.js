// api/index.js
const express = require("express");
const cors = require("cors");

const app = express();

// CORS configuration with specific origin allowed
app.use(
  cors({
    origin: "*", // In production, replace with your frontend URL
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// Sample data
const data = {
  name: "Arsenal",
  address: "123 Main St",
  city: "New York",
};

// Define routes - note we're not using '/api' prefix here
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/data", (req, res) => {
  res.json(data);
});

// Export as a module for Vercel serverless
module.exports = app;
