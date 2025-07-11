const { Router } = require("express"); // ----Express
const payment = require("../controllers/payment.controller"); // ----Payment Controller
const { validationsResultate } = require("../middlewares/validationsResultate"); // ----Validations Result
const paymentValidations = require("../validations/paymentValidation"); // ----Payment Validations
module.exports = Router() // ----Router
  /**
   * @swagger
   * /payment/:
   *   post:
   *     tags: [Payment]
   *     summary: Payment yaratish
   *     description: Payment yaratish jarayoni
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               name:
   *                 type: string
   *                 description: Payment nomi
   *     responses:
   *       200:
   *         description: Payment muvaffaqiyatli yaratildi
   *       500:
   *         description: Ichki Server Xatosi
   */
  .post(
    "/",
    validationsResultate(paymentValidations.postPaymentValidationSchema),
    payment.postPayment
  ) // ----postPayment

  /**
   * @swagger
   * /payment/:
   *   get:
   *     tags: [Payment]
   *     summary: Paymentlarni ko'rish
   *     description: Paymentlarni ko'rish jarayoni
   *     responses:
   *       200:
   *         description: Paymentlarni muvaffaqiyatli ko'rildi
   *       500:
   *         description: Ichki Server Xatosi
   */
  .get("/", payment.getPayment) // ----getPayment

  /**
   * @swagger
   * /payment/{id}:
   *   get:
   *     tags: [Payment]
   *     summary: Paymentni ID bo'yicha ko'rish
   *     description: Paymentni ID bo'yicha ko'rish jarayoni
   *     parameters:
   *       - name: id
   *         in: path
   *         required: true
   *         description: Payment ID
   *     responses:
   *       200:
   *         description: Payment muvaffaqiyatli topildi
   *       404:
   *         description: Payment topilmadi
   *       500:
   *         description: Ichki Server Xatosi
   */
  .get("/:id", payment.getPaymentById) // ----getPaymentById

  /**
   * @swagger
   * /payment/{id}:
   *   put:
   *     tags: [Payment]
   *     summary: Paymentni ID bo'yicha yangilash
   *     description: Paymentni ID bo'yicha yangilash jarayoni
   *     parameters:
   *       - name: id
   *         in: path
   *         required: true
   *         description: Payment ID
   *     responses:
   *       200:
   *         description: Payment muvaffaqiyatli yangilandi
   *       404:
   *         description: Payment topilmadi
   *       500:
   *         description: Ichki Server Xatosi
   */
  .put(
    "/:id",
    validationsResultate(paymentValidations.updatePaymentValidationSchema),
    payment.updatePayment
  ) // ----updatePayment

  /**
   * @swagger
   * /payment/{id}:
   *   delete:
   *     tags: [Payment]
   *     summary: Paymentni ID bo'yicha o'chirish
   *     description: Paymentni ID bo'yicha o'chirish jarayoni
   *     parameters:
   *       - name: id
   *         in: path
   *         required: true
   *         description: Payment ID
   *     responses:
   *       200:
   *         description: Payment muvaffaqiyatli o'chirildi
   *       404:
   *         description: Payment topilmadi
   *       500:
   *         description: Ichki Server Xatosi
   */
  .delete("/:id", payment.deletePayment); // ----deletePayment
