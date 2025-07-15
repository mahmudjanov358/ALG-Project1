const Joi = require("joi"); // ----Joi Library

exports.postUserValidationSchema = Joi.object({
  username: Joi.string().required().min(2).max(30).messages({
    "string.base": "Username string ko'rinishida bo'lishi kerak!",
    "any.required": "Username bo'sh kiritilishi kerak!",
    "string.min": "Username kamida 2 belgidan iborat bo'lishi kerak!",
    "string.max": "Username ko'p 30 belgidan iborat bo'lishi kerak!",
  }),
  name: Joi.string().required().min(2).max(30).messages({
    "string.base": "Name string ko'rinishida bo'lishi kerak!",
    "any.required": "Name bo'sh kiritilishi kerak!",
    "string.min": "Name kamida 2 belgidan iborat bo'lishi kerak!",
    "string.max": "Name ko'p 30 belgidan iborat bo'lishi kerak!",
  }),
  lastName: Joi.string().required().min(2).max(30).messages({
    "string.base": "Last name string ko'rinishida bo'lishi kerak!",
    "any.required": "Last name bo'sh kiritilishi kerak!",
    "string.min": "Last name kamida 2 belgidan iborat bo'lishi kerak!",
    "string.max": "Last name ko'p 30 belgidan iborat bo'lishi kerak!",
  }),
  phone: Joi.string()
    .required()
    .pattern(/^\+998\d{9}$/)
    .messages({
      "string.base": "Phone string ko'rinishida bo'lishi kerak!",
      "any.required": "Phone bo'sh kiritilishi kerak!",
      "string.pattern.base":
        "Phone raqam +998XXXXXXXXX formatida bo'lishi kerak!",
    }),
  email: Joi.string().required().email().min(2).max(30).messages({
    "string.base": "Email string ko'rinishida bo'lishi kerak!",
    "any.required": "Email bo'sh kiritilishi kerak!",
    "string.email": "Email formati to'g'ri bo'lishi kerak!",
    "string.min": "Email kamida 2 belgidan iborat bo'lishi kerak!",
    "string.max": "Email ko'p 30 belgidan iborat bo'lishi kerak!",
  }),
  address: Joi.string().required().min(10).max(1000).messages({
    "string.base": "Address string ko'rinishida bo'lishi kerak!",
    "any.required": "Address bo'sh kiritilishi kerak!",
    "string.min": "Address kamida 10 belgidan iborat bo'lishi kerak!",
    "string.max": "Address ko'p 1000 belgidan iborat bo'lishi kerak!",
  }),
  photo: Joi.string().required().min(5).max(1000).messages({
    "string.base": "Photo string ko'rinishida bo'lishi kerak!",
    "any.required": "Photo bo'sh kiritilishi kerak!",
    "string.min": "Photo kamida 5 belgidan iborat bo'lishi kerak!",
    "string.max": "Photo ko'p 1000 belgidan iborat bo'lishi kerak!",
  }),
}); // ----postUserValidationSchema

exports.updateUserValidationSchema = exports.postUserValidationSchema.fork(
  Object.keys(exports.postUserValidationSchema.describe().keys),
  (schema) => schema.optional()
); // ----updateUserValidationSchema
