const { Router } = require("express"); // ----Express
const discount = require("../controllers/discount.controller"); // ----Discount Controller
const { validationsResultate } = require("../middlewares/validationsResultate"); // ----Validations Result
const discountValidations = require("../validations/discountValidation"); // ----Discount Validations
module.exports = Router() // ----Router
  /**
   * @swagger
   * /discount/:
   *   post:
   *     tags: [Discount]
   *     summary: Discount yaratish
   *     description: Discount yaratish jarayoni
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               name:
   *                 type: string
   *                 description: Discount nomi
   *               description:
   *                 type: string
   *                 description: Discount tavsifi
   *               percent:
   *                 type: number
   *                 description: Discount foiz
   *     responses:
   *       200:
   *         description: Discount muvaffaqiyatli yaratildi
   *       500:
   *         description: Ichki Server Xatosi
   */
  .post(
    "/",
    validationsResultate(discountValidations.postDiscountValidationSchema),
    discount.postDiscount
  ) // ----postDiscount

  /**
   * @swagger
   * /discount/:
   *   get:
   *     tags: [Discount]
   *     summary: Discountlarni ko'rish
   *     description: Discountlarni ko'rish jarayoni
   */
  .get("/", discount.getDiscount) // ----getDiscount

  /**
   * @swagger
   * /discount/{id}:
   *   get:
   *     tags: [Discount]
   *     summary: Discountni ID bo'yicha ko'rish
   *     description: Discountni ID bo'yicha ko'rish jarayoni
   *     parameters:
   *       - name: id
   *         in: path
   *         required: true
   *         description: Discount ID
   *     responses:
   *       200:
   *         description: Discount muvaffaqiyatli topildi
   *       404:
   *         description: Discount topilmadi
   *       500:
   *         description: Ichki Server Xatosi
   */
  .get("/:id", discount.getDiscountById) // ----getDiscountById

  /**
   * @swagger
   * /discount/{id}:
   *   put:
   *     tags: [Discount]
   *     summary: Discountni ID bo'yicha yangilash
   *     description: Discountni ID bo'yicha yangilash jarayoni
   *     parameters:
   *       - name: id
   *         in: path
   *         required: true
   *         description: Discount ID
   *     responses:
   *       200:
   *         description: Discount muvaffaqiyatli yangilandi
   *       404:
   *         description: Discount topilmadi
   *       500:
   *         description: Ichki Server Xatosi
   */
  .put(
    "/:id",
    validationsResultate(discountValidations.updateDiscountValidationSchema),
    discount.updateDiscount
  ) // ----updateDiscount

  /**
   * @swagger
   * /discount/{id}:
   *   delete:
   *     tags: [Discount]
   *     summary: Discountni ID bo'yicha o'chirish
   *     description: Discountni ID bo'yicha o'chirish jarayoni
   *     parameters:
   *       - name: id
   *         in: path
   *         required: true
   *         description: Discount ID
   *     responses:
   *       200:
   *         description: Discount muvaffaqiyatli o'chirildi
   *       404:
   *         description: Discount topilmadi
   *       500:
   *         description: Ichki Server Xatosi
   */
  .delete("/:id", discount.deleteDiscount); // ----deleteDiscount
