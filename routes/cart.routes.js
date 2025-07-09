const { Router } = require("express");
const cart = require("../controllers/cart.controller");
module.exports = Router()
  .post("/post", cart.postCart) // ----postCart
  .get("/get", cart.getCart) // ----getCart
  .get("/get/:id", cart.getCartById) // ----getCartById
  .delete("/delete/:id", cart.deleteCart); // ----deleteCart
