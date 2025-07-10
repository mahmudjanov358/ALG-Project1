const { Router } = require("express"); // ----Express
const order = require("../controllers/order.controller"); // ----Order Controller
module.exports = Router() // ----Router
  /**
   * @swagger
   * /order/post:
   *   post:
   *     tags: [Order]
   *     summary: Order yaratish
   *     description: Order yaratish jarayoni
   */
  .post("/post", order.postOrder) // ----postOrder

  /**
   * @swagger
   * /order/get:
   *   get:
   *     tags: [Order]
   *     summary: Orderlarni ko'rish
   *     description: Orderlarni ko'rish jarayoni
   */
  .get("/get", order.getOrder) // ----getOrder

  /**
   * @swagger
   * /order/getById/{id}:
   *   get:
   *     tags: [Order]
   *     summary: Orderni ID bo'yicha ko'rish
   *     description: Orderni ID ko'rish jarayoni
   */
  .get("/getById/:id", order.getOrderById) // ----getOrderById

  /**
   * @swagger
   * /order/delete/{id}:
   *   delete:
   *     tags: [Order]
   *     summary: Orderni ID bo'yicha o'chirish
   *     description: Orderni ID bo'yicha o'chirish jarayoni
   */
  .delete("/delete/:id", order.deleteOrder); // ----deleteOrder
