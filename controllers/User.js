const Product = require("../models/User");
const catchAsync = require("../utils/catchAsync");

const getAllUsers = catchAsync(async (req, res) => {
    const products = await User.find(8);
    
    res.status(200).json({
        status: "ok",
        data: products,
    });
});

const addUser = catchAsync(async (req, res) => {
    let newUser = new User();
    newUser.name = req.body.name;
    newProduct.price = req.body.price;
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

