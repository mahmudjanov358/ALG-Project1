const { Router } = require("express"); // ----Express
const cart_item = require("../controllers/cart_item.controller"); // ----Cart_Item Controller
const { validationsResultate } = require("../middlewares/validationsResultate"); // ----Validations Result
const cart_itemValidations = require("../validations/cart_itemValidation"); // ----Cart_Item Validations
module.exports = Router() // ----Router
  /**
   * @swagger
   * /cart_item/:
   *   post:
   *     tags: [Cart_Item]
   *     summary: Cart_Item yaratish
   *     description: Cart_Item yaratish jarayoni
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               cart_id:
   *                 type: string
   *                 description: Cart ID
   *               product_id:
   *                 type: string
   *                 description: Product ID
   *     responses:
   *       200:
   *         description: Cart_Item muvaffaqiyatli yaratildi
   *       500:
   *         description: Ichki Server Xatosi
   */
  .post(
    "/",
    validationsResultate(cart_itemValidations.postCart_ItemValidationSchema),
    cart_item.postCart_Item
  ) // ----postCart_Item

  /**
   * @swagger
   * /cart_item/:
   *   get:
   *     tags: [Cart_Item]
   *     summary: Cart_Itemlarni ko'rish
   *     description: Cart_Itemlarni ko'rish jarayoni
   *     responses:
   *       200:
   *         description: Cart_Itemlarni muvaffaqiyatli ko'rildi
   *       500:
   *         description: Ichki Server Xatosi
   */
  .get("/", cart_item.getCart_Item) // ----getCart_Item

  /**
   * @swagger
   * /cart_item/{id}:
   *   get:
   *     tags: [Cart_Item]
   *     summary: Cart_Itemni ID bo'yicha ko'rish
   *     description: Cart_Itemni ID bo'yicha ko'rish jarayoni
   *     parameters:
   *       - name: id
   *         in: path
   *         required: true
   *         description: Cart_Item ID
   *     responses:
   *       200:
   *         description: Cart_Item muvaffaqiyatli topildi
   *       404:
   *         description: Cart_Item topilmadi
   *       500:
   *         description: Ichki Server Xatosi
   */
  .get("/:id", cart_item.getCart_ItemById) // ----getCart_ItemById

  /**
   * @swagger
   * /cart_item/{id}:
   *   delete:
   *     tags: [Cart_Item]
   *     summary: Cart_Itemni ID bo'yicha o'chirish
   *     description: Cart_Itemni ID bo'yicha o'chirish
   *     parameters:
   *       - name: id
   *         in: path
   *         required: true
   *         description: Cart_Item ID
   *     responses:
   *       200:
   *         description: Cart_Item muvaffaqiyatli o'chirildi
   *       404:
   *         description: Cart_Item topilmadi
   *       500:
   *         description: Ichki Server Xatosi
   */
  .delete("/:id", cart_item.deleteCart_Item); // ----deleteCart_Item
