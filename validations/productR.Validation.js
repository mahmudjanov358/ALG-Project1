const Joi = require("joi"); // ----Joi Library

exports.postProductRValidation = Joi.object({
  product_id: Joi.string().required(),
  user_id: Joi.string().required(),
  review_text: Joi.string().required(),
  rating: Joi.number().min(1).max(5).required(),
}); // ----postProductRValidation

exports.updateProductRValidation = exports.postProductRValidation.fork(
  Object.keys(exports.postProductRValidation.describe().keys),
  (schema) => schema.optional()
); // ----updateProductRValidation
