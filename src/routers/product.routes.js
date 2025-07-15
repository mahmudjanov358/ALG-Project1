const { Router } = require("express"); // ----Express
const product = require("../controllers/product.controller"); // ----Product Controller
const { validationsResultate } = require("../middlewares/validationsResultate"); // ----Validations Result
const productValidations = require("../validations/productValidation"); // ----Product Validations
module.exports = Router() // ----Router
  /**
   * @swagger
   * /product/:
   *   post:
   *     tags: [Product]
   *     summary: Product yaratish
   *     description: Product yaratish jarayoni
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               name:
   *                 type: string
   *                 description: Product nomi
   *               description:
   *                 type: string
   *                 description: Product tavsifi
   *               photo:
   *                 type: string
   *                 description: Product rasmi
   *               price:
   *                 type: number
   *                 description: Product narxi
   *               count:
   *                 type: number
   *                 description: Product soni
   *               category_id:
   *                 type: string
   *                 description: Category ID
   *               discount_id:
   *                 type: string
   *                 description: Discount ID
   *     responses:
   *       200:
   *         description: Product muvaffaqiyatli yaratildi
   *       500:
   *         description: Ichki Server Xatosi
   */
  .post(
    "/",
    validationsResultate(productValidations.postProductValidationSchema),
    product.postProduct
  ) // ----postProduct

  /**
   * @swagger
   * /product/:
   *   get:
   *     tags: [Product]
   *     summary: Productlarni ko'rish
   *     description: Productlarni ko'rish jarayoni
   *     responses:
   *       200:
   *         description: Productlarni muvaffaqiyatli ko'rildi
   *       500:
   *         description: Ichki Server Xatosi
   */
  .get("/", product.getProduct) // ----getProduct

  /**
   * @swagger
   * /product/{id}:
   *   get:
   *     tags: [Product]
   *     summary: Productni ID bo'yicha
   *     description: Productni ID bo'yicha jarayoni
   *     parameters:
   *       - name: id
   *         in: path
   *         required: true
   *         description: Product ID
   *     responses:
   *       200:
   *         description: Product muvaffaqiyatli topildi
   *       404:
   *         description: Product topilmadi
   *       500:
   *         description: Ichki Server Xatosi
   */
  .get("/:id", product.getProductById) // ----getProductById

  /**
   * @swagger
   * /product/{id}:
   *   patch:
   *     tags: [Product]
   *     summary: Productni ID bo'yicha yangilash
   *     description: Productni ID bo'yicha yangilash jarayoni
   *     parameters:
   *       - name: id
   *         in: path
   *         required: true
   *         description: Product ID
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               name:
   *                 type: string
   *                 description: Product nomi
   *               description:
   *                 type: string
   *                 description: Product tavsifi
   *               photo:
   *                 type: string
   *                 description: Product rasmi
   *               price:
   *                 type: number
   *                 description: Product narxi
   *               count:
   *                 type: number
   *     responses:
   *       200:
   *         description: Product muvaffaqiyatli yangilandi
   *       404:
   *         description: Product topilmadi
   *       500:
   *         description: Ichki Server Xatosi
   */
  .patch(
    "/:id",
    validationsResultate(productValidations.updateProductValidationSchema),
    product.updateProduct
  ) // ----updateProduct

  /**
   * @swagger
   * /product/{id}:
   *   delete:
   *     tags: [Product]
   *     summary: Productni ID bo'yicha o'chirish
   *     description: Productni ID bo'yicha o'chirish jarayoni
   *     parameters:
   *       - name: id
   *         in: path
   *         required: true
   *         description: Product ID
   *     responses:
   *       200:
   *         description: Product muvaffaqiyatli o'chirildi
   *       404:
   *         description: Product topilmadi
   *       500:
   *         description: Ichki Server Xatosi
   */
  .delete("/:id", product.deleteProduct); // ----deleteProduct
