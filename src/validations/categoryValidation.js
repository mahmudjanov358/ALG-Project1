const Joi = require("joi"); // ----Joi Library

exports.postCategoryValidationSchema = Joi.object({
  name: Joi.string().required().min(2).max(30).messages({
    "string.base": "Name string ko'rinishida bo'lishi kerak!",
    "any.required": "Name kiritilishi shart!",
    "string.min": "Name kamida 2ta belgidan iborat bo'lishi kerak!",
    "string.max": "Name ko'pida 30ta belgidan iborat bo'lishi kerak!",
  }),
}); // ----postCategoryValidationSchema

exports.updateCategoryValidationSchema =
  exports.postCategoryValidationSchema.fork(
    Object.keys(exports.postCategoryValidationSchema.describe().keys),
    (schema) => schema.optional()
  ); // ----updateCategoryValidationSchema
