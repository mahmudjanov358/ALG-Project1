const Joi = require("joi"); // ----Joi Library

exports.postStatusValidation = Joi.object({
  status: Joi.string().required(),
}); // ----postStatusValidation

exports.updateStatusValidation = exports.postStatusValidation.fork(
  Object.keys(exports.postStatusValidation.describe().keys),
  (schema) => schema.optional()
); // ----updateStatusValidation
