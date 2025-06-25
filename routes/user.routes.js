const { Router } = require("express"); // ----Express Library
const user = Router(); // ----User Router()

const {
  postUser,
  getUser,
  getUserById,
  updateUser,
  deleteUser,
} = require("../controllers/user.controller"); // ----User Controllers Functions

const {
  postUserValidationSchema,
  updateUserValidationSchema,
} = require("../validations/userValidation"); // ----User Validations Functions

const userValidation = (schema) => (req, res, next) => {
  const validationResult = schema.validate(req.body);
  if (validationResult.error) {
    return res.status(404).send(validationResult.error.details[0].message);
  } else {
    next();
  }
};

// ----Paths
user.post("/postUser", userValidation(postUserValidationSchema), postUser);
user.get("/getUser", getUser);
user.get("/getUserById/:id", getUserById);
user.put(
  "/updateUser/:id",
  userValidation(updateUserValidationSchema),
  updateUser
);
user.delete("deleteUser/:id", deleteUser);

module.exports = { user }; // ----Exporting User Router
