const Joi = require("joi");

exports.postCategoryValidationSchema = Joi.object({
  name: Joi.string().required().min(2).max(30).messages({
    "string.base": "Name string type bo'lishi lozim",
    "any.required": "Name kiritilishi shart!",
    "string.min": "Name kamida 2 belgidan iborat bo'lishi kerak!",
    "string.max": "Name ko'pida 30 belgidan iborat bo'lishi kerak!",
  }),
}); // ----postCategoryValidationSchema

exports.updateCategoryValidationSchema =
  exports.postCategoryValidationSchema.fork(
    Object.keys(exports.postCategoryValidationSchema.describe().keys),
    (schema) => schema.optional()
  ); // ----updateCategoryValidationSchema
