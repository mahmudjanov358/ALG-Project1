const { Router } = require("express"); // ----Express Library
const user = Router(); // ----User Router()

const {
  postUser,
  getUser,
  getUserById,
  updateUser,
  deleteUser,
} = require("../controllers/user.controller"); // ----User Controllers Functions

// ----Paths
user.post("/postUser", postUser);
user.get("/getUser", getUser);
user.get("/getUserById/:id", getUserById);
user.put("/updateUser/:id", updateUser);
user.delete("deleteUser/:id", deleteUser);

module.exports = { user }; // ----Exporting User Router
