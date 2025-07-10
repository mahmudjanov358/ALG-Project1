const Joi = require("joi"); // ----Joi Library

exports.postCartValidationSchema = Joi.object({
  user_id: Joi.string().required().messages({
    "string.base": "Cart_Item string type bo'lishi lozim!",
    "any.required": "Cart_Item kiritilishi shart!",
  }),
  status_id: Joi.string().required().messages({
    "string.base": "Status string type bo'lishi lozim!",
    "any.required": "Status kiritilishi shart!",
  }),
}); // ----postCartValidationSchema
