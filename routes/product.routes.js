const { Router } = require("express");
const product = require("../controllers/product.controller");
module.exports = Router()
  .post("/post", product.postProduct)
  .get("/get", product.getProduct)
  .get("/getById/:id", product.getProductById)
  .patch("/update/:id", product.updateProduct)
  .delete("/delete/:id", product.deleteProduct);
