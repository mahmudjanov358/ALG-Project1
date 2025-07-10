const { Router } = require("express"); // ----Express
const discount = require("../controllers/discount.controller"); // ----Discount Controller
module.exports = Router() // ----Router
  /**
   * @swagger
   * /discount/post:
   *   post:
   *     tags: [Discount]
   *     summary: Discount yaratish
   *     description: Discount yaratish jarayoni
   */
  .post("/post", discount.postDiscount) // ----postDiscount

  /**
   * @swagger
   * /discount/get:
   *   get:
   *     tags: [Discount]
   *     summary: Discountlarni ko'rish
   *     description: Discountlarni ko'rish jarayoni
   */
  .get("/get", discount.getDiscount) // ----getDiscount

  /**
   * @swagger
   * /discount/getById/{id}:
   *   get:
   *     tags: [Discount]
   *     summary: Discountni ID bo'yicha ko'rish
   *     description: Discountni ID bo'yicha ko'rish jarayoni
   */
  .get("/getById/:id", discount.getDiscountById) // ----getDiscountById

  /**
   * @swagger
   * /discount/update/{id}:
   *   put:
   *     tags: [Discount]
   *     summary: Discountni ID bo'yicha yangilash
   *     description: Discountni ID bo'yicha yangilash jarayoni
   */
  .put("/update/:id", discount.updateDiscount) // ----updateDiscount

  /**
   * @swagger
   * /discount/delete/{id}:
   *   delete:
   *     tags: [Discount]
   *     summary: Discountni ID bo'yicha o'chirish
   *     description: Discountni ID bo'yicha o'chirish jarayoni
   */
  .delete("/delete/:id", discount.deleteDiscount); // ----deleteDiscount
