const User = require("../models/User");
const catchAsync = require("../utils/catchAsync");

const getAllUsers = catchAsync(async (req, res) => {
    const users = await User.find();
    
    res.status(200).json({
        status: "ok",
        data: users,
    });
});

const addUser = catchAsync(async (req, res) => {
    let newUser = new User();
    newUser.email = req.body.email;
    newUser.password = req.body.password;
    newUser.firstName = req.body.firstName;
    newUser.lastName = req.body.lastName;
    newUser = await newUser.save();
    res.status(200).json({
        status: "ok",
        dataInserted: newUser,
    });
});

const deleteUser = catchAsync(async (req, res) => {

    const user = await User.findById(req.params.id);
    
    await User.remove(user);
    res.status(200).json({
        status: "ok",
        mensaje: "Eliminado correctamente"
    });
})

module.exports = {
    getAllUsers,
    addUser,
    deleteUser
}

