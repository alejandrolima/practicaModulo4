const express = require("express");
const productRouter = express.Router();
const { getAllProducts, addProduct, deleteProduct } = require("../controllers/Product")

//producs
productRouter
    .route("/")
    .get(getAllProducts)
    .post(addProduct);
    
productRouter
    .route("/:id")
    .get((req, res) => {
        res.status(200).json({
            status: "ok",
            action: "get a product",
            id: req.params.id
        })
    })
    .put((req, res) => {
        res.status(200).json({
            status: "ok",
            action: "modify a product",
            id: req.params.id
        })

    })
    .delete(deleteProduct);

module.exports = productRouter;