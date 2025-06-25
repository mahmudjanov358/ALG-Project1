const Joi = require("joi"); // ----Joi Library

exports.postFavoriteValidation = Joi.object({
  user_id: Joi.string().required(),
  product_id: Joi.string().required(),
}); // ----postFavoriteValidation

exports.updateFavoriteValidation = exports.postFavoriteValidation.fork(
  Object.keys(exports.postFavoriteValidation.describe().keys),
  (schema) => schema.optional()
); // ----updateFavoriteValidation
