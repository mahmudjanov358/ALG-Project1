const Joi = require("joi");

exports.postCart_ItemValidationSchema = Joi.object({
  cart_id: Joi.string().required().messages({
    "string.base": "Cart string type bo'lishi lozim!",
    "any.required": "Cart kiritilishi shart!",
  }),
  product_id: Joi.string().required().messages({
    "string.base": "Product string type bo'lishi lozim!",
    "any.required": "Product kiritilishi shart!",
  }),
});
