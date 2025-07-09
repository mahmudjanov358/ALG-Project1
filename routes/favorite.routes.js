const { Router } = require("express");
const favorite = require("../controllers/favorite.controller");
module.exports = Router()
  /**
   * @swagger
   * /favorite/post:
   *   post:
   *     tags: [Favorite]
   *     summary: Favorite yaratish
   *     description: Favorite yaratish jarayoni
   */
  .post("/post", favorite.postFavorite) // ----postFavorite

  /**
   * @swagger
   * /favorite/get:
   *   get:
   *     tags: [Favorite]
   *     summary: Favoritelarni ko'rish
   *     description: Favoritelarni ko'rish jarayoni
   */
  .get("/get", favorite.getFavorite) // ----getFavorite

  /**
   * @swagger
   * /favorite/getById/{id}:
   *   get:
   *     tags: [Favorite]
   *     summary: Favoriteni ID bo'yicha ko'rish
   *     description: Favoriteni ID bo'yicha ko'rish
   */
  .get("/getById/:id", favorite.getFavoriteById) // ----getFavoriteById

  /**
   * @swagger
   * /favorite/delete/{id}:
   *   delete:
   *     tags: [Favorite]
   *     summary: Favoriteni ID bo'yicha o'chirish
   *     description: Favoriteni ID bo'yicha o'chirish jarayoni
   */
  .delete("/delete/:id", favorite.deleteFavorite); // ----deleteFavorite
