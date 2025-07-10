const { Router } = require("express"); // ----Express
const cart = require("../controllers/cart.controller"); // ----Cart Controller
module.exports = Router() // ----Router
  /**
   * @swagger
   * /cart/post:
   *   post:
   *     tags: [Cart]
   *     summary: Cart yaratish
   *     description: Cart yaratish jarayoni
   */
  .post("/post", cart.postCart) // ----postCart

  /**
   * @swagger
   * /cart/get:
   *   get:
   *     tags: [Cart]
   *     summary: Cartlarni ko'rish
   *     description: Cartlarni ko'rish jarayoni
   */
  .get("/get", cart.getCart) // ----getCart

  /**
   * @swagger
   * /cart/getById/{id}:
   *   get:
   *     tags: [Cart]
   *     summary: Cartni ID bo'yicha ko'rish
   *     description: Cartni ID bo'yicha ko'rish jarayoni
   */
  .get("/getById/:id", cart.getCartById) // ----getCartById

  /**
   * @swagger
   * /cart/delete/{id}:
   *   delete:
   *     tags: [Cart]
   *     summary: Cartni ID bo'yicha o'chirish
   *     description: Cartni ID bo'yicha o'chirish jarayoni
   */
  .delete("/delete/:id", cart.deleteCart); // ----deleteCart
