const Joi = require("joi"); // ----Joi Library

exports.postCart_ItemValidationSchema = Joi.object({
  cart_id: Joi.string().required().messages({
    "string.base": "Cart ID string ko'rinishida bo'lishi kerak!",
    "any.required": "Cart ID kiritilishi shart!",
  }),
  product_id: Joi.string().required().messages({
    "string.base": "Product ID string ko'rinishida bo'lishi kerak!",
    "any.required": "Product ID kiritilishi shart!",
  }),
}); // ----postCart_ItemValidationSchema
