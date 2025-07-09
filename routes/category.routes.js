const { Router } = require("express");
const category = require("../controllers/category.controller");
module.exports = Router()
  .post("/post", category.postCategory)
  .get("/get", category.getCategory)
  .get("/getById/:id", category.getCategoryById)
  .put("/update/:id", category.updateCategory)
  .delete("/delete/:id", category.deleteCategory);
