const { Router } = require("express");
const order_details = require("../controllers/order_details.controller");
module.exports = Router()
  .post("/post", order_details.postOrder_Details)
  .get("/get", order_details.getOrder_Details)
  .get("/getById/:id", order_details.getOrder_DetailsById)
  .patch("/update/:id", order_details.updateOrder_Details)
  .delete("/delete/:id", order_details.deleteOrder_Details);
