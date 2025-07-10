const { Router } = require("express"); // ----Express
const payment = require("../controllers/payment.controller"); // ----Payment Controller
module.exports = Router() // ----Router
  /**
   * @swagger
   * /payment/post:
   *   post:
   *     tags: [Payment]
   *     summary: Payment yaratish
   *     description: Payment yaratish jarayoni
   */
  .post("/post", payment.postPayment) // ----postPayment

  /**
   * @swagger
   * /payment/get:
   *   get:
   *     tags: [Payment]
   *     summary: Paymentlarni ko'rish
   *     description: Paymentlarni ko'rish jarayoni
   */
  .get("/get", payment.getPayment) // ----getPayment

  /**
   * @swagger
   * /payment/getById/{id}:
   *   get:
   *     tags: [Payment]
   *     summary: Paymentni ID bo'yicha ko'rish
   *     description: Paymentni ID bo'yicha ko'rish jarayoni
   */
  .get("/getById/:id", payment.getPaymentById) // ----getPaymentById

  /**
   * @swagger
   * /payment/update/{id}:
   *   put:
   *     tags: [Payment]
   *     summary: Paymentni ID bo'yicha yangilash
   *     description: Paymentni ID bo'yicha yangilash jarayoni
   */
  .put("/update/:id", payment.updatePayment) // ----updatePayment

  /**
   * @swagger
   * /payment/delete/{id}:
   *   delete:
   *     tags: [Payment]
   *     summary: Paymentni ID bo'yicha o'chirish
   *     description: Paymentni ID bo'yicha o'chirish jarayoni
   */
  .delete("/delete/:id", payment.deletePayment); // ----deletePayment
