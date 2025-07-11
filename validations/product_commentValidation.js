const Joi = require("joi"); // ----Joi Library

exports.postProduct_CommentValidationSchema = Joi.object({
  product_id: Joi.string().required().messages({
    "string.base": "Product ID string ko'rinishida bo'lishi kerak!",
    "any.required": "Product ID bo'sh kiritilishi kerak!",
  }),
  user_id: Joi.string().required().messages({
    "string.base": "User ID string ko'rinishida bo'lishi kerak!",
    "any.required": "User ID bo'sh kiritilishi kerak!",
  }),
  comment: Joi.string().required().min(10).max(1000).messages({
    "string.base": "Comment string ko'rinishida bo'lishi kerak!",
    "any.required": "Comment bo'sh kiritilishi kerak!",
    "string.min": "Comment kamida 10 belgidan iborat bo'lishi kerak!",
    "string.max": "Comment ko'p 1000 belgidan iborat bo'lishi kerak!",
  }),
}); // ----postProduct_CommentValidationSchema

exports.updateProduct_CommentValidationSchema =
  exports.postProduct_CommentValidationSchema.fork(
    Object.keys(exports.postProduct_CommentValidationSchema.describe().keys),
    (schema) => schema.optional()
  ); // ----updateProduct_CommentValidationSchema
