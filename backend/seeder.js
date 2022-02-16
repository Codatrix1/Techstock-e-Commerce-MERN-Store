import mongoose from "mongoose";
import dotenv from "dotenv";
import connectDB from "./config/connectDB.js";
import colors from "colors";

import products from "./data/products.js";
import users from "./data/users.js";

import Product from "./models/productModel.js";
import User from "./models/userModel.js";
import Order from "./models/orderModel.js";

// invoke dotenv
dotenv.config();

// connect DB
connectDB();

// Delete existing data
const deleteData = async () => {
  try {
    await Product.deleteMany();
    await User.deleteMany();
    await Order.deleteMany();

    console.log("Data destroyed successfully from the Database...".red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

/*
1) Model.create does a .save for each document in the array, resulting in N database calls (where N is the number of documents in the array); using Model.create will call any validators/hooks declared on your schema;
2) Collection.insert performs one large database call: bypasses mongoose validations;
*/

// Import into database
const importData = async () => {
  try {
    // Users
    const createdUsers = await User.insertMany(users);
    const adminUser = createdUsers[0]._id;

    // Products: Assigning "admin" to each product in the field "user" containing the ObjectId of the admin user who created the product
    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser };
    });
    await Product.insertMany(sampleProducts);

    console.log("Data imported successfully to the Database...".green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

// Conditional import/delete based on argv values
// To delete all: node backend/seeder -delete
// To Import all: node backend/seeder -import
if (process.argv[2] === "-import") {
  importData();
} else if (process.argv[2] === "-delete") {
  deleteData();
}
