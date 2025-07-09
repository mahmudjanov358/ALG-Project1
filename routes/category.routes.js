const { Router } = require("express");
const category = require("../controllers/category.controller");
module.exports = Router()
  .post("/post", category.postCategory) // ----postCategory
  .get("/get", category.getCategory) // ----getCategory
  .get("/getById/:id", category.getCategoryById) // ----getCategoryById
  .put("/update/:id", category.updateCategory) // ----updateCategory
  .delete("/delete/:id", category.deleteCategory); // ----deleteCategory
