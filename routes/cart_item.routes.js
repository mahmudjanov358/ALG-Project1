const { Router } = require("express");
const cart_item = require("../controllers/cart_item.controller");
module.exports = Router()
  .post("/post", cart_item.postCart_Item)
  .get("/get", cart_item.getCart_Item)
  .get("/get/:id", cart_item.getCart_ItemById)
  .delete("/delete/:id", cart_item.deleteCart_Item);
