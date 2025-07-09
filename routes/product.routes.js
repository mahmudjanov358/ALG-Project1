const { Router } = require("express");
const product = require("../controllers/product.controller");
module.exports = Router()
  .post("/post", product.postProduct) // ----postProduct
  .get("/get", product.getProduct) // ----getProduct
  .get("/getById/:id", product.getProductById) // ----getProductById
  .patch("/update/:id", product.updateProduct) // ----updateProduct
  .delete("/delete/:id", product.deleteProduct); // ----deleteProduct
