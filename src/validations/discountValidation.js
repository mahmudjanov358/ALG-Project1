const Joi = require("joi"); // ----Joi Library

exports.postDiscountValidationSchema = Joi.object({
  name: Joi.string().required().min(2).max(30).messages({
    "string.base": "Name string ko'rinishida bo'lishi kerak!",
    "string.min": "Name kamida 2ta belgidan iborat bo'lishi kerak!",
    "string.max": "Name ko'pida 30ta belgidan iborat bo'lishi kerak!",
    "any.required": "Name kiritilishi shart!",
  }),
  description: Joi.string().optional().min(10).max(1000).messages({
    "string.base": "Description string ko'rinishida bo'lishi kerak!",
    "string.min": "Description kamida 10 belgidan iborat bo'lishi kerak!",
    "string.max": "Description ko'p 1000 belgidan iborat bo'lishi kerak!",
  }),
  percent: Joi.number().required().integer().min(1).max(100).messages({
    "number.base": "Percent number ko'rinishida bo'lishi kerak!",
    "any.required": "Percent kiritilishi shart!",
    "number.min": "Percent kamida 1ta raqam bo'lishi kerak!",
    "number.max": "Percent ko'pida 100ta raqam bo'lishi kerak!",
    "number.integer": "Percent butun son bo'lishi kerak!",
  }),
}); // ----postDiscountValidationSchema

exports.updateDiscountValidationSchema =
  exports.postDiscountValidationSchema.fork(
    Object.keys(exports.postDiscountValidationSchema.describe().keys),
    (schema) => schema.optional()
  ); // ----updateDiscountValidationSchema
