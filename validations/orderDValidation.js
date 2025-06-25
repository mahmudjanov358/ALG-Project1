const Joi = require("joi"); // ----Joi Library

exports.postOrderDValidation = Joi.object({
  payment_id: Joi.string().required(),
  user_id: Joi.string().required(),
  total: Joi.number().required(),
}); // ----postOrderDValidation

exports.updateOrderDValidation = exports.postOrderDValidation.fork(
  Object.keys(exports.postOrderDValidation.describe().keys),
  (schema) => schema.optional()
); // ----updateOrderDValidation
