// env variables and express
import dotenv from "dotenv";
import connectDB from "./config/connectDB.js";
import express from "express";

// Rest of the packages and imports
import colors from "colors";
import products from "./data/products.js";

// Config and DB stuff
dotenv.config();
connectDB();

// invoke express
const app = express();

// CRUD opeartions
app.get("/", (req, res) => {
  res.send("<h3>API is running...</h3>");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

// Server
const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}...`.yellow
      .bold
  )
);
