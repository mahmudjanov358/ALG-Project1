const Joi = require("joi"); // ----Joi Library

exports.postUserValidation = Joi.object({
  username: Joi.string().required().min(3).max(30),
  name: Joi.string().required(),
  lastName: Joi.string().required(),
  phone: Joi.string().required(),
  email: Joi.string().email().required(),
  address: Joi.string().required(),
  photo: Joi.string().optional(),
}); // ----postUserValidation

exports.updateUserValidation = exports.postUserValidation.fork(
  Object.keys(exports.postUserValidation.describe().keys),
  (schema) => schema.optional()
); // ----updateUserValidation
