const Joi = require("joi"); // ----Joi Library

exports.postAdminValidationSchema = Joi.object({
  name: Joi.string().required().min(2).max(30).messages({
    "string.base": "Name string type da bo'lishi kerak!",
    "string.empty": "Name kiritilishi shart!",
    "string.min": "Name kamida 2ta belgidan iborat bo'lishi kerak!",
    "string.max": "Name ko'pida 30ta belgidan iborat bo'lishi kerak!",
    "any.required": "Name kiritilishi shart!",
  }),
}); // ----postAdminValidationSchema

exports.updateAdminValidationSchema = exports.postAdminValidationSchema.fork(
  Object.keys(exports.postAdminValidationSchema.describe().keys),
  (schema) => schema.optional()
); // ----updateAdminValidationSchema
