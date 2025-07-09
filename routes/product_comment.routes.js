const { Router } = require("express");
const product_comment = require("../controllers/product_comment.controller");
module.exports = Router()
  /**
   * @swagger
   * /product_comment/post:
   *   post:
   *     tags: [Product_Comment]
   *     summary: Product_Comment yaratish
   *     description: Product_Comment yaratish jarayoni
   */
  .post("/post", product_comment.postProduct_Comment) // ----postProduct_Comment

  /**
   * @swagger
   * /product_comment/get:
   *   get:
   *     tags: [Product_Comment]
   *     summary: Product_Commentlarni ko'rish
   *     description: Product_Commentlarni ko'rish jarayoni
   */
  .get("/get", product_comment.getProduct_Comment) // ----getProduct_Comment

  /**
   * @swagger
   * /product_comment/getById/{id}:
   *   get:
   *     tags: [Product_Comment]
   *     summary: Product_Commentni ID bo'yicha ko'rish
   *     description: Product_Commentni ID bo'yicha ko'rish jarayoni
   */
  .get("/getById/:id", product_comment.getProduct_CommentById) // ----getProduct_CommentById

  /**
   * @swagger
   * /product_comment/update/{id}:
   *   patch:
   *     tags: [Product_Comment]
   *     summary: Product_Commentni ID bo'yicha yangilash
   *     description: Product_Commentni ID bo'yicha yangilash jarayoni
   */
  .patch("/update/:id", product_comment.updateProduct_Comment) // ----updateProduct_Comment

  /**
   * @swagger
   * /product_comment/delete/{id}:
   *   delete:
   *     tags: [Product_Comment]
   *     summary: Product_Commentni ID bo'yicha o'chirish
   *     description: Product_Commentni ID bo'yicha o'chirish jarayoni
   */
  .delete("/delete/:id", product_comment.deleteProduct_Comment); // ----deleteProduct_Comment
