const { Router } = require("express");
const order = require("../controllers/order.controller");
module.exports = Router()
  .post("/post", order.postOrder)
  .get("/get", order.getOrder)
  .get("/getById/:id", order.getOrderById)
  .delete("/delete/:id", order.deleteOrder);
