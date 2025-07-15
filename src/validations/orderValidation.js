const Joi = require("joi"); // ----Joi Library

exports.postOrderValidationSchema = Joi.object({
  product_id: Joi.string().required().messages({
    "string.base": "Product ID string ko'rinishida bo'lishi kerak!",
    "any.required": "Product ID bo'sh kiritilishi kerak!",
  }),
  order_details_id: Joi.string().required().messages({
    "string.base": "Order Details ID string ko'rinishida bo'lishi kerak!",
    "any.required": "Order Details ID bo'sh kiritilishi kerak!",
  }),
}); // ----postOrderValidationSchema

exports.updateOrderValidationSchema = exports.postOrderValidationSchema.fork(
  Object.keys(exports.postOrderValidationSchema.describe().keys),
  (schema) => schema.optional()
); // ----updateOrderValidationSchema
