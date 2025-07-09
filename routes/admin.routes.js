const { Router } = require("express");
const admin = require("../controllers/admin.controller");
module.exports = Router()
  .post("/post", admin.postAdmin)
  .post("/login", admin.loginAdmin)
  .get("/get", admin.getAdmin)
  .get("/getById/:id", admin.getAdminById)
  .put("/update/:id", admin.updateAdmin)
  .delete("/delete/:id", admin.deleteAdmin);
