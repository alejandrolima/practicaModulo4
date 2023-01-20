const { response } = require("../app");
const Product = require("../models/Product");
const catchAsync = require("../utils/catchAsync");

const getAllProducts = catchAsync(async (req, res) => {
    const products = await Product.find();
    
    res.status(200).json({
        status: "ok",
        data: products,
    });
});

const getProductById = catchAsync(async (req, res) => {
    const product = await Product.findById(req.params.id);
    res.status(200).json({
        status: "ok",
        data: product,
    });
});

const addProduct = catchAsync(async (req, res) => {
    let newProduct = new Product();
    newProduct.name = req.body.name;
    newProduct.price = req.body.price;
    newProduct.unit = req.body.unit;
    newProduct.inventory = req.body.inventory;
    newProduct = await newProduct.save();
    res.status(200).json({
        status: "ok",
        dataInserted: newProduct,
    });
});

const deleteProduct = catchAsync(async (req, res) => {

    const products = await Product.findById(req.params.id);
    
    await Product.remove(products);
    res.status(200).json({
        status: "ok",
        mensaje: "Eliminado correctamente"
    });
})

module.exports = {
    getAllProducts,
    addProduct,
    deleteProduct,
    getProductById
}

