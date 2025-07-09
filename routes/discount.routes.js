const { Router } = require("express");
const discount = require("../controllers/discount.controller");
module.exports = Router()
  .post("/post", discount.postDiscount) // ----postDiscount
  .get("/get", discount.getDiscount) // ----getDiscount
  .get("/getById/:id", discount.getDiscountById) // ----getDiscountById
  .put("/update/:id", discount.updateDiscount) // ----updateDiscount
  .delete("/delete/:id", discount.deleteDiscount); // ----deleteDiscount
