import express from "express";
const router = express.Router();

import productController from "../controllers/productController.js";

router.route("/").get(productController.getAllProducts);
router.route("/:id").get(productController.getSingleProduct);

export default router;
