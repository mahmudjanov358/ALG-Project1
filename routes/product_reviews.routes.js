const { Router } = require("express"); // ----Express
const product_reviews = require("../controllers/product_reviews.controller"); // ----Product_Reviews Controller
const { validationsResultate } = require("../middlewares/validationsResultate"); // ----Validations Result
const product_reviewsValidations = require("../validations/product_reviewsValidation"); // ----Product_Reviews Validations
module.exports = Router() // ----Router
  /**
   * @swagger
   * /product_reviews/:
   *   post:
   *     tags: [Product_Reviews]
   *     summary: Product_Reviews yaratish
   *     description: Product_Reviews yaratish jarayoni
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
   *               product_id:
   *                 type: string
   *                 description: Product ID
   *               review_text:
   *                 type: string
   *                 description: Review text
   *               rating:
   *                 type: number
   *                 description: Rating
   *     responses:
   *       200:
   *         description: Product_Reviews muvaffaqiyatli yaratildi
   *       500:
   *         description: Ichki Server Xatosi
   */
  .post(
    "/",
    validationsResultate(
      product_reviewsValidations.postProduct_ReviewsValidationSchema
    ),
    product_reviews.postProduct_Reviews
  ) // ----postProduct_Reviews

  /**
   * @swagger
   * /product_reviews/:
   *   get:
   *     tags: [Product_Reviews]
   *     summary: Product_Reviewslarni ko'rish
   *     description: Product_Reviewslarni ko'rish jarayoni
   *     responses:
   *       200:
   *         description: Product_Reviewslarni muvaffaqiyatli ko'rildi
   *       500:
   *         description: Ichki Server Xatosi
   */
  .get("/", product_reviews.getProduct_Reviews) // ----getProduct_Reviews

  /**
   * @swagger
   * /product_reviews/{id}:
   *   get:
   *     tags: [Product_Reviews]
   *     summary: Product_Reviewsni ID bo'yicha ko'rish
   *     description: Product_Reviewsni ID bo'yicha ko'rish jarayoni
   *     parameters:
   *       - name: id
   *         in: path
   *         required: true
   *         description: Product_Reviews ID
   *     responses:
   *       200:
   *         description: Product_Reviews muvaffaqiyatli topildi
   *       404:
   *         description: Product_Reviews topilmadi
   *       500:
   *         description: Ichki Server Xatosi
   */
  .get("/:id", product_reviews.getProduct_ReviewsById) // ----getProduct_ReviewsById

  /**
   * @swagger
   * /product_reviews/{id}:
   *   patch:
   *     tags: [Product_Reviews]
   *     summary: Product_Reviewsni ID bo'yicha yangilash
   *     description: Product_Reviewsni ID bo'yicha yangilash jarayoni
   *     parameters:
   *       - name: id
   *         in: path
   *         required: true
   *         description: Product_Reviews ID
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               review_text:
   *                 type: string
   *                 description: Review text
   *               rating:
   *                 type: number
   *                 description: Rating
   *     responses:
   *       200:
   *         description: Product_Reviews muvaffaqiyatli yangilandi
   *       404:
   *         description: Product_Reviews topilmadi
   *       500:
   *         description: Ichki Server Xatosi
   */
  .patch(
    "/:id",
    validationsResultate(
      product_reviewsValidations.updateProduct_ReviewsValidationSchema
    ),
    product_reviews.updateProduct_Reviews
  ) // ----updateProduct_Reviews

  /**
   * @swagger
   * /product_reviews/{id}:
   *   delete:
   *     tags: [Product_Reviews]
   *     summary: Product_Reviewsni ID bo'yicha o'chirish
   *     description: Product_Reviewsni ID bo'yicha o'chirish jarayoni
   *     parameters:
   *       - name: id
   *         in: path
   *         required: true
   *         description: Product_Reviews ID
   *     responses:
   *       200:
   *         description: Product_Reviews muvaffaqiyatli o'chirildi
   *       404:
   *         description: Product_Reviews topilmadi
   *       500:
   *         description: Ichki Server Xatosi
   */
  .delete("/:id", product_reviews.deleteProduct_Reviews); // ----deleteProduct_Reviews
