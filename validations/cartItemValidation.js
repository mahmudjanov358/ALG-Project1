const Joi = require("joi"); // ----Joi Library

exports.postCartItemValidation = Joi.object({
  cart_id: Joi.string().required(),
  product_id: Joi.string().required(),
}); // ----postCartItemValidation

exports.updateCartItemValidation = exports.postCartItemValidation.fork(
  Object.keys(exports.postCartItemValidation.describe().keys),
  (schema) => schema.optional()
); // ----updateCartItemValidation
