require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

// ✅ Enable CORS for all origins (or specify your frontend URL)
app.use(cors());

const port = process.env.PORT || 3000;

const data = {
  name: "Arsenal",
  address: "123 Main St",
  city: "New York",
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/data", (req, res) => {
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
