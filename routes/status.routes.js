const { Router } = require("express"); // ----Express
const status = require("../controllers/status.controller"); // ----Status Controller
const { validationsResultate } = require("../middlewares/validationsResultate"); // ----Validations Result
const statusValidations = require("../validations/statusValidation"); // ----Status Validations
module.exports = Router() // ----Router
  /**
   * @swagger
   * /status/:
   *   post:
   *     tags: [Status]
   *     summary: Status yaratish
   *     description: Status yaratish jarayoni
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               status:
   *                 type: string
   *                 description: Status
   *     responses:
   *       200:
   *         description: Status muvaffaqiyatli yaratildi
   *       500:
   *         description: Ichki Server Xatosi
   */
  .post(
    "/",
    validationsResultate(statusValidations.postStatusValidationSchema),
    status.postStatus
  ) // ----postStatus

  /**
   * @swagger
   * /status/:
   *   get:
   *     tags: [Status]
   *     summary: Statuslsrni ko'rish
   *     description: Statuslsrni ko'rish jarayoni
   *     responses:
   *       200:
   *         description: Statuslarni muvaffaqiyatli ko'rildi
   *       500:
   *         description: Ichki Server Xatosi
   */
  .get("/", status.getStatus) // ----getStatus

  /**
   * @swagger
   * /status/{id}:
   *   get:
   *     tags: [Status]
   *     summary: Statusni ID bo'yicha ko'rish
   *     description: Statusni ID bo'yicha ko'rish jarayoni
   *     parameters:
   *       - name: id
   *         in: path
   *         required: true
   *         description: Status ID
   *     responses:
   *       200:
   *         description: Status muvaffaqiyatli topildi
   *       404:
   *         description: Status topilmadi
   *       500:
   *         description: Ichki Server Xatosi
   */
  .get("/:id", status.getStatusById) // ----getStatusById

  /**
   * @swagger
   * /status/{id}:
   *   put:
   *     tags: [Status]
   *     summary: Statusni ID bo'yicha yangilash
   *     description: Statusni ID bo'yicha yangilash jarayoni
   *     parameters:
   *       - name: id
   *         in: path
   *         required: true
   *         description: Status ID
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               status:
   *                 type: string
   *                 description: Status
   *     responses:
   *       200:
   *         description: Status muvaffaqiyatli yangilandi
   *       404:
   *         description: Status topilmadi
   *       500:
   *         description: Ichki Server Xatosi
   */
  .put(
    "/:id",
    validationsResultate(statusValidations.updateStatusValidationSchema),
    status.updateStatus
  ) // ----updateStatus

  /**
   * @swagger
   * /status/{id}:
   *   delete:
   *     tags: [Status]
   *     summary: Statusni ID bo'yicha o'chirish
   *     description: Statusni ID bo'yicha o'chirish jarayoni
   *     parameters:
   *       - name: id
   *         in: path
   *         required: true
   *         description: Status ID
   *     responses:
   *       200:
   *         description: Status muvaffaqiyatli o'chirildi
   *       404:
   *         description: Status topilmadi
   *       500:
   *         description: Ichki Server Xatosi
   */
  .delete("/:id", status.deleteStatus); // ----deleteStatus
