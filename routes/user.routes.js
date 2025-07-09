const { Router } = require("express");
const user = require("../controllers/user.controller");
module.exports = Router()
  /**
   * @swagger
   * /user/post:
   *   post:
   *     summary: User yaratish
   *     tags: [User]
   *     description: User yaratish jarayoni
   */
  .post("/post", user.postUser)

  /**
   * @swagger
   * /user/get:
   *   get:
   *     summary: Userlar ko'rish
   *     tags: [User]
   *     description: Userlar ro'yhatini ko'rish
   */
  .get("/get", user.getUser)

  /**
   * @swagger
   * /user/getById/{id}:
   *   get:
   *     summary: Userni ID bo'yicha olish
   *     tags: [User]
   *     description: Userni ID bo'yicha olish jarayoni
   */
  .get("/getById/:id", user.getUserById)

  /**
   * @swagger
   * /user/update/{id}:
   *   put:
   *     summary: Userni ID bo'yicha  yangilash
   *     tags: [User]
   *     description: Userni ID bo'yicha yangilash jarayoni
   */
  .put("/update/:id", user.updateUser)

  /**
   * @swagger
   * /user/delete/{id}:
   *   delete:
   *     summary: Userni ID bo'yicha o'chirish
   *     tags: [User]
   *     description: Userni ID bo'yicha o'chirish jarayoni
   */
  .delete("/delete/:id", user.deleteUser);
