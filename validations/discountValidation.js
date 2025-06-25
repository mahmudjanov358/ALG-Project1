const Joi = require("joi"); // ----Joi Library

exports.postDiscountValidation = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
  percent: Joi.number().min(0).max(100).required(),
}); // ----postDiscountValidation

exports.updateDiscountValidation = exports.postDiscountValidation.fork(
  Object.keys(exports.postDiscountValidation.describe().keys),
  (schema) => schema.optional()
); // ----updateDiscountValidation
