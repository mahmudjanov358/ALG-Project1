const Joi = require("joi"); // ----Joi Library
const statuses = ["active", "inactive", "pending", "delivered", "cancelled"];

exports.postStatusValidationSchema = Joi.object({
  status: Joi.string()
    .required()
    .valid(...statuses)
    .messages({
      "string.base": "Status string ko'rinishida bo'lishi kerak!",
      "any.required": "Status bo'sh kiritilishi kerak!",
      "any.only": `Status faqat ${statuses.join(", ")} bo'lishi kerak!`,
    }),
}); // ----postStatusValidationSchema

exports.updateStatusValidationSchema = exports.postStatusValidationSchema.fork(
  Object.keys(exports.postStatusValidationSchema.describe().keys),
  (schema) => schema.optional()
); // ----updateStatusValidationSchema
