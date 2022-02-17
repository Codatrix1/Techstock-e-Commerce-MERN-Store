// env variables and express
import dotenv from "dotenv";
import connectDB from "./config/connectDB.js";
import express from "express";

// Rest of the packages and imports
import colors from "colors";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

// Config and DB stuff
dotenv.config();
connectDB();

// invoke express
const app = express();

// import routers
import productRouter from "../backend/routes/productRoutes.js";

// Middlewares
// Body Parser: to access json data from req.body
app.use(express.json());

// Testing opeartions
app.get("/", (req, res) => {
  res.send("<h3>API is running...</h3>");
});

//---------------------------------------------
// Mounting the routers on the default route
//---------------------------------------------
app.use("/api/v1/products", productRouter);

// error middlewares
app.use(notFound);
app.use(errorHandler);

//----------
// Server
//----------
const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}...`.yellow
      .bold
  )
);
