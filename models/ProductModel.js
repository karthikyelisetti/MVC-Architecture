const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema(
  {
    id: {
      type: Number,
      required: true,
    },
    product_name: {
      type: String,
      requred: true,
    },
    total_qnty: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

//  This model is used to interact with the database using APIs
const ProductModel = mongoose.model("Product", ProductSchema);
module.exports = ProductModel;
