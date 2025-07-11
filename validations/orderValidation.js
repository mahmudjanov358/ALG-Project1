const Joi = require("joi"); // ----Joi Library

exports.postOrder_DetailsValidationSchema = Joi.object({
  product_id: Joi.string().required().messages({
    "string.base": "Product ID string ko'rinishida bo'lishi kerak!",
    "any.required": "Product ID bo'sh kiritilishi kerak!",
  }),
  order_details_id: Joi.string().required().messages({
    "string.base": "Order Details ID string ko'rinishida bo'lishi kerak!",
    "any.required": "Order Details ID bo'sh kiritilishi kerak!",
  }),
}); // ----postOrder_DetailsValidationSchema

exports.updateOrder_DetailsValidationSchema =
  exports.postOrder_DetailsValidationSchema.fork(
    Object.keys(exports.postOrder_DetailsValidationSchema.describe().keys),
    (schema) => schema.optional()
  ); // ----updateOrder_DetailsValidationSchema
