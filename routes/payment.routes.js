const { Router } = require("express");
const payment = require("../controllers/payment.controller");
module.exports = Router()
  .post("/post", payment.postPayment)
  .get("/get", payment.getPayment)
  .get("/getById/:id", payment.getPaymentById)
  .put("/update/:id", payment.updatePayment)
  .delete("/delete/:id", payment.deletePayment);
