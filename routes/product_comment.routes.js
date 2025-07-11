const { Router } = require("express"); // ----Express
const product_comment = require("../controllers/product_comment.controller"); // ----Product_Comment Controller
const { validationsResultate } = require("../middlewares/validationsResultate"); // ----Validations Result
const product_commentValidations = require("../validations/product_commentValidation"); // ----Product_Comment Validations
module.exports = Router() // ----Router
  /**
   * @swagger
   * /product_comment/:
   *   post:
   *     tags: [Product_Comment]
   *     summary: Product_Comment yaratish
   *     description: Product_Comment yaratish jarayoni
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
   *               comment:
   *                 type: string
   *                 description: Comment
   *     responses:
   *       200:
   *         description: Product_Comment muvaffaqiyatli yaratildi
   *       500:
   *         description: Ichki Server Xatosi
   */
  .post(
    "/",
    validationsResultate(
      product_commentValidations.postProduct_CommentValidationSchema
    ),
    product_comment.postProduct_Comment
  ) // ----postProduct_Comment

  /**
   * @swagger
   * /product_comment/:
   *   get:
   *     tags: [Product_Comment]
   *     summary: Product_Commentlarni ko'rish
   *     description: Product_Commentlarni ko'rish jarayoni
   *     responses:
   *       200:
   *         description: Product_Commentlarni muvaffaqiyatli ko'rildi
   *       500:
   *         description: Ichki Server Xatosi
   */
  .get("/", product_comment.getProduct_Comment) // ----getProduct_Comment

  /**
   * @swagger
   * /product_comment/{id}:
   *   get:
   *     tags: [Product_Comment]
   *     summary: Product_Commentni ID bo'yicha ko'rish
   *     description: Product_Commentni ID bo'yicha ko'rish jarayoni
   *     parameters:
   *       - name: id
   *         in: path
   *         required: true
   *         description: Product_Comment ID
   *     responses:
   *       200:
   *         description: Product_Comment muvaffaqiyatli topildi
   *       404:
   *         description: Product_Comment topilmadi
   *       500:
   *         description: Ichki Server Xatosi
   */
  .get("/:id", product_comment.getProduct_CommentById) // ----getProduct_CommentById

  /**
   * @swagger
   * /product_comment/{id}:
   *   patch:
   *     tags: [Product_Comment]
   *     summary: Product_Commentni ID bo'yicha yangilash
   *     description: Product_Commentni ID bo'yicha yangilash jarayoni
   *     parameters:
   *       - name: id
   *         in: path
   *         required: true
   *         description: Product_Comment ID
   *     responses:
   *       200:
   *         description: Product_Comment muvaffaqiyatli yangilandi
   *       404:
   *         description: Product_Comment topilmadi
   *       500:
   *         description: Ichki Server Xatosi
   */
  .patch(
    "/:id",
    validationsResultate(
      product_commentValidations.updateProduct_CommentValidationSchema
    ),
    product_comment.updateProduct_Comment
  ) // ----updateProduct_Comment

  /**
   * @swagger
   * /product_comment/{id}:
   *   delete:
   *     tags: [Product_Comment]
   *     summary: Product_Commentni ID bo'yicha o'chirish
   *     description: Product_Commentni ID bo'yicha o'chirish jarayoni
   *     parameters:
   *       - name: id
   *         in: path
   *         required: true
   *         description: Product_Comment ID
   *     responses:
   *       200:
   *         description: Product_Comment muvaffaqiyatli o'chirildi
   *       404:
   *         description: Product_Comment topilmadi
   *       500:
   *         description: Ichki Server Xatosi
   */
  .delete("/:id", product_comment.deleteProduct_Comment); // ----deleteProduct_Comment
