const { Router } = require("express"); // ----Express
const status = require("../controllers/status.controller"); // ----Status Controller
module.exports = Router() // ----Router
  /**
   * @swagger
   * /status/post:
   *   post:
   *     tags: [Status]
   *     summary: Status yaratish
   *     description: Status yaratish jarayoni
   */
  .post("/post", status.postStatus) // ----postStatus

  /**
   * @swagger
   * /status/get:
   *   get:
   *     tags: [Status]
   *     summary: Statuslsrni ko'rish
   *     description: Statuslsrni ko'rish jarayoni
   */
  .get("/get", status.getStatus) // ----getStatus

  /**
   * @swagger
   * /status/getById/{id}:
   *   get:
   *     tags: [Status]
   *     summary: Statusni ID bo'yicha ko'rish
   *     description: Statusni ID bo'yicha ko'rish jarayoni
   */
  .get("/getById/:id", status.getStatusById) // ----getStatusById

  /**
   * @swagger
   * /status/update/{id}:
   *   put:
   *     tags: [Status]
   *     summary: Statusni ID bo'yicha yangilash
   *     description: Statusni ID bo'yicha yangilash jarayoni
   */
  .put("/update/:id", status.updateStatus) // ----updateStatus

  /**
   * @swagger
   * /status/delete/{id}:
   *   delete:
   *     tags: [Status]
   *     summary: Statusni ID bo'yicha o'chirish
   *     description: Statusni ID bo'yicha o'chirish jarayoni
   */
  .delete("/delete/:id", status.deleteStatus); // ----deleteStatus
