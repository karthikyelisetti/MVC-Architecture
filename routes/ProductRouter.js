const express = require("express");
const ProductRouter = express.Router();

const {
  addProductsController,
  getAllProducts,
  getProductByID,
  getProductsByCategory,
} = require("../controllers/ProductController");

ProductRouter.post("/new", addProductsController);
ProductRouter.post("/products", getAllProducts);
ProductRouter.get("/:id", getProductByID);
ProductRouter.get("/:category", getProductsByCategory);

module.exports = ProductRouter;
