const { Router } = require("express"); // ----Express
const cart = require("../controllers/cart.controller"); // ----Cart Controller
const { validationsResultate } = require("../middlewares/validationsResultate"); // ----Validations Result
const cartValidations = require("../validations/cartValidation"); // ----Cart Validations
module.exports = Router() // ----Router
  /**
   * @swagger
   * /cart/:
   *   post:
   *     tags: [Cart]
   *     summary: Cart yaratish
   *     description: Cart yaratish jarayoni
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               user_id:
   *                 type: string
   *                 description: User ID
   *               status_id:
   *                 type: string
   *                 description: Status ID
   *     responses:
   *       200:
   *         description: Cart muvaffaqiyatli yaratildi
   *       500:
   *         description: Ichki Server Xatosi
   */
  .post(
    "/",
    validationsResultate(cartValidations.postCartValidationSchema),
    cart.postCart
  ) // ----postCart

  /**
   * @swagger
   * /cart/:
   *   get:
   *     tags: [Cart]
   *     summary: Cartlarni ko'rish
   *     description: Cartlarni ko'rish jarayoni
   *     responses:
   *       200:
   *         description: Cartlarni muvaffaqiyatli ko'rildi
   *       500:
   *         description: Ichki Server Xatosi
   */
  .get("/", cart.getCart) // ----getCart

  /**
   * @swagger
   * /cart/{id}:
   *   get:
   *     tags: [Cart]
   *     summary: Cartni ID bo'yicha ko'rish
   *     description: Cartni ID bo'yicha ko'rish jarayoni
   *     parameters:
   *       - name: id
   *         in: path
   *         required: true
   *         description: Cart ID
   *     responses:
   *       200:
   *         description: Cart muvaffaqiyatli topildi
   *       404:
   *         description: Cart topilmadi
   *       500:
   *         description: Ichki Server Xatosi
   */
  .get("/:id", cart.getCartById) // ----getCartById

  /**
   * @swagger
   * /cart/{id}:
   *   delete:
   *     tags: [Cart]
   *     summary: Cartni ID bo'yicha o'chirish
   *     description: Cartni ID bo'yicha o'chirish jarayoni
   *     parameters:
   *       - name: id
   *         in: path
   *         required: true
   *         description: Cart ID
   *     responses:
   *       200:
   *         description: Cart muvaffaqiyatli o'chirildi
   *       404:
   *         description: Cart topilmadi
   *       500:
   *         description: Ichki Server Xatosi
   */
  .delete("/:id", cart.deleteCart); // ----deleteCart
