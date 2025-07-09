const { Router } = require("express");
const product_variant = require("../controllers/product_variant.controller");
module.exports = Router()
  .post("/post", product_variant.postProduct_Variant)
  .get("/get", product_variant.getProduct_Variant)
  .get("/getById/:id", product_variant.getProduct_VariantById)
  .patch("/update/:id", product_variant.updateProduct_Variant)
  .delete("/delete/:id", product_variant.deleteProduct_Variant);
