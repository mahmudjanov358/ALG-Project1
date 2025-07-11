const Joi = require("joi"); // ----Joi Library

exports.postCartValidationSchema = Joi.object({
  user_id: Joi.string().required().messages({
    "string.base": "User ID string ko'rinishida bo'lishi kerak!",
    "any.required": "User ID kiritilishi shart!",
  }),
  status_id: Joi.string().required().messages({
    "string.base": "Status ID string ko'rinishida bo'lishi kerak!",
    "any.required": "Status ID kiritilishi shart!",
  }),
}); // ----postCartValidationSchema
