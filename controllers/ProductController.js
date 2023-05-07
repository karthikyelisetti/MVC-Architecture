const ProductModel = require("../models/ProductModel");

const addProductsController = async (req, res) => {
  const { id, productname, total_qnty, category, price } = req.body;
  let productobj = {
    id: id,
    productname: productname,
    total_qnty: total_qnty,
    category: category,
    price: price,
  };

  ProductModel(productobj)
    .save()
    .then((data) =>
      res.send({ message: `New Product added successfully!`, data })
    )
    .catch((error) =>
      res.json({ message: "Error while adding new product!...", error })
    );
};

const getAllProducts = async (req, res) => {
    ProductModel.find().then((data) => {
        if(data.length !== 0) {
            res.send(data);
        }else {
            res.json({message: "Coming soon!...watch out for your favourite products!..."});
        }
    });
};

const getProductByID = async (req, res) => {
    ProductModel.find({ id: req.params.id }).then((data) => {
        if(data.length !== 0) {
            res.send(data[0]);
        }else {
            res.json({ message: "Selected product is not available!..." });
        }
    });
};

const getProductsByCategory = async(req, res) => {
    ProductModel.find({ category: req.params.category }).then((data) => {
        if (data.length !== 0) {
            res.send(data);
        }else {
            res.send({message: `Products not avaiable with cateogory`});
        }
    });
};


module.exports = {
    addProductsController,
    getAllProducts,
    getProductByID,
    getProductsByCategory
};