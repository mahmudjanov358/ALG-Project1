const { Router } = require("express"); // ----Express
const order_details = require("../controllers/order_details.controller"); // ----Order_Details Controller
const { validationsResultate } = require("../middlewares/validationsResultate"); // ----Validations Result
const order_detailsValidations = require("../validations/order_detailsValidation"); // ----Order_Details Validations
module.exports = Router() // ----Router
  /**
   * @swagger
   * /order_details/:
   *   post:
   *     tags: [Order_Details]
   *     summary: Order_Details yaratish
   *     description: Order_Details yaratish jarayoni
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               payment_id:
   *                 type: string
   *                 description: Payment ID
   *               user_id:
   *                 type: string
   *                 description: User ID
   *               total:
   *                 type: number
   *                 description: Total summa
   *     responses:
   *       200:
   *         description: Order_Details muvaffaqiyatli yaratildi
   *       500:
   *         description: Ichki Server Xatosi
   */
  .post(
    "/",
    validationsResultate(
      order_detailsValidations.postOrder_DetailsValidationSchema
    ),
    order_details.postOrder_Details
  ) // ----postOrder_Details

  /**
   * @swagger
   * /order_details/:
   *   get:
   *     tags: [Order_Details]
   *     summary: Order_Detailslarni ko'rish
   *     description: Order_Detailslarni ko'rish jarayoni
   *     responses:
   *       200:
   *         description: Order_Detailslarni muvaffaqiyatli ko'rildi
   *       500:
   *         description: Ichki Server Xatosi
   */
  .get("/", order_details.getOrder_Details) // ----getOrder_Details

  /**
   * @swagger
   * /order_details/{id}:
   *   get:
   *     tags: [Order_Details]
   *     summary: Order_Detailsni ID bo'yicha ko'rish
   *     description: Order_Detailsni ID bo'yicha ko'rish jarayoni
   *     parameters:
   *       - name: id
   *         in: path
   *         required: true
   *         description: Order_Details ID
   *     responses:
   *       200:
   *         description: Order_Details muvaffaqiyatli topildi
   *       404:
   *         description: Order_Details topilmadi
   *       500:
   *         description: Ichki Server Xatosi
   */
  .get("/:id", order_details.getOrder_DetailsById) // ----getOrder_DetailsById

  /**
   * @swagger
   * /order_details/{id}:
   *   patch:
   *     tags: [Order_Details]
   *     summary: Order_Detailsni ID bo'yicha yangilash
   *     description: Order_Detailsni ID bo'yicha yangilash jarayoni
   *     parameters:
   *       - name: id
   *         in: path
   *         required: true
   *         description: Order_Details ID
   *     responses:
   *       200:
   *         description: Order_Details muvaffaqiyatli yangilandi
   *       404:
   *         description: Order_Details topilmadi
   *       500:
   *         description: Ichki Server Xatosi
   */
  .patch(
    "/:id",
    validationsResultate(
      order_detailsValidations.updateOrder_DetailsValidationSchema
    ),
    order_details.updateOrder_Details
  ) // ----updateOrder_Details

  /**
   * @swagger
   * /order_details/{id}:
   *   delete:
   *     tags: [Order_Details]
   *     summary: Order_Detailsni ID bo'yicha o'chirish
   *     description: Order_Detailsni ID bo'yicha o'chirish jarayoni
   *     parameters:
   *       - name: id
   *         in: path
   *         required: true
   *         description: Order_Details ID
   *     responses:
   *       200:
   *         description: Order_Details muvaffaqiyatli o'chirildi
   *       404:
   *         description: Order_Details topilmadi
   *       500:
   *         description: Ichki Server Xatosi
   */
  .delete("/:id", order_details.deleteOrder_Details); // ----deleteOrder_Details
