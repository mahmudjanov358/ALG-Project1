const { Router } = require("express"); // ----Express
const admin = require("../controllers/admin.controller"); // ----Admin Controller
const { validationsResultate } = require("../middlewares/validationsResult"); // ----Validations Result
const adminValidations = require("../validations/adminValidation"); // ----Admin Validations
module.exports = Router() // ----Router
  /**
   * @swagger
   * /admin/:
   *   post:
   *     tags: [Admin]
   *     summary: Adminlarni yaratish
   *     description: Adminlar yaratish jarayoni
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               name:
   *                 type: string
   *                 description: Admin nomi
   *               lastName:
   *                 type: string
   *                 description: Admin familiyasi
   *               email:
   *                 type: string
   *                 description: Admin emaili
   *               password:
   *                 type: string
   *                 description: Admin paroli
   *               is_active:
   *                 type: boolean
   *                 description: Admin aktivligi
   *     responses:
   *       200:
   *         description: Admin muvaffaqiyatli yaratildi
   *       500:
   *         description: Ichki Server Xatosi
   */
  .post(
    "/",
    validationsResultate(adminValidations.postAdminValidationSchema),
    admin.postAdmin
  ) // ----postAdmin

  /**
   * @swagger
   * /admin/login:
   *   post:
   *     tags: [Admin]
   *     summary: Adminni tizimga kiritish
   *     description: Adminni tizimga kiritish jarayoni
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               email:
   *                 type: string
   *                 description: Admin emaili
   *               password:
   *                 type: string
   *                 description: Admin paroli
   *     responses:
   *       200:
   *         description: Admin muvaffaqiyatli tizimga kiritildi
   *       400:
   *         description: Admin topilmadi
   *       500:
   *         description: Ichki Server Xatosi
   */
  .post(
    "/login",
    validationsResultate(adminValidations.loginAdminValidationSchema),
    admin.loginAdmin
  ) // ----loginAdmin

  /**
   * @swagger
   * /admin/:
   *   get:
   *     tags: [Admin]
   *     summary: Adminlarni ko'rish
   *     description: Adminlar ro'yhatini ko'rish
   *     responses:
   *       200:
   *         description: Adminlar ro'yhati
   *       500:
   *         description: Ichki Server Xatosi
   */
  .get("/", admin.getAdmin) // ----getAdmin

  /**
   * @swagger
   * /admin/{id}:
   *   get:
   *     tags: [Admin]
   *     summary: Adminni ID bo'yicha olish
   *     description: Adminni ID bo'yicha olish jarayoni
   *     parameters:
   *       - name: id
   *         in: path
   *         required: true
   *         description: Admin ID
   *     responses:
   *       200:
   *         description: Admin ma'lumotlari
   *       404:
   *         description: Admin topilmadi
   *       500:
   *         description: Ichki Server Xatosi
   */
  .get("/:id", admin.getAdminById) // ----getAdminById

  /**
   * @swagger
   * /admin/{id}:
   *   put:
   *     tags: [Admin]
   *     summary: Adminni ID bo'yicha yangilash
   *     description: Adminni ID bo'yicha yangilash jarayoni
   *     parameters:
   *       - name: id
   *         in: path
   *         required: true
   *         description: Admin ID
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               name:
   *                 type: string
   *                 description: Admin nomi
   *               lastName:
   *                 type: string
   *                 description: Admin familiyasi
   *               email:
   *                 type: string
   *                 description: Admin emaili
   *               password:
   *                 type: string
   *                 description: Admin paroli
   *               is_active:
   *                 type: boolean
   *                 description: Admin aktivligi
   *     responses:
   *       200:
   *         description: Admin muvaffaqiyatli yangilandi
   *       404:
   *         description: Admin topilmadi
   *       500:
   *         description: Ichki Server Xatosi
   */
  .put(
    "/:id",
    validationsResultate(adminValidations.updateAdminValidationSchema),
    admin.updateAdmin
  ) // ----updateAdmin

  /**
   * @swagger
   * /admin/{id}:
   *   delete:
   *     tags: [Admin]
   *     summary: Adminni ID bo'yicha o'chirish
   *     description: Adminni ID bo'yicha o'chirish jarayoni
   *     parameters:
   *       - name: id
   *         in: path
   *         required: true
   *         description: Admin ID
   *     responses:
   *       200:
   *         description: Admin muvaffaqiyatli o'chirildi
   *       404:
   *         description: Admin topilmadi
   *       500:
   *         description: Ichki Server Xatosi
   */
  .delete("/:id", admin.deleteAdmin); // ----deleteAdmin
