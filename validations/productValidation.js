const Joi = require("joi"); // ----Joi Library

exports.postProductValidation = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
  photo: Joi.string().required(),
  price: Joi.number().required(),
  count: Joi.number().required(),
  category_id: Joi.string().required(),
  discount_id: Joi.string().optional(),
}); // ----postProductValidation

exports.updateProductValidation = exports.postProductValidation.fork(
  Object.keys(exports.postProductValidation.describe().keys),
  (schema) => schema.optional()
); // ----updateProductValidation
