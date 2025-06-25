const Joi = require("joi"); // ----Joi Library

exports.postUserValidationSchema = Joi.object({
  username: Joi.string().required().trim().min(3).max(30),
  name: Joi.string().required().min(3).max(30),
  lastName: Joi.string().required().min(3).max(30),
  phone: Joi.string().required(),
  email: Joi.string().required(),
  address: Joi.string().required(),
  photo: Joi.string().optional(),
}); // ----userValidationSchmea

exports.updateUserValidationSchema = exports.postUserValidationSchema.fork(
  Object.keys(exports.postUserValidationSchema.describe().keys),
  (schema) => schema.optional()
); // ----updateUserValidationSchema
