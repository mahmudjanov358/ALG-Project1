const { Router } = require("express"); // ----Express
const user = require("../controllers/user.controller"); // ----User Controller
const { validationsResultate } = require("../middlewares/validationsResultate"); // ----Validations Result
const userValidations = require("../validations/userValidation"); // ----User Validations
module.exports = Router() // ----Router
  /**
   * @swagger
   * /user/:
   *   post:
   *     tags: [User]
   *     summary: User yaratish
   *     description: User yaratish jarayoni
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               username:
   *                 type: string
   *                 description: Username
   *               name:
   *                 type: string
   *                 description: Name
   *               lastName:
   *                 type: string
   *                 description: Last Name
   *               phone:
   *                 type: string
   *                 description: Phone
   *               email:
   *                 type: string
   *                 description: Email
   *               address:
   *                 type: string
   *                 description: Address
   *               photo:
   *                 type: string
   *                 description: Photo
   *     responses:
   *       200:
   *         description: User muvaffaqiyatli yaratildi
   *       500:
   *         description: Ichki Server Xatosi
   */
  .post(
    "/",
    validationsResultate(userValidations.postUserValidationSchema),
    user.postUser
  ) // ----postUser

  /**
   * @swagger
   * /user/:
   *   get:
   *     tags: [User]
   *     summary: Userlar ko'rish
   *     description: Userlar ro'yhatini ko'rish
   *     responses:
   *       200:
   *         description: Userlarni muvaffaqiyatli ko'rildi
   *       500:
   *         description: Ichki Server Xatosi
   */
  .get("/", user.getUser) // ----getUser

  /**
   * @swagger
   * /user/{id}:
   *   get:
   *     tags: [User]
   *     summary: Userni ID bo'yicha olish
   *     description: Userni ID bo'yicha olish jarayoni
   *     parameters:
   *       - name: id
   *         in: path
   *         required: true
   *         description: User ID
   *     responses:
   *       200:
   *         description: User muvaffaqiyatli topildi
   *       404:
   *         description: User topilmadi
   *       500:
   *         description: Ichki Server Xatosi
   */
  .get("/:id", user.getUserById) // ----getUserById

  /**
   * @swagger
   * /user/{id}:
   *   put:
   *     tags: [User]
   *     summary: Userni ID bo'yicha  yangilash
   *     description: Userni ID bo'yicha yangilash jarayoni
   *     parameters:
   *       - name: id
   *         in: path
   *         required: true
   *         description: User ID
   *     responses:
   *       200:
   *         description: User muvaffaqiyatli yangilandi
   *       404:
   *         description: User topilmadi
   *       500:
   *         description: Ichki Server Xatosi
   */
  .put(
    "/:id",
    validationsResultate(userValidations.updateUserValidationSchema),
    user.updateUser
  ) // ----updateUser

  /**
   * @swagger
   * /user/{id}:
   *   delete:
   *     tags: [User]
   *     summary: Userni ID bo'yicha o'chirish
   *     description: Userni ID bo'yicha o'chirish jarayoni
   *     parameters:
   *       - name: id
   *         in: path
   *         required: true
   *         description: User ID
   *     responses:
   *       200:
   *         description: User muvaffaqiyatli o'chirildi
   *       404:
   *         description: User topilmadi
   *       500:
   *         description: Ichki Server Xatosi
   */
  .delete("/:id", user.deleteUser); // ----deleteUser
