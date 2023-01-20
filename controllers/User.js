const User = require("../models/User");
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
    newUser.price = req.body.price;
    newUser.firstName = req.body.firstName;
    newUser.lastName = req.body.lastName;
    newUser = await newUser.save();
    res.status(200).json({
        status: "ok",
        dataInserted: newUser,
    });
});

module.exports = {
    getAllUsers,
    addUser,
}

