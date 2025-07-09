const { Router } = require("express");
const admin = require("../controllers/admin.controller");
module.exports = Router()
  /**
   * @swagger
   * /admin/post:
   *   post:
   *     summary: Adminlarni yaratish
   *     tags: [Admin]
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
   *                 description: Admin Name
   *               lastName:
   *                 type: string
   *                 description: Admin Last Name
   *               email:
   *                 type: string
   *                 description: Admin Email
   *               password:
   *                 type: string
   *                 description: Admin Password
   *               is_active:
   *                 type: string
   *                 description: Admin Activele
   *     responses:
   *       200:
   *         description: Admin muvaffaqiyatli yaratildi
   *       500:
   *         description: Ichki Server Error
   */
  .post("/post", admin.postAdmin)

  /**
   * @swagger
   * /admin/login:
   *   post:
   *     summary: Adminni tizimga kiritish
   *     tags: [Admin]
   *     description: Adminni tizimga kiritish jarayoni
   */
  .post("/login", admin.loginAdmin)

  /**
   * @swagger
   * /admin/get:
   *   get:
   *     summary: Adminlarni ko'rish
   *     tags: [Admin]
   *     description: Adminlar ro'yhatini ko'rish
   *     responses:
   *       200:
   *         description: Adminlar ro'yhati
   *       500:
   *         description: Ichki Server Xatosi
   */
  .get("/get", admin.getAdmin)

  /**
   * @swagger
   * /admin/getById/{id}:
   *   get:
   *     summary: Adminni ID bo'yicha olish
   *     tags: [Admin]
   *     description: Adminni ID bo'yicha olish jarayoni
   */
  .get("/getById/:id", admin.getAdminById)

  /**
   * @swagger
   * /admin/update/{id}:
   *   put:
   *     summary: Adminni ID bo'yicha yangilash
   *     tags: [Admin]
   *     description: Adminni ID bo'yicha yangilash jarayoni
   */
  .put("/update/:id", admin.updateAdmin)

  /**
   * @swagger
   * /admin/delete/{id}:
   *   delete:
   *     summary: Adminni ID bo'yicha o'chirish
   *     tags: [Admin]
   *     description: Adminni ID bo'yicha o'chirish jarayoni
   */
  .delete("/delete/:id", admin.deleteAdmin);
