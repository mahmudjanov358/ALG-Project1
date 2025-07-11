const Joi = require("joi"); // ----Joi Library

exports.postPaymentValidationSchema = Joi.object({
  name: Joi.string().required().messages({
    "string.base": "Name string ko'rinishida bo'lishi kerak!",
    "any.required": "Name bo'sh kiritilishi kerak!",
  }),
}); // ----postPaymentValidationSchema

exports.updatePaymentValidationSchema =
  exports.postPaymentValidationSchema.fork(
    Object.keys(exports.postPaymentValidationSchema.describe().keys),
    (schema) => schema.optional()
  ); // ----updatePaymentValidationSchema
