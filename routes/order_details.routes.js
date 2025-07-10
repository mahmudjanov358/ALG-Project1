const { Router } = require("express"); // ----Express
const order_details = require("../controllers/order_details.controller"); // ----Order_Details Controller
module.exports = Router() // ----Router
  /**
   * @swagger
   * /order_details/post:
   *   post:
   *     tags: [Order_Details]
   *     summary: Order_Details yaratish
   *     description: Order_Details yaratish jarayoni
   */
  .post("/post", order_details.postOrder_Details) // ----postOrder_Details

  /**
   * @swagger
   * /order_details/get:
   *   get:
   *     tags: [Order_Details]
   *     summary: Order_Detailslarni ko'rish
   *     description: Order_Detailslarni ko'rish jarayoni
   */
  .get("/get", order_details.getOrder_Details) // ----getOrder_Details

  /**
   * @swagger
   * /order_details/getById/{id}:
   *   get:
   *     tags: [Order_Details]
   *     summary: Order_Detailsni ID bo'yicha ko'rish
   *     description: Order_Detailsni ID bo'yicha ko'rish jarayoni
   */
  .get("/getById/:id", order_details.getOrder_DetailsById) // ----getOrder_DetailsById

  /**
   * @swagger
   * /order_details/update/{id}:
   *   patch:
   *     tags: [Order_Details]
   *     summary: Order_Detailsni ID bo'yicha yangilash
   *     description: Order_Detailsni ID bo'yicha yangilash jarayoni
   */
  .patch("/update/:id", order_details.updateOrder_Details) // ----updateOrder_Details

  /**
   * @swagger
   * /order_details/delete/{id}:
   *   delete:
   *     tags: [Order_Details]
   *     summary: Order_Detailsni ID bo'yicha o'chirish
   *     description: Order_Detailsni ID bo'yicha o'chirish jarayoni
   */
  .delete("/delete/:id", order_details.deleteOrder_Details); // ----deleteOrder_Details
