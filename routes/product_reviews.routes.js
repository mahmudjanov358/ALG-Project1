const { Router } = require("express");
const product_reviews = require("../controllers/product_reviews.controller");
module.exports = Router()
  .post("/post", product_reviews.postProduct_Reviews)
  .get("/get", product_reviews.getProduct_Reviews)
  .get("/getById/:id", product_reviews.getProduct_ReviewsById)
  .patch("/update/:id", product_reviews.updateProduct_Reviews)
  .delete("/delete/:id", product_reviews.deleteProduct_Reviews);
