const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose 
  .connect("mongodb://mongo:27017/demo")
  .then(() => console.log("Mongo Connected"))
  .catch(console.error);

app.get('/', (req, res) => {
  res.send("Hello from docker2!")
});

app.get("/", (req, res) => {
  res.send("Hello from Docker!");
});

app.listen(3000, () => {
  console.log("Running on port 3000");
});