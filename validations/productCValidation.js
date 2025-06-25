const Joi = require("joi"); // ----Joi Library

exports.postProductCValidation = Joi.object({
  user_id: Joi.string().required(),
  product_id: Joi.string().required(),
  comment: Joi.string().required(),
}); // ----postProductCValidation

exports.updateProductCValidation = exports.postProductCValidation.fork(
  Object.keys(exports.postProductCValidation.describe().keys),
  (schema) => schema.optional()
); // ----updateProductCValidation
