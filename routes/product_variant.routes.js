const { Router } = require("express");
const product_variant = require("../controllers/product_variant.controller");
module.exports = Router()
  /**
   * @swagger
   * /product_variant/post:
   *   post:
   *     tags: [Product_Variant]
   *     summary: Product_Variant yaratish
   *     description: Product_Variant yaratish jarayoni
   */
  .post("/post", product_variant.postProduct_Variant) // ----postProduct_Variant

  /**
   * @swagger
   * /product_variant/get:
   *   get:
   *     tags: [Product_Variant]
   *     summary: Product_Variantlarni ko'rish
   *     description: Product_Variantni ko'rish jarayoni
   */
  .get("/get", product_variant.getProduct_Variant) // ----getProduct_Variant

  /**
   * @swagger
   * /product_variant/getById/{id}:
   *   get:
   *     tags: [Product_Variant]
   *     summary: Product_Variantni ID bo'yicha ko'rish
   *     description: Product_Variantni ID bo'yicha ko'rish jarayoni
   */
  .get("/getById/:id", product_variant.getProduct_VariantById) // ----getProduct_VariantById

  /**
   * @swagger
   * /product_variant/update/{id}:
   *   patch:
   *     tags: [Product_Variant]
   *     summary: Product_Variantni ID bo'yicha yangilash
   *     description: Product_Variantni ID bo'yicha yangilash jarayoni
   */
  .patch("/update/:id", product_variant.updateProduct_Variant) // ----updateProduct_Variant

  /**
   * @swagger
   * /product_variant/delete/{id}:
   *   delete:
   *     tags: [Product_Variant]
   *     summary: Product_Variantni ID bo'yicha o'chirish
   *     description: Product_Variantni ID bo'yicha o'chirish jarayoni
   */
  .delete("/delete/:id", product_variant.deleteProduct_Variant); // ----deleteProduct_Variant
