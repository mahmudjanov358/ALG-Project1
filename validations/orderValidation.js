const Joi = require("joi"); // ----Joi Library

exports.postOrderValidation = Joi.object({
  product_id: Joi.string().required(),
  order_details_id: Joi.string().required(),
}); // ----postOrderValidation

exports.updateOrderValidation = exports.postOrderValidation.fork(
  Object.keys(exports.postOrderValidation.describe().keys),
  (schema) => schema.optional()
); // ----updateOrderValidation
