const { Router } = require("express");
const order = require("../controllers/order.controller");
module.exports = Router()
  .post("/post", order.postOrder) // ----postOrder
  .get("/get", order.getOrder) // ----getOrder
  .get("/getById/:id", order.getOrderById) // ----getOrderById
  .delete("/delete/:id", order.deleteOrder); // ----deleteOrder
