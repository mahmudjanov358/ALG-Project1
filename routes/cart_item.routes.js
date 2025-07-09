const { Router } = require("express");
const cart_item = require("../controllers/cart_item.controller");
module.exports = Router()
  /**
   * @swagger
   * /cart_item/post:
   *   post:
   *     tags: [Cart_Item]
   *     summary: Cart_Item yaratish
   *     description: Cart_Item yaratish jarayoni
   */
  .post("/post", cart_item.postCart_Item) // ----postCart_Item

  /**
   * @swagger
   * /cart_item/get:
   *   get:
   *     tags: [Cart_Item]
   *     summary: Cart_Itemlarni ko'rish
   *     description: Cart_Itemlarni ko'rish jarayoni
   */
  .get("/get", cart_item.getCart_Item) // ----getCart_Item

  /**
   * @swagger
   * /cart_item/getById/{id}:
   *   get:
   *     tags: [Cart_Item]
   *     summary: Cart_Itemni ID bo'yicha ko'rish
   *     description: Cart_Itemni ID bo'yicha ko'rish jarayoni
   */
  .get("/get/:id", cart_item.getCart_ItemById) // ----getCart_ItemById

  /**
   * @swagger
   * /cart_item/delete/{id}:
   *   delete:
   *     tags: [Cart_Item]
   *     summary: Cart_Itemni ID bo'yicha o'chirish
   *     description: Cart_Itemni ID bo'yicha o'chirish
   */
  .delete("/delete/:id", cart_item.deleteCart_Item); // ----deleteCart_Item
