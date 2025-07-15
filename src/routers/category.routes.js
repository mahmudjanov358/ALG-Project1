const { Router } = require("express"); // ----Express
const category = require("../controllers/category.controller"); // ----Category Controller
const { validationsResultate } = require("../middlewares/validationsResultate"); // ----Validations Result
const categoryValidations = require("../validations/categoryValidation"); // ----Category Validations
module.exports = Router() // ----Router
  /**
   * @swagger
   * /category/:
   *   post:
   *     tags: [Category]
   *     summary: Category yaratish
   *     description: Category yaratish jarayoni
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               name:
   *                 type: string
   *                 description: Category nomi
   *     responses:
   *       200:
   *         description: Category muvaffaqiyatli yaratildi
   *       500:
   *         description: Ichki Server Xatosi
   */
  .post(
    "/",
    validationsResultate(categoryValidations.postCategoryValidationSchema),
    category.postCategory
  ) // ----postCategory

  /**
   * @swagger
   * /category/:
   *   get:
   *     tags: [Category]
   *     summary: Categorylarni ko'rish
   *     description: Categorylarni ko'rish jarayoni
   *     responses:
   *       200:
   *         description: Categorylarni muvaffaqiyatli ko'rildi
   *       500:
   *         description: Ichki Server Xatosi
   */
  .get("/", category.getCategory) // ----getCategory

  /**
   * @swagger
   * /category/{id}:
   *   get:
   *     tags: [Category]
   *     summary: Categoryni ID bo'yicha ko'rish
   *     description: Categoryni ID bo'yicha ko'rish jarayoni
   *     parameters:
   *       - name: id
   *         in: path
   *         required: true
   *         description: Category ID
   *     responses:
   *       200:
   *         description: Category muvaffaqiyatli topildi
   *       404:
   *         description: Category topilmadi
   *       500:
   *         description: Ichki Server Xatosi
   */
  .get("/:id", category.getCategoryById) // ----getCategoryById

  /**
   * @swagger
   * /category/{id}:
   *   put:
   *     tags: [Category]
   *     summary: Categoryni ID bo'yicha yangilash
   *     description: Categoryni ID bo'yicha yangilash jarayoni
   *     parameters:
   *       - name: id
   *         in: path
   *         required: true
   *         description: Category ID
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               name:
   *                 type: string
   *                 description: Category nomi
   *     responses:
   *       200:
   *         description: Category muvaffaqiyatli yangilandi
   *       404:
   *         description: Category topilmadi
   *       500:
   *         description: Ichki Server Xatosi
   */
  .put(
    "/:id",
    validationsResultate(categoryValidations.updateCategoryValidationSchema),
    category.updateCategory
  ) // ----updateCategory

  /**
   * @swagger
   * /category/{id}:
   *   delete:
   *     tags: [Category]
   *     summary: Categoryni ID bo'yicha o'chirish
   *     description: Categoryni ID bo'yicha o'chirish jarayoni
   *     parameters:
   *       - name: id
   *         in: path
   *         required: true
   *         description: Category ID
   *     responses:
   *       200:
   *         description: Category muvaffaqiyatli o'chirildi
   *       404:
   *         description: Category topilmadi
   *       500:
   *         description: Ichki Server Xatosi
   */
  .delete("/:id", category.deleteCategory); // ----deleteCategory
