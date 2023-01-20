const express = require("express");
const productRouter = express.Router();
const { getAllProducts, addProduct, deleteProduct,getProductById } = require("../controllers/Product")

//producs
productRouter
    .route("/")
    .get(getAllProducts)
    .post(addProduct);
    
productRouter
    .route("/:id")
    .get(getProductById)
    .put((req, res) => {
        res.status(200).json({
            status: "ok",
            action: "modify a product",
            id: req.params.id
        })

    })
    .delete(deleteProduct);

module.exports = productRouter;