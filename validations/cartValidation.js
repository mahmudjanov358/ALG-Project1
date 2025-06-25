const Joi = require("joi"); // ----Joi Library

exports.postCartValidation = Joi.object({
  user_id: Joi.string().required(),
  status_id: Joi.string().required(),
}); // ----postCartValidation

exports.updateCartValidation = exports.postCartValidation.fork(
  Object.keys(exports.postCartValidation.describe().keys),
  (schema) => schema.optional()
); // ----updateCartValidation
