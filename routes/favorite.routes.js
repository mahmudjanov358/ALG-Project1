const { Router } = require("express"); // ----Express
const favorite = require("../controllers/favorite.controller"); // ----Favorite Controller
const { validationsResultate } = require("../middlewares/validationsResultate"); // ----Validations Result
const favoriteValidations = require("../validations/favoriteValidation"); // ----Favorite Validations
module.exports = Router() // ----Router
  /**
   * @swagger
   * /favorite/:
   *   post:
   *     tags: [Favorite]
   *     summary: Favorite yaratish
   *     description: Favorite yaratish jarayoni
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
   *     responses:
   *       200:
   *         description: Favorite muvaffaqiyatli yaratildi
   *       500:
   *         description: Ichki Server Xatosi
   */
  .post(
    "/",
    validationsResultate(favoriteValidations.postFavoriteValidationSchema),
    favorite.postFavorite
  ) // ----postFavorite

  /**
   * @swagger
   * /favorite/:
   *   get:
   *     tags: [Favorite]
   *     summary: Favoritelarni ko'rish
   *     description: Favoritelarni ko'rish jarayoni
   *     responses:
   *       200:
   *         description: Favoritelarni muvaffaqiyatli ko'rildi
   *       500:
   *         description: Ichki Server Xatosi
   */
  .get("/", favorite.getFavorite) // ----getFavorite

  /**
   * @swagger
   * /favorite/{id}:
   *   get:
   *     tags: [Favorite]
   *     summary: Favoriteni ID bo'yicha ko'rish
   *     description: Favoriteni ID bo'yicha ko'rish
   *     parameters:
   *       - name: id
   *         in: path
   *         required: true
   *         description: Favorite ID
   *     responses:
   *       200:
   *         description: Favorite muvaffaqiyatli topildi
   *       404:
   *         description: Favorite topilmadi
   *       500:
   *         description: Ichki Server Xatosi
   */
  .get("/:id", favorite.getFavoriteById) // ----getFavoriteById

  /**
   * @swagger
   * /favorite/{id}:
   *   delete:
   *     tags: [Favorite]
   *     summary: Favoriteni ID bo'yicha o'chirish
   *     description: Favoriteni ID bo'yicha o'chirish jarayoni
   *     parameters:
   *       - name: id
   *         in: path
   *         required: true
   *         description: Favorite ID
   *     responses:
   *       200:
   *         description: Favorite muvaffaqiyatli o'chirildi
   *       404:
   *         description: Favorite topilmadi
   *       500:
   *         description: Ichki Server Xatosi
   */
  .delete("/:id", favorite.deleteFavorite); // ----deleteFavorite
