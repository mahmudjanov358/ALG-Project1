const Joi = require("joi"); // ----Joi Library

exports.postPaymentValidation = Joi.object({
  name: Joi.string().required(),
}); // ----postPaymentValidation

exports.updatePaymentValidation = exports.postPaymentValidation.fork(
  Object.keys(exports.postPaymentValidation.describe().keys),
  (schema) => schema.optional()
); // ----updatePaymentValidation
