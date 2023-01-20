const Product = require("../models/Product");
const catchAsync = require("../utils/catchAsync");

const getAllProducts = catchAsync(async (req, res) => {
    const products = await Product.find(8);
    
    res.status(200).json({
        status: "ok",
        data: products,
    });
});

const addProduct = catchAsync(async (req, res) => {
    let newProduct = new Product();
    newProduct.email = req.body.email;
    newProduct.password = req.body.password;
    newProduct.unit = req.body.unit;
    newProduct.inventory = req.body.inventory;
    newProduct = await newProduct.save();
    res.status(200).json({
        status: "ok",
        dataInserted: newProduct,
    });
});

module.exports = {
    getAllProducts,
    addProduct,
}

