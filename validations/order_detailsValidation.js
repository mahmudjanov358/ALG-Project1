const Joi = require("joi"); // ----Joi Library

exports.postOrder_DetailsValidationSchema = Joi.object({
  payment_id: Joi.string().required().messages({
    "string.base": "Payment ID string ko'rinishida bo'lishi kerak!",
    "any.required": "Payment ID bo'sh kiritilishi kerak!",
  }),
  user_id: Joi.string().required().messages({
    "string.base": "User ID string ko'rinishida bo'lishi kerak!",
    "any.required": "User ID bo'sh kiritilishi kerak!",
  }),
  total: Joi.number().required().integer().min(1000).messages({
    "number.base": "Total number ko'rinishida bo'lishi kerak!",
    "any.required": "Total bo'sh kiritilishi kerak!",
    "number.integer": "Total butun son bo'lishi kerak!",
    "number.min": "Total kamida 1000 so'm bo'lishi kerak!",
  }),
}); // ----postOrder_DetailsValidationSchema

exports.updateOrder_DetailsValidationSchema =
  exports.postOrder_DetailsValidationSchema.fork(
    Object.keys(exports.postOrder_DetailsValidationSchema.describe().keys),
    (schema) => schema.optional()
  ); // ----updateOrder_DetailsValidationSchema
