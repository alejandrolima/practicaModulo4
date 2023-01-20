const express = require("express");
const userRouter = express.Router();
const { getAllUsers, addUser, deleteUser,getUserById } = require("../controllers/User")

//users
userRouter
    .route("/")
    .get(getAllUsers)
    .post(addUser);
    
userRouter
    .route("/:id")
    .get(getUserById)
    .put((req, res) => {
        res.status(200).json({
            status: "ok",
            action: "modify a user",
            id: req.params.id
        })

    })
    .delete(deleteUser)

module.exports = userRouter;