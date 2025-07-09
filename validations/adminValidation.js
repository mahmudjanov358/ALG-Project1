const Joi = require("joi");

exports.postAdminValidationSchema = Joi.object({
  name: Joi.string().required().min(2).max(30).messages({
    "string.base": "Name string type da bo'lishi kerak!",
  }),
});
