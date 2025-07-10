const Joi = require("joi"); // ----Joi Library

exports.postFavoriteValidationSchema = Joi.object({
  user_id: Joi.string().required().messages({
    "string.base": "User ID string bo'lishi kerak!",
    "any.required": "User ID kiritilishi shart!",
  }),
  product_id: Joi.string().required().messages({
    "string.base": "Product ID string bo'lishi kerak!",
    "any.required": "Product ID kiritilishi shart!",
  }),
}); // ----postFavoriteValidationSchema
