const Joi = require("joi"); // ----Joi Library

exports.postCategoryValidation = Joi.object({
  name: Joi.string().required(),
}); // ----postCategoryValidation

exports.updateCategoryValidation = exports.postCategoryValidation.fork(
  Object.keys(exports.postCategoryValidation.describe().keys),
  (schema) => schema.optional()
); // ----updateCategoryValidation
