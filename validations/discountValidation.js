const Joi = require("joi"); // ----Joi Library

exports.postDiscountValidationSchema = Joi.object({
  name: Joi.string().required().min(2).max(30).messages({
    "string.base": "Name string type bo'lishi kerak!",
    "string.min": "Name kamida 2ta belgidan iborat bo'lishi kerak!",
    "string.max": "Name ko'pida 30ta belgidan iborat bo'lishi kerak!",
    "any.required": "Name kiritilishi shart!",
  }),
  description: Joi.string().optional(),
  percent: Joi.number().required().min(1).max(100).messages({
    "number.base": "Percent number type bo'lishi kerak!",
    "string.min": "Percent kamida 2ta raqamdan iborat bo'lishi kerak!",
    "string.max": "Percent ko'pida 100ta raqamdan iborat bo'lishi kerak!",
    "any.required": "Percent kiritilishi shart!",
  }),
}); // ----postDiscountValidationSchema

exports.updateDiscountValidationSchema =
  exports.postDiscountValidationSchema.fork(
    Object.keys(exports.postDiscountValidationSchema.describe().keys),
    (schema) => schema.optional()
  ); // ----updateDiscountValidationSchema
