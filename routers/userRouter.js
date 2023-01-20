const express = require("express");
const userRouter = express.Router();
const { getAllUsers, addUser } = require("../controllers/User")

//users
userRouter
    .route("/")
    .get(getAllUsers)
    .post(addUser);
    
userRouter
    .route("/:id")
    .get((req, res) => {
        res.status(200).json({
            status: "ok",
            action: "get a user",
            id: req.params.id
        })

    })
    .put((req, res) => {
        res.status(200).json({
            status: "ok",
            action: "modify a user",
            id: req.params.id
        })

    })
    .delete((req, res) => {
        res.status(200).json({
            status: "ok",
            action: "delete a user",
            id: req.params.id
        })

    })

module.exports = userRouter;