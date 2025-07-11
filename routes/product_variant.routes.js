const { Router } = require("express"); // ----Express
const product_variant = require("../controllers/product_variant.controller"); // ----Product_Variant Controller
const { validationsResultate } = require("../middlewares/validationsResultate"); // ----Validations Result
const product_variantValidations = require("../validations/product_variantValidation"); // ----Product_Variant Validations
module.exports = Router() // ----Router
  /**
   * @swagger
   * /product_variant/:
   *   post:
   *     tags: [Product_Variant]
   *     summary: Product_Variant yaratish
   *     description: Product_Variant yaratish jarayoni
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
   *               price:
   *                 type: number
   *                 description: Price
   *               color:
   *                 type: string
   *                 description: Color
   *     responses:
   *       200:
   *         description: Product_Variant muvaffaqiyatli yaratildi
   *       500:
   *         description: Ichki Server Xatosi
   */
  .post(
    "/",
    validationsResultate(
      product_variantValidations.postProduct_VariantValidationSchema
    ),
    product_variant.postProduct_Variant
  ) // ----postProduct_Variant

  /**
   * @swagger
   * /product_variant/:
   *   get:
   *     tags: [Product_Variant]
   *     summary: Product_Variantlarni ko'rish
   *     description: Product_Variantni ko'rish jarayoni
   *     responses:
   *       200:
   *         description: Product_Variantlarni muvaffaqiyatli ko'rildi
   *       500:
   *         description: Ichki Server Xatosi
   */
  .get("/", product_variant.getProduct_Variant) // ----getProduct_Variant

  /**
   * @swagger
   * /product_variant/{id}:
   *   get:
   *     tags: [Product_Variant]
   *     summary: Product_Variantni ID bo'yicha ko'rish
   *     description: Product_Variantni ID bo'yicha ko'rish jarayoni
   *     parameters:
   *       - name: id
   *         in: path
   *         required: true
   *         description: Product_Variant ID
   *     responses:
   *       200:
   *         description: Product_Variant muvaffaqiyatli topildi
   *       404:
   *         description: Product_Variant topilmadi
   *       500:
   *         description: Ichki Server Xatosi
   */
  .get("/:id", product_variant.getProduct_VariantById) // ----getProduct_VariantById

  /**
   * @swagger
   * /product_variant/{id}:
   *   patch:
   *     tags: [Product_Variant]
   *     summary: Product_Variantni ID bo'yicha yangilash
   *     description: Product_Variantni ID bo'yicha yangilash jarayoni
   *     parameters:
   *       - name: id
   *         in: path
   *         required: true
   *         description: Product_Variant ID
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               price:
   *                 type: number
   *                 description: Price
   *               color:
   *                 type: string
   *                 description: Color
   *     responses:
   *       200:
   *         description: Product_Variant muvaffaqiyatli yangilandi
   *       404:
   *         description: Product_Variant topilmadi
   *       500:
   *         description: Ichki Server Xatosi
   */
  .patch(
    "/:id",
    validationsResultate(
      product_variantValidations.updateProduct_VariantValidationSchema
    ),
    product_variant.updateProduct_Variant
  ) // ----updateProduct_Variant

  /**
   * @swagger
   * /product_variant/{id}:
   *   delete:
   *     tags: [Product_Variant]
   *     summary: Product_Variantni ID bo'yicha o'chirish
   *     description: Product_Variantni ID bo'yicha o'chirish jarayoni
   *     parameters:
   *       - name: id
   *         in: path
   *         required: true
   *         description: Product_Variant ID
   *     responses:
   *       200:
   *         description: Product_Variant muvaffaqiyatli o'chirildi
   *       404:
   *         description: Product_Variant topilmadi
   *       500:
   *         description: Ichki Server Xatosi
   */
  .delete("/:id", product_variant.deleteProduct_Variant); // ----deleteProduct_Variant
