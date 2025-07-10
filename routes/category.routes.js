const { Router } = require("express");
const category = require("../controllers/category.controller");
module.exports = Router()
  /**
   * @swagger
   * /category/post:
   *   post:
   *     tags: [Category]
   *     summary: Category yaratish
   *     description: Category yaratish jarayoni
   */
  .post("/post", category.postCategory) // ----postCategory

  /**
   * @swagger
   * /category/get:
   *   get:
   *     tags: [Category]
   *     summary: Categorylarni ko'rish
   *     description: Categorylarni ko'rish jarayoni
   */
  .get("/get", category.getCategory) // ----getCategory

  /**
   * @swagger
   * /category/get:
   *   get:
   *     tags: [Category]
   *     summary: Categoryni ID bo'yicha ko'rish
   *     description: Categoryni ID bo'yicha ko'rish jarayoni
   */
  .get("/getById/:id", category.getCategoryById) // ----getCategoryById

  /**
   * @swagger
   * /category/update/{id}:
   *   put:
   *     tags: [Category]
   *     summary: Categoryni ID bo'yicha yangilash
   *     description: Categoryni ID bo'yicha yangilash jarayoni
   */
  .put("/update/:id", category.updateCategory) // ----updateCategory

  /**
   * @swagger
   * /category/delete/{id}:
   *   delete:
   *     tags: [Category]
   *     summary: Categoryni ID bo'yicha o'chirish
   *     description: Categoryni ID bo'yicha o'chirish jarayoni
   */
  .delete("/delete/:id", category.deleteCategory); // ----deleteCategory
