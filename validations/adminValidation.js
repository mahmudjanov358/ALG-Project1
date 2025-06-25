const Joi = require("joi"); // ----Joi Library

exports.postAdminValidation = Joi.object({
  name: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  is_active: Joi.boolean().default(true),
}); // ----postAdminValidation

exports.updateAdminValidation = exports.createAdminValidation.fork(
  Object.keys(exports.createAdminValidation.describe().keys),
  (schema) => schema.optional()
); // ----updateAdminValidation
