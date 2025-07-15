const { Router } = require("express"); // ----Express
const order = require("../controllers/order.controller"); // ----Order Controller
const { validationsResultate } = require("../middlewares/validationsResultate"); // ----Validations Result
const orderValidations = require("../validations/orderValidation"); // ----Order Validations
module.exports = Router() // ----Router
  /**
   * @swagger
   * /order/:
   *   post:
   *     tags: [Order]
   *     summary: Order yaratish
   *     description: Order yaratish jarayoni
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               product_id:
   *                 type: string
   *                 description: Product ID
   *               order_details_id:
   *                 type: string
   *                 description: Order_Details ID
   *     responses:
   *       200:
   *         description: Order muvaffaqiyatli yaratildi
   *       500:
   *         description: Ichki Server Xatosi
   */
  .post(
    "/",
    validationsResultate(orderValidations.postOrderValidationSchema),
    order.postOrder
  ) // ----postOrder

  /**
   * @swagger
   * /order/:
   *   get:
   *     tags: [Order]
   *     summary: Orderlarni ko'rish
   *     description: Orderlarni ko'rish jarayoni
   *     responses:
   *       200:
   *         description: Orderlarni muvaffaqiyatli ko'rildi
   *       500:
   *         description: Ichki Server Xatosi
   */
  .get("/", order.getOrder) // ----getOrder

  /**
   * @swagger
   * /order/{id}:
   *   get:
   *     tags: [Order]
   *     summary: Orderni ID bo'yicha ko'rish
   *     description: Orderni ID ko'rish jarayoni
   *     parameters:
   *       - name: id
   *         in: path
   *         required: true
   *         description: Order ID
   *     responses:
   *       200:
   *         description: Order muvaffaqiyatli topildi
   *       404:
   *         description: Order topilmadi
   *       500:
   *         description: Ichki Server Xatosi
   */
  .get("/:id", order.getOrderById) // ----getOrderById

  /**
   * @swagger
   * /order/{id}:
   *   delete:
   *     tags: [Order]
   *     summary: Orderni ID bo'yicha o'chirish
   *     description: Orderni ID bo'yicha o'chirish jarayoni
   *     parameters:
   *       - name: id
   *         in: path
   *         required: true
   *         description: Order ID
   *     responses:
   *       200:
   *         description: Order muvaffaqiyatli o'chirildi
   *       404:
   *         description: Order topilmadi
   *       500:
   *         description: Ichki Server Xatosi
   */
  .delete("/:id", order.deleteOrder); // ----deleteOrder
