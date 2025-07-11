const Joi = require("joi"); // ----Joi Library

exports.postProduct_ReviewsValidationSchema = Joi.object({
  product_id: Joi.string().required().messages({
    "string.base": "Product ID string ko'rinishida bo'lishi kerak!",
    "any.required": "Product ID bo'sh kiritilishi kerak!",
  }),
  user_id: Joi.string().required().messages({
    "string.base": "User ID string ko'rinishida bo'lishi kerak!",
    "any.required": "User ID bo'sh kiritilishi kerak!",
  }),
  review_text: Joi.string().required().min(10).max(1000).messages({
    "string.base": "Review text string ko'rinishida bo'lishi kerak!",
    "any.required": "Review text bo'sh kiritilishi kerak!",
    "string.min": "Review text kamida 10 belgidan iborat bo'lishi kerak!",
    "string.max": "Review text ko'p 1000 belgidan iborat bo'lishi kerak!",
  }),
  rating: Joi.number().required().integer().min(1).max(5).messages({
    "number.base": "Rating number ko'rinishida bo'lishi kerak!",
    "any.required": "Rating bo'sh kiritilishi kerak!",
    "number.integer": "Rating butun son bo'lishi kerak!",
    "number.min": "Rating kamida 1 belgidan iborat bo'lishi kerak!",
    "number.max": "Rating ko'p 5 belgidan iborat bo'lishi kerak!",
  }),
}); // ----postProduct_ReviewsValidationSchema

exports.updateProduct_ReviewsValidationSchema =
  exports.postProduct_ReviewsValidationSchema.fork(
    Object.keys(exports.postProduct_ReviewsValidationSchema.describe().keys),
    (schema) => schema.optional()
  ); // ----updateProduct_ReviewsValidationSchema
