const { Router } = require("express");
const product_reviews = require("../controllers/product_reviews.controller");
module.exports = Router()
  /**
   * @swagger
   * /product_reviews/post:
   *   post:
   *     tags: [Product_Reviews]
   *     summary: Product_Reviews yaratish
   *     description: Product_Reviews yaratish jarayoni
   */
  .post("/post", product_reviews.postProduct_Reviews) // ----postProduct_Reviews

  /**
   * @swagger
   * /product_reviews/get:
   *   get:
   *     tags: [Product_Reviews]
   *     summary: Product_Reviewslarni ko'rish
   *     description: Product_Reviewslarni ko'rish jarayoni
   */
  .get("/get", product_reviews.getProduct_Reviews) // ----getProduct_Reviews

  /**
   * @swagger
   * /product_reviews/getById/{id}:
   *   get:
   *     tags: [Product_Reviews]
   *     summary: Product_Reviewsni ID bo'yicha ko'rish
   *     description: Product_Reviewsni ID bo'yicha ko'rish jarayoni
   */
  .get("/getById/:id", product_reviews.getProduct_ReviewsById) // ----getProduct_ReviewsById

  /**
   * @swagger
   * /product_reviews/update/{id}:
   *   patch:
   *     tags: [Product_Reviews]
   *     summary: Product_Reviewsni ID bo'yicha yangilash
   *     description: Product_Reviewsni ID bo'yicha yangilash jarayoni
   */
  .patch("/update/:id", product_reviews.updateProduct_Reviews) // ----updateProduct_Reviews

  /**
   * @swagger
   * /product_reviews/delete/{id}:
   *   delete:
   *     tags: [Product_Reviews]
   *     summary: Product_Reviewsni ID bo'yicha o'chirish
   *     description: Product_Reviewsni ID bo'yicha o'chirish jarayoni
   */
  .delete("/delete/:id", product_reviews.deleteProduct_Reviews); // ----deleteProduct_Reviews
