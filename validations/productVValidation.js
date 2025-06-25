const Joi = require("joi"); // ----Joi Library

exports.postProductVValidation = Joi.object({
  product_id: Joi.string().required(),
  price: Joi.number().required(),
  color: Joi.string().required(),
}); // ----postProductVValidation

exports.updateProductVValidation = exports.postProductVValidation.fork(
  Object.keys(exports.postProductVValidation.describe().keys),
  (schema) => schema.optional()
); // ----updateProductVValidation
