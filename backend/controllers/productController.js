import Product from "../models/productModel.js";
import asyncHandler from "express-async-handler";

// @desc      Get All Products
// @route     GET /api/v1/products
// @access    Public
const getAllProducts = asyncHandler(async (req, res, next) => {
  const products = await Product.find({});
  // res.status(401);
  // throw new Error("Not Authorized");
  res.json(products);
});

// @desc      Get Single Product
// @route     GET /api/v1/products/:id
// @access    Public
const getSingleProduct = asyncHandler(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

//-----------
// Exports
//-----------
export default { getAllProducts, getSingleProduct };
