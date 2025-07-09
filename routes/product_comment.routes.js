const { Router } = require("express");
const product_comment = require("../controllers/product_comment.controller");
module.exports = Router()
  .post("/post", product_comment.postProduct_Comment)
  .get("/get", product_comment.getProduct_Comment)
  .get("/getById/:id", product_comment.getProduct_CommentById)
  .patch("/update/:id", product_comment.updateProduct_Comment)
  .delete("/delete/:id", product_comment.deleteProduct_Comment);
