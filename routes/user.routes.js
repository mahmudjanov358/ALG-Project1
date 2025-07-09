const { Router } = require("express");
const user = require("../controllers/user.controller");
module.exports = Router()
  .post("/post", user.postUser)
  .get("/get", user.getUser)
  .get("/getById/:id", user.getUserById)
  .put("/update/:id", user.updateUser)
  .delete("/delete/:id", user.deleteUser);
