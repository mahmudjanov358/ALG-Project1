const { Router } = require("express");
const status = require("../controllers/status.controller");
module.exports = Router()
  .post("/post", status.postStatus)
  .get("/get", status.getStatus)
  .get("/getById/:id", status.getStatusById)
  .put("/update/:id", status.updateStatus)
  .delete("/delete/:id", status.deleteStatus);
