const { Router } = require("express");
const cart = require("../controllers/cart.controller");
module.exports = Router()
  .post("/post", cart.postCart)
  .get("/get", cart.getCart)
  .get("/get/:id", cart.getCartById)
  .delete("/delete/:id", cart.deleteCart);
