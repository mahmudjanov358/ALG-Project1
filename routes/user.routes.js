const { Router } = require("express");
const user = require("../controllers/user.controller");
module.exports = Router()
  /**
   * @swagger
   * /user/post:
   *   post:
   *     tags: [User]
   *     summary: User yaratish
   *     description: User yaratish jarayoni
   */
  .post("/post", user.postUser) // ----postUser

  /**
   * @swagger
   * /user/get:
   *   get:
   *     tags: [User]
   *     summary: Userlar ko'rish
   *     description: Userlar ro'yhatini ko'rish
   */
  .get("/get", user.getUser) // ----getUser

  /**
   * @swagger
   * /user/getById/{id}:
   *   get:
   *     tags: [User]
   *     summary: Userni ID bo'yicha olish
   *     description: Userni ID bo'yicha olish jarayoni
   */
  .get("/getById/:id", user.getUserById) // ----getUserById

  /**
   * @swagger
   * /user/update/{id}:
   *   put:
   *     tags: [User]
   *     summary: Userni ID bo'yicha  yangilash
   *     description: Userni ID bo'yicha yangilash jarayoni
   */
  .put("/update/:id", user.updateUser) // ----updateUser

  /**
   * @swagger
   * /user/delete/{id}:
   *   delete:
   *     tags: [User]
   *     summary: Userni ID bo'yicha o'chirish
   *     description: Userni ID bo'yicha o'chirish jarayoni
   */
  .delete("/delete/:id", user.deleteUser); // ----deleteUser
