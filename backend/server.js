// env variables
import dotenv from "dotenv";
dotenv.config();

// express
import express from "express";
const app = express();

// import products
import products from "./data/products.js";

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
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}...`
  )
);
