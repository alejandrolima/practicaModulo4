const express = require("express");
const productRouter = express.Router();
const { getAllProducts, addProduct, deleteProduct,getProductById ,updateProduct} = require("../controllers/Product")

//producs
productRouter
    .route("/")
    .get(getAllProducts)
    .post(addProduct);
    
productRouter
    .route("/:id")
    .get(getProductById)
    .put(updateProduct)
    .delete(deleteProduct);

module.exports = productRouter;