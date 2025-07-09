const { Router } = require("express");
const favorite = require("../controllers/favorite.controller");
module.exports = Router()
  .post("/post", favorite.postFavorite)
  .get("/get", favorite.getFavorite)
  .get("/getById/:id", favorite.getFavoriteById)
  .delete("/delete/:id", favorite.deleteFavorite);
