const { Router } = require("express"); // ----Express
const admin = require("../controllers/admin.controller"); // ----Admin Controller
module.exports = Router() // ----Router
  /**
   * @swagger
   * /admin/post:
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
  .post("/post", admin.postAdmin) // ----postAdmin

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
   *                 description: Admin Email
   *               password:
   *                 type: string
   *                 description: Admin Password
   *     responses:
   *       200:
   *         description: Admin muvaffaqiyatli tizimga kiritildi
   *       400:
   *         description: Admin topilmadi
   *       500:
   *         description: Ichki Server Xatosi
   */
  .post("/login", admin.loginAdmin) // ----loginAdmin

  /**
   * @swagger
   * /admin/get:
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
  .get("/get", admin.getAdmin) // ----getAdmin

  /**
   * @swagger
   * /admin/getById/{id}:
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
  .get("/getById/:id", admin.getAdminById) // ----getAdminById

  /**
   * @swagger
   * /admin/update/{id}:
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
   *         description: Admin muvaffaqiyatli yangilandi
   *       404:
   *         description: Admin topilmadi
   *       500:
   *         description: Ichki Server Xatosi
   */
  .put("/update/:id", admin.updateAdmin) // ----updateAdmin

  /**
   * @swagger
   * /admin/delete/{id}:
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
  .delete("/delete/:id", admin.deleteAdmin); // ----deleteAdmin
