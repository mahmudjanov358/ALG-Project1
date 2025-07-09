const { Router } = require("express");
const discount = require("../controllers/discount.controller");
module.exports = Router()
  .post("/post", discount.postDiscount)
  .get("/get", discount.getDiscount)
  .get("/getById/:id", discount.getDiscountById)
  .put("/update/:id", discount.updateDiscount)
  .delete("/delete/:id", discount.deleteDiscount);
