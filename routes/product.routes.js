const { Router } = require("express");
const product = require("../controllers/product.controller");
module.exports = Router()
  /**
   * @swagger
   * /product/post:
   *   post:
   *     tags: [Product]
   *     summary: Product yaratish
   *     description: Product yaratish jarayoni
   */
  .post("/post", product.postProduct) // ----postProduct

  /**
   * @swagger
   * /product/get:
   *   get:
   *     tags: [Product]
   *     summary: Productlarni ko'rish
   *     description: Productlarni ko'rish jarayoni
   */
  .get("/get", product.getProduct) // ----getProduct

  /**
   * @swagger
   * /product/getById/{id}:
   *   get:
   *     tags: [Product]
   *     summary: Productni ID bo'yicha
   *     description: Productni ID bo'yicha jarayoni
   */
  .get("/getById/:id", product.getProductById) // ----getProductById

  /**
   * @swagger
   * /product/update/{id}:
   *   patch:
   *     tags: [Product]
   *     summary: Productni ID bo'yicha yangilash
   *     description: Productni ID bo'yicha yangilash jarayoni
   */
  .patch("/update/:id", product.updateProduct) // ----updateProduct

  /**
   * @swagger
   * /product/delete/{id}:
   *   delete:
   *     tags: [Product]
   *     summary: Productni ID bo'yicha o'chirish
   *     description: Productni ID bo'yicha o'chirish jarayoni
   */
  .delete("/delete/:id", product.deleteProduct); // ----deleteProduct
